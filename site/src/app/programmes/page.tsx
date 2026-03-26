"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Calendar, Clock, Users, Check, ArrowRight, Star, Lock, ChevronDown, ChevronUp } from "lucide-react";
import { useBookingStore } from "@/lib/store";

interface Cohort {
  id: string;
  title: string;
  subtitle: string;
  type: "group" | "one-on-one";
  level: "Beginner" | "Intermediate" | "Advanced" | "All Levels";
  startDate: string;
  duration: string;
  schedule: string;
  spots: number;
  spotsLeft: number;
  price: string;
  description: string;
  includes: string[];
  status: "open" | "almost-full" | "full" | "coming-soon";
}

const COHORTS: Cohort[] = [
  {
    id: "forex-foundations-may",
    title: "Forex Foundations",
    subtitle: "May 2026 Cohort",
    type: "group",
    level: "Beginner",
    startDate: "May 5, 2026",
    duration: "6 Weeks",
    schedule: "Mon & Wed, 7:00 PM – 9:00 PM EAT",
    spots: 15,
    spotsLeft: 9,
    price: "KES 8,500",
    description:
      "The complete beginner's path. We cover market structure, Deriv platform setup, basic price action, risk management fundamentals, and your first live trades — all in 6 structured weeks.",
    includes: [
      "12 live group sessions (2hrs each)",
      "Access to session recordings",
      "Private WhatsApp group",
      "Personal risk management plan",
      "Certificate of completion",
    ],
    status: "open",
  },
  {
    id: "advanced-price-action-apr",
    title: "Advanced Price Action",
    subtitle: "April 2026 Cohort",
    type: "group",
    level: "Intermediate",
    startDate: "April 14, 2026",
    duration: "4 Weeks",
    schedule: "Tue & Thu, 8:00 PM – 10:00 PM EAT",
    spots: 10,
    spotsLeft: 2,
    price: "KES 12,000",
    description:
      "For traders who already understand the basics but struggle with consistency. Deep focus on advanced entry models, trade management, and psychological edge — taught entirely through live chart walkthroughs.",
    includes: [
      "8 live group sessions (2hrs each)",
      "Live trade review sessions",
      "Advanced entry model playbook",
      "1 private Q&A call with Steve",
      "Lifetime access to recordings",
    ],
    status: "almost-full",
  },
  {
    id: "gold-binary-masterclass",
    title: "Gold & Binary Masterclass",
    subtitle: "June 2026 Cohort",
    type: "group",
    level: "All Levels",
    startDate: "June 2, 2026",
    duration: "3 Weeks",
    schedule: "Sat & Sun, 10:00 AM – 12:00 PM EAT",
    spots: 20,
    spotsLeft: 20,
    price: "KES 6,500",
    description:
      "Specialist training on Deriv's Gold (XAU/USD) and Binary Options instruments. Learn how Steve approaches these unique markets, including volatility windows, sizing logic, and binary strike selection.",
    includes: [
      "6 live weekend sessions",
      "XAU/USD trade model guide",
      "Binary options strategy playbook",
      "Group chat access",
      "30-day post-cohort support",
    ],
    status: "coming-soon",
  },
  {
    id: "one-on-one-intensive",
    title: "1-on-1 Intensive Mentorship",
    subtitle: "Rolling Enrolment — Any Time",
    type: "one-on-one",
    level: "All Levels",
    startDate: "Flexible — starts when you're ready",
    duration: "4 or 8 Weeks",
    schedule: "Fully flexible — arranged directly with Steve",
    spots: 3,
    spotsLeft: 2,
    price: "KES 25,000 / 4wk  ·  KES 45,000 / 8wk",
    description:
      "The fastest path to mastery. A fully personalised programme built around your specific weaknesses, schedule, and goals. Steve works with you one-to-one through live chart sessions, trade reviews, and between-session support.",
    includes: [
      "8 or 16 private sessions with Steve",
      "Personalised curriculum & trading plan",
      "Live trade analysis and review",
      "Accountability check-ins",
      "Priority WhatsApp support",
      "Flexible online or in-person (Kisumu)",
    ],
    status: "open",
  },
];

const statusConfig = {
  open: { label: "Open", color: "text-green-500", bg: "bg-green-500/10" },
  "almost-full": { label: "Almost Full", color: "text-orange-400", bg: "bg-orange-400/10" },
  full: { label: "Full", color: "text-red-400", bg: "bg-red-400/10" },
  "coming-soon": { label: "Coming Soon", color: "text-blue-400", bg: "bg-blue-400/10" },
};

function CohortCard({ cohort }: { cohort: Cohort }) {
  const [expanded, setExpanded] = useState(false);
  const { openBooking } = useBookingStore();
  const router = useRouter();

  const statusCfg = statusConfig[cohort.status];
  const isFull = cohort.status === "full";
  const isSoon = cohort.status === "coming-soon";
  const spotsPercent = Math.round(((cohort.spots - cohort.spotsLeft) / cohort.spots) * 100);

  const handleEnroll = () => {
    openBooking({
      id: cohort.id,
      title: cohort.title + " — " + cohort.subtitle,
      type: cohort.type,
    });
    router.push("/contact");
  };

  return (
    <div className="bg-card border border-border rounded-xl overflow-hidden hover:border-primary/40 transition-colors duration-200">
      <div className="border-b border-border px-6 py-4 flex items-center justify-between gap-4">
        <div className="flex items-center gap-3 min-w-0">
          <span
            className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded text-xs font-semibold ${statusCfg.bg} ${statusCfg.color}`}
          >
            {statusCfg.label}
          </span>
          <span className="text-xs font-medium text-muted-foreground bg-muted px-2.5 py-1 rounded">
            {cohort.type === "one-on-one" ? "1-on-1" : "Group"}
          </span>
          <span className="text-xs font-medium text-muted-foreground bg-muted px-2.5 py-1 rounded">
            {cohort.level}
          </span>
        </div>
        <span className="text-sm font-bold text-foreground flex-shrink-0" style={{ color: "hsl(22 100% 50%)" }}>
          {cohort.price}
        </span>
      </div>

      <div className="p-6">
        <h3 className="text-xl font-bold text-foreground mb-1">{cohort.title}</h3>
        <p className="text-sm text-muted-foreground mb-4">{cohort.subtitle}</p>
        <p className="text-sm text-muted-foreground leading-relaxed mb-6">{cohort.description}</p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-6">
          <div className="flex items-center gap-2">
            <Calendar className="w-4 h-4 flex-shrink-0" style={{ color: "hsl(22 100% 50%)" }} />
            <div>
              <p className="text-xs text-muted-foreground">Start Date</p>
              <p className="text-sm font-medium text-foreground">{cohort.startDate}</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4 flex-shrink-0" style={{ color: "hsl(22 100% 50%)" }} />
            <div>
              <p className="text-xs text-muted-foreground">Duration</p>
              <p className="text-sm font-medium text-foreground">{cohort.duration}</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Users className="w-4 h-4 flex-shrink-0" style={{ color: "hsl(22 100% 50%)" }} />
            <div>
              <p className="text-xs text-muted-foreground">Spots Left</p>
              <p className="text-sm font-medium text-foreground">
                {isSoon ? "TBC" : isFull ? "Full" : `${cohort.spotsLeft} / ${cohort.spots}`}
              </p>
            </div>
          </div>
        </div>

        {!isSoon && !isFull && (
          <div className="mb-6">
            <div className="h-1.5 bg-muted rounded-full overflow-hidden">
              <div
                className="h-full rounded-full transition-all"
                style={{
                  width: `${spotsPercent}%`,
                  backgroundColor: "hsl(22 100% 50%)",
                  opacity: cohort.status === "almost-full" ? 1 : 0.6,
                }}
              />
            </div>
            <p className="text-xs text-muted-foreground mt-1.5">
              {spotsPercent}% filled — {cohort.spotsLeft} spot{cohort.spotsLeft !== 1 ? "s" : ""} remaining
            </p>
          </div>
        )}

        <p className="text-xs text-muted-foreground mb-6 flex items-start gap-2">
          <Star className="w-3.5 h-3.5 flex-shrink-0 mt-0.5" style={{ color: "hsl(22 100% 50%)" }} />
          {cohort.schedule}
        </p>

        <button
          className="flex items-center gap-1.5 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors mb-4"
          onClick={() => setExpanded(!expanded)}
        >
          {expanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
          What's included
        </button>

        {expanded && (
          <ul className="space-y-2 mb-6 pl-1">
            {cohort.includes.map((item) => (
              <li key={item} className="flex items-start gap-2.5 text-sm text-muted-foreground">
                <Check className="w-4 h-4 flex-shrink-0 mt-0.5" style={{ color: "hsl(22 100% 50%)" }} />
                {item}
              </li>
            ))}
          </ul>
        )}

        {isFull ? (
          <button
            disabled
            className="w-full py-2.5 rounded text-sm font-semibold text-muted-foreground bg-muted cursor-not-allowed flex items-center justify-center gap-2"
          >
            <Lock className="w-4 h-4" /> Cohort Full
          </button>
        ) : isSoon ? (
          <button
            onClick={handleEnroll}
            className="w-full py-2.5 rounded text-sm font-semibold text-foreground border border-border hover:border-primary/60 transition-colors"
          >
            Join Waitlist
          </button>
        ) : (
          <button
            onClick={handleEnroll}
            className="w-full py-2.5 rounded text-sm font-bold text-white transition-opacity hover:opacity-90 flex items-center justify-center gap-2"
            style={{ backgroundColor: "hsl(22 100% 50%)" }}
          >
            Enroll Now <ArrowRight className="w-4 h-4" />
          </button>
        )}
      </div>
    </div>
  );
}

export default function ProgrammesPage() {
  const [filter, setFilter] = useState<"all" | "group" | "one-on-one">("all");

  const filtered = COHORTS.filter((c) =>
    filter === "all" ? true : c.type === filter
  );

  return (
    <div className="min-h-screen bg-background text-foreground">
      <section className="pt-28 pb-16 bg-muted border-b border-border">
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: "hsl(22 100% 50%)" }}>
            Cohorts & Programmes
          </p>
          <h1 className="text-5xl md:text-6xl font-black text-foreground mb-5 leading-tight">
            Two paths,<br />one standard.
          </h1>
          <p className="text-muted-foreground max-w-xl text-sm leading-relaxed">
            Choose the format that fits your schedule and goals. All cohorts are capped to ensure quality — enroll before spots fill up.
          </p>
        </div>
      </section>

      <section className="sticky top-16 z-30 bg-background/95 backdrop-blur-md border-b border-border">
        <div className="max-w-6xl mx-auto px-6 py-3 flex items-center gap-2">
          {(["all", "group", "one-on-one"] as const).map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`px-4 py-1.5 rounded text-sm font-medium transition-colors capitalize ${
                filter === f
                  ? "text-white"
                  : "text-muted-foreground hover:text-foreground bg-muted hover:bg-muted/80"
              }`}
              style={filter === f ? { backgroundColor: "hsl(22 100% 50%)" } : {}}
            >
              {f === "all" ? "All Cohorts" : f === "group" ? "Group" : "1-on-1"}
            </button>
          ))}
          <span className="ml-auto text-xs text-muted-foreground">
            {filtered.length} cohort{filtered.length !== 1 ? "s" : ""}
          </span>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="max-w-6xl mx-auto px-6">
          {filtered.length === 0 ? (
            <div className="py-20 text-center">
              <p className="text-muted-foreground">No cohorts match this filter.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {filtered.map((c) => (
                <CohortCard key={c.id} cohort={c} />
              ))}
            </div>
          )}
        </div>
      </section>

      <section className="py-16 bg-muted border-t border-border">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-2xl font-bold text-foreground mb-8">Common Questions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                q: "Are sessions online or in-person?",
                a: "Both options are available. Group sessions are typically held online via video call. 1-on-1 mentorship can be in-person in Kisumu or online — your choice.",
              },
              {
                q: "What platform do you use?",
                a: "All training is done on the Deriv platform. If you don't have an account yet, we'll help you set one up for free before the cohort begins.",
              },
              {
                q: "What if I miss a session?",
                a: "All live sessions are recorded. Group cohort participants get access to recordings. 1-on-1 sessions can be rescheduled with 24 hours' notice.",
              },
              {
                q: "How do I pay?",
                a: "After enrolling, Steve will reach out directly to confirm your spot and share payment details (M-Pesa or bank transfer). No payment is taken online.",
              },
            ].map(({ q, a }) => (
              <div key={q} className="bg-card border border-border rounded-lg p-6">
                <h3 className="text-sm font-semibold text-foreground mb-2">{q}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 border-t border-border" style={{ backgroundColor: "hsl(22 100% 50%)" }}>
        <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h2 className="text-2xl font-black text-white">Not sure which cohort is right for you?</h2>
            <p className="text-white/70 mt-2 text-sm">Get in touch — Steve will help you pick the right path.</p>
          </div>
          <Link
            href="/contact"
            className="flex-shrink-0 inline-flex items-center gap-2 px-7 py-3.5 rounded text-sm font-bold bg-white text-black hover:bg-white/90 transition-colors"
          >
            Talk to Steve <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
