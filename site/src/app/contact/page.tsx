"use client";

import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { toast } from "sonner";
import { Phone, MapPin, Monitor, Loader2, Check } from "lucide-react";
import { useBookingStore } from "@/lib/store";

const schema = z.object({
  firstName: z.string().min(2, "First name required"),
  lastName: z.string().min(2, "Last name required"),
  phone: z.string().min(5, "Phone number required"),
  email: z.string().email("Invalid email").optional().or(z.literal("")),
  trainingInterest: z.enum(["one-on-one", "group", "open-account"]),
  experienceLevel: z.enum(["beginner", "some-experience", "experienced"]),
  preferredDate: z.string().optional(),
  preferredTime: z.string().optional(),
  message: z.string().optional(),
});

type FormValues = z.infer<typeof schema>;

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [isPending, setIsPending] = useState(false);
  const { selectedCohort, closeBooking } = useBookingStore();

  const defaultTrainingInterest = selectedCohort?.type === "one-on-one" ? "one-on-one" : selectedCohort ? "group" : "one-on-one";

  const { register, handleSubmit, reset, formState: { errors } } = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: {
      trainingInterest: defaultTrainingInterest,
      experienceLevel: "beginner",
      message: selectedCohort ? `I'd like to enroll in: ${selectedCohort.title}` : "",
    },
  });

  const onSubmit = async (data: FormValues) => {
    setIsPending(true);
    // Mocking the API call
    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));
      console.log("Form data:", data);
      setSubmitted(true);
      reset();
      closeBooking();
      toast.success("Request received! Steve will be in touch with you shortly.");
    } catch (error) {
      toast.error("Something went wrong. Please try again.");
    } finally {
      setIsPending(false);
    }
  };

  const inputClass =
    "w-full bg-background border border-border rounded text-sm text-foreground placeholder:text-muted-foreground px-4 py-3 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all";

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* PAGE HEADER */}
      <section className="pt-28 pb-16 bg-muted border-b border-border">
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: "hsl(22 100% 50%)" }}>
            Get in Touch
          </p>
          <h1 className="text-5xl md:text-6xl font-black text-foreground">Ready to begin?</h1>
          <p className="text-muted-foreground mt-4 max-w-xl text-sm leading-relaxed">
            Fill in the form and Steve will reach out personally to discuss your goals and the right path for you.
          </p>
          {selectedCohort && (
            <div className="mt-5 inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-border bg-card text-sm">
              <span className="text-muted-foreground">Enrolling in:</span>
              <span className="font-semibold text-foreground">{selectedCohort.title}</span>
            </div>
          )}
        </div>
      </section>

      {/* MAIN CONTENT */}
      <section className="py-20 bg-background">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">

            {/* CONTACT INFO SIDEBAR */}
            <div className="space-y-6">
              <p className="text-foreground font-semibold text-sm">Contact Details</p>
              <div className="space-y-4">
                <div className="flex items-start gap-4 p-4 bg-card border border-border rounded-lg">
                  <Phone className="w-5 h-5 mt-0.5 flex-shrink-0" style={{ color: "hsl(22 100% 50%)" }} />
                  <div>
                    <p className="text-foreground text-sm font-medium">Phone & WhatsApp</p>
                    <a href="tel:+254726043830" className="text-muted-foreground text-sm hover:text-foreground transition-colors">
                      +254 726 043 830
                    </a>
                    <p className="text-muted-foreground text-xs mt-1">Steve · Call or WhatsApp</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 bg-card border border-border rounded-lg">
                  <MapPin className="w-5 h-5 mt-0.5 flex-shrink-0" style={{ color: "hsl(22 100% 50%)" }} />
                  <div>
                    <p className="text-foreground text-sm font-medium">Location</p>
                    <p className="text-muted-foreground text-sm">Kisumu, Kenya</p>
                    <p className="text-muted-foreground text-xs mt-1">In-person & online sessions</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 bg-card border border-border rounded-lg">
                  <Monitor className="w-5 h-5 mt-0.5 flex-shrink-0" style={{ color: "hsl(22 100% 50%)" }} />
                  <div>
                    <p className="text-foreground text-sm font-medium">Platform</p>
                    <a href="https://deriv.com" target="_blank" rel="noreferrer" className="text-muted-foreground text-sm hover:text-foreground transition-colors">
                      Deriv
                    </a>
                    <p className="text-muted-foreground text-xs mt-1">All training on Deriv</p>
                  </div>
                </div>
              </div>

              <div className="p-5 rounded-lg border border-border" style={{ backgroundColor: "hsl(22 100% 50% / 0.08)" }}>
                <p className="text-sm font-semibold text-foreground mb-2">Quick response</p>
                <p className="text-muted-foreground text-xs leading-relaxed">
                  We respond to all enquiries within 1 hour during business hours. No commitment required.
                </p>
              </div>
            </div>

            {/* BOOKING FORM */}
            <div className="lg:col-span-2">
              {submitted ? (
                <div className="flex flex-col items-center justify-center py-20 bg-card border border-border rounded-lg text-center">
                  <div
                    className="w-16 h-16 rounded-full flex items-center justify-center mb-6"
                    style={{ backgroundColor: "hsl(22 100% 50%)" }}
                  >
                    <Check className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-3">Request Received!</h3>
                  <p className="text-muted-foreground text-sm max-w-sm">
                    Steve will review your details and contact you shortly to discuss next steps.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-8 text-sm font-semibold hover:opacity-80 transition-opacity"
                    style={{ color: "hsl(22 100% 50%)" }}
                  >
                    Submit another request
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit(onSubmit)} className="bg-card border border-border rounded-lg p-8 space-y-6">
                  <div>
                    <h2 className="text-xl font-bold text-foreground mb-1">Book a Session</h2>
                    <p className="text-muted-foreground text-sm">No commitment required — just a conversation about where you are and where you want to go.</p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-muted-foreground text-xs font-semibold uppercase tracking-widest mb-2">First Name *</label>
                      <input {...register("firstName")} className={inputClass} placeholder="John" />
                      {errors.firstName && <p className="text-red-500 text-xs mt-1">{errors.firstName.message?.toString()}</p>}
                    </div>
                    <div>
                      <label className="block text-muted-foreground text-xs font-semibold uppercase tracking-widest mb-2">Last Name *</label>
                      <input {...register("lastName")} className={inputClass} placeholder="Doe" />
                      {errors.lastName && <p className="text-red-500 text-xs mt-1">{errors.lastName.message?.toString()}</p>}
                    </div>
                    <div>
                      <label className="block text-muted-foreground text-xs font-semibold uppercase tracking-widest mb-2">Phone / WhatsApp *</label>
                      <input {...register("phone")} className={inputClass} placeholder="+254 700 000 000" />
                      {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone.message?.toString()}</p>}
                    </div>
                    <div>
                      <label className="block text-muted-foreground text-xs font-semibold uppercase tracking-widest mb-2">Email (Optional)</label>
                      <input {...register("email")} type="email" className={inputClass} placeholder="john@email.com" />
                    </div>
                    <div>
                      <label className="block text-muted-foreground text-xs font-semibold uppercase tracking-widest mb-2">Training Interest *</label>
                      <select {...register("trainingInterest")} className={inputClass + " appearance-none cursor-pointer"}>
                        <option value="one-on-one">1-on-1 Mentorship</option>
                        <option value="group">Group Sessions</option>
                        <option value="open-account">Open an Account Only</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-muted-foreground text-xs font-semibold uppercase tracking-widest mb-2">Experience Level *</label>
                      <select {...register("experienceLevel")} className={inputClass + " appearance-none cursor-pointer"}>
                        <option value="beginner">Beginner</option>
                        <option value="some-experience">Some Experience</option>
                        <option value="experienced">Experienced</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-muted-foreground text-xs font-semibold uppercase tracking-widest mb-2">Preferred Date</label>
                      <input {...register("preferredDate")} type="date" className={inputClass} />
                    </div>
                    <div>
                      <label className="block text-muted-foreground text-xs font-semibold uppercase tracking-widest mb-2">Preferred Time</label>
                      <input {...register("preferredTime")} type="time" className={inputClass} />
                    </div>
                  </div>

                  <div>
                    <label className="block text-muted-foreground text-xs font-semibold uppercase tracking-widest mb-2">Message (Optional)</label>
                    <textarea
                      {...register("message")}
                      className={inputClass + " min-h-[100px] resize-none"}
                      placeholder="Your goals or any questions..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isPending}
                    className="w-full py-3.5 rounded text-sm font-bold text-white disabled:opacity-60 transition-opacity hover:opacity-90 flex items-center justify-center gap-2"
                    style={{ backgroundColor: "hsl(22 100% 50%)" }}
                  >
                    {isPending ? <><Loader2 className="w-4 h-4 animate-spin" /> Submitting...</> : "Submit Request"}
                  </button>

                  <p className="text-muted-foreground text-xs text-center">
                    We respond within 1 hour. No commitment required.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
