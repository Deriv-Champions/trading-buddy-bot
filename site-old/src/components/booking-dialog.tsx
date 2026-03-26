import { motion, AnimatePresence } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { X, Loader2, Calendar, Clock, User, Mail, Phone, BookOpen, GraduationCap, MessageSquare } from "lucide-react";
import { Button } from "./ui/button";
import { useBookingStore } from "@/lib/store";
import { useCreateBooking } from "@workspace/api-client-react";
import { useToast } from "@/hooks/use-toast";
import { cn } from "@/lib/utils";

const bookingSchema = z.object({
  firstName: z.string().min(2, "First name is required"),
  lastName: z.string().min(2, "Last name is required"),
  phone: z.string().min(5, "Phone number is required"),
  email: z.string().email("Invalid email").optional().or(z.literal("")),
  trainingInterest: z.enum(["one-on-one", "group", "open-account"], {
    required_error: "Please select an interest",
  }),
  experienceLevel: z.enum(["beginner", "some-experience", "experienced"], {
    required_error: "Please select your experience level",
  }),
  preferredDate: z.string().optional(),
  preferredTime: z.string().optional(),
  message: z.string().optional(),
});

type BookingFormValues = z.infer<typeof bookingSchema>;

export function BookingDialog() {
  const { isOpen, closeBooking } = useBookingStore();
  const { toast } = useToast();
  
  const { register, handleSubmit, reset, formState: { errors } } = useForm<BookingFormValues>({
    resolver: zodResolver(bookingSchema),
    defaultValues: {
      trainingInterest: "one-on-one",
      experienceLevel: "beginner"
    }
  });

  const { mutate: createBooking, isPending } = useCreateBooking({
    mutation: {
      onSuccess: () => {
        toast({
          title: "Session Requested",
          description: "Steve will review your request and get back to you shortly.",
          className: "bg-card border-primary text-foreground"
        });
        reset();
        closeBooking();
      },
      onError: (error) => {
        toast({
          title: "Booking Failed",
          description: error?.error?.error || "There was a problem submitting your request.",
          variant: "destructive"
        });
      }
    }
  });

  const onSubmit = (data: BookingFormValues) => {
    createBooking({ data });
  };

  const inputClass = "w-full bg-black/40 border border-white/10 rounded-xl pl-11 pr-4 py-3 text-white placeholder:text-white/30 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all";

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-hidden">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeBooking}
            className="absolute inset-0 bg-black/80 backdrop-blur-sm"
          />
          
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto bg-[#0a0a0c] border border-white/10 rounded-2xl shadow-2xl shadow-primary/10 custom-scrollbar"
          >
            <div className="sticky top-0 z-10 flex items-center justify-between p-6 bg-[#0a0a0c]/80 backdrop-blur-md border-b border-white/5">
              <div>
                <h2 className="text-2xl font-display font-bold text-white">Book a Session</h2>
                <p className="text-sm text-white/50 mt-1">Take the first step toward market mastery.</p>
              </div>
              <button 
                onClick={closeBooking}
                className="p-2 rounded-full hover:bg-white/10 text-white/50 hover:text-white transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleSubmit(onSubmit)} className="p-6 space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {/* First Name */}
                <div className="space-y-2">
                  <label className="text-sm font-medium text-white/70 ml-1">First Name *</label>
                  <div className="relative">
                    <User className="absolute left-4 top-3.5 w-4 h-4 text-white/40" />
                    <input {...register("firstName")} className={inputClass} placeholder="John" />
                  </div>
                  {errors.firstName && <p className="text-destructive text-xs ml-1">{errors.firstName.message}</p>}
                </div>

                {/* Last Name */}
                <div className="space-y-2">
                  <label className="text-sm font-medium text-white/70 ml-1">Last Name *</label>
                  <div className="relative">
                    <User className="absolute left-4 top-3.5 w-4 h-4 text-white/40" />
                    <input {...register("lastName")} className={inputClass} placeholder="Doe" />
                  </div>
                  {errors.lastName && <p className="text-destructive text-xs ml-1">{errors.lastName.message}</p>}
                </div>

                {/* Phone */}
                <div className="space-y-2">
                  <label className="text-sm font-medium text-white/70 ml-1">Phone Number *</label>
                  <div className="relative">
                    <Phone className="absolute left-4 top-3.5 w-4 h-4 text-white/40" />
                    <input {...register("phone")} className={inputClass} placeholder="+254 700 000 000" />
                  </div>
                  {errors.phone && <p className="text-destructive text-xs ml-1">{errors.phone.message}</p>}
                </div>

                {/* Email */}
                <div className="space-y-2">
                  <label className="text-sm font-medium text-white/70 ml-1">Email (Optional)</label>
                  <div className="relative">
                    <Mail className="absolute left-4 top-3.5 w-4 h-4 text-white/40" />
                    <input {...register("email")} type="email" className={inputClass} placeholder="john@example.com" />
                  </div>
                  {errors.email && <p className="text-destructive text-xs ml-1">{errors.email.message}</p>}
                </div>

                {/* Training Interest */}
                <div className="space-y-2">
                  <label className="text-sm font-medium text-white/70 ml-1">Program of Interest *</label>
                  <div className="relative">
                    <BookOpen className="absolute left-4 top-3.5 w-4 h-4 text-white/40" />
                    <select {...register("trainingInterest")} className={cn(inputClass, "appearance-none bg-[#0f0f13]")}>
                      <option value="one-on-one">1-on-1 Mentorship</option>
                      <option value="group">Group Sessions</option>
                      <option value="open-account">Open an Account Only</option>
                    </select>
                  </div>
                  {errors.trainingInterest && <p className="text-destructive text-xs ml-1">{errors.trainingInterest.message}</p>}
                </div>

                {/* Experience Level */}
                <div className="space-y-2">
                  <label className="text-sm font-medium text-white/70 ml-1">Experience Level *</label>
                  <div className="relative">
                    <GraduationCap className="absolute left-4 top-3.5 w-4 h-4 text-white/40" />
                    <select {...register("experienceLevel")} className={cn(inputClass, "appearance-none bg-[#0f0f13]")}>
                      <option value="beginner">Beginner (New to trading)</option>
                      <option value="some-experience">Some Experience</option>
                      <option value="experienced">Experienced (Need an edge)</option>
                    </select>
                  </div>
                  {errors.experienceLevel && <p className="text-destructive text-xs ml-1">{errors.experienceLevel.message}</p>}
                </div>

                {/* Preferred Date */}
                <div className="space-y-2">
                  <label className="text-sm font-medium text-white/70 ml-1">Preferred Date (Optional)</label>
                  <div className="relative">
                    <Calendar className="absolute left-4 top-3.5 w-4 h-4 text-white/40" />
                    <input {...register("preferredDate")} type="date" className={inputClass} />
                  </div>
                </div>

                {/* Preferred Time */}
                <div className="space-y-2">
                  <label className="text-sm font-medium text-white/70 ml-1">Preferred Time (Optional)</label>
                  <div className="relative">
                    <Clock className="absolute left-4 top-3.5 w-4 h-4 text-white/40" />
                    <input {...register("preferredTime")} type="time" className={inputClass} />
                  </div>
                </div>
              </div>

              {/* Message */}
              <div className="space-y-2">
                <label className="text-sm font-medium text-white/70 ml-1">Message (Optional)</label>
                <div className="relative">
                  <MessageSquare className="absolute left-4 top-4 w-4 h-4 text-white/40" />
                  <textarea 
                    {...register("message")} 
                    className={cn(inputClass, "min-h-[100px] pl-11 pt-3 resize-none")} 
                    placeholder="Tell us a bit about your goals..."
                  />
                </div>
              </div>

              <div className="pt-4 flex justify-end gap-3 border-t border-white/5">
                <Button type="button" variant="ghost" onClick={closeBooking}>
                  Cancel
                </Button>
                <Button type="submit" disabled={isPending} className="min-w-[140px]">
                  {isPending ? <Loader2 className="w-5 h-5 animate-spin" /> : "Submit Request"}
                </Button>
              </div>
            </form>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
