import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Users, Clock, MapPin } from "lucide-react";
import { WelcomePopup } from "@/components/welcome-popup";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <WelcomePopup />

      {/* ── HERO ─────────────────────────────────────────── */}
      <section className="relative min-h-screen flex flex-col overflow-hidden bg-background">
        {/* Subtle radial glow behind right column */}
        <div
          className="pointer-events-none absolute right-0 top-0 h-full w-1/2 opacity-10 dark:opacity-20"
          style={{
            background:
              "radial-gradient(ellipse 80% 70% at 80% 40%, hsl(22 100% 50%), transparent)",
          }}
        />

        {/* Decorative orange shapes */}
        <div
          className="absolute top-[22%] right-[34%] w-3 h-11 rounded-full opacity-60"
          style={{ backgroundColor: "hsl(22 100% 50%)", transform: "rotate(30deg)" }}
        />
        <div
          className="absolute top-[18%] right-[30%] w-3 h-11 rounded-full opacity-30"
          style={{ backgroundColor: "hsl(22 100% 50%)", transform: "rotate(30deg)" }}
        />
        <div
          className="absolute bottom-[28%] left-[36%] w-2.5 h-9 rounded-full opacity-50"
          style={{ backgroundColor: "hsl(22 100% 50%)", transform: "rotate(-45deg)" }}
        />
        <div
          className="absolute top-[60%] right-[16%] w-5 h-5 rounded-sm opacity-40"
          style={{ backgroundColor: "hsl(22 100% 50%)", transform: "rotate(20deg)" }}
        />
        <div
          className="absolute top-[35%] right-[14%] w-2.5 h-2.5 rounded-full opacity-50"
          style={{ backgroundColor: "hsl(22 100% 50%)" }}
        />

        {/* Main two-column grid */}
        <div className="relative z-10 flex-1 max-w-6xl mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-2 gap-10 items-center pt-28 pb-10">
          {/* ── LEFT: Text Content ─────────────────────── */}
          <div>
            <p
              className="text-xs font-bold uppercase tracking-widest mb-6"
              style={{ color: "hsl(22 100% 50%)" }}
            >
              Train Smart, Trade Stronger
            </p>

            <h1 className="text-5xl sm:text-6xl font-black text-foreground leading-[1.07] mb-6">
              The Craft of{" "}
              <span
                style={{
                  textDecoration: "underline",
                  textDecorationColor: "hsl(22 100% 50%)",
                  textDecorationThickness: "4px",
                  textUnderlineOffset: "6px",
                  color: "hsl(22 100% 50%)",
                }}
              >
                Disciplined
              </span>
              <br />
              Trading.
            </h1>

            <p className="text-muted-foreground max-w-md mb-10 leading-relaxed text-[15px]">
              Markets reward those who master their craft. We train serious traders to build the skills, structure, and mental edge needed to perform consistently on Deriv.
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded text-sm font-bold text-white transition-opacity hover:opacity-90"
                style={{ backgroundColor: "hsl(22 100% 50%)" }}
              >
                Book a Session <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/programmes"
                className="inline-flex items-center gap-2 text-sm font-semibold text-muted-foreground hover:text-foreground transition-colors"
              >
                <ArrowRight className="w-4 h-4 rotate-[-45deg]" style={{ color: "hsl(22 100% 50%)" }} />
                View Programmes
              </Link>
            </div>
          </div>

          {/* ── RIGHT: Phone Mockup + Floating Cards ──── */}
          <div className="relative flex items-center justify-center min-h-[480px] lg:min-h-0">
            {/* Main trading image */}
            <div className="relative z-10 w-64 h-[430px] rounded-3xl shadow-2xl border border-border overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=500&h=700&fit=crop&q=85"
                alt="Forex trading charts"
                fill
                className="object-cover"
                priority
              />
            </div>

            {/* Floating image 1 — top left */}
            <div
              className="absolute left-0 top-8 lg:-left-10 w-40 h-28 rounded-xl shadow-2xl border border-border z-20 overflow-hidden"
              style={{ transform: "rotate(-4deg)" }}
            >
              <Image
                src="https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?w=320&q=80"
                alt="Multi-screen trading setup"
                fill
                className="object-cover"
              />
            </div>

            {/* Floating image 2 — bottom right */}
            <div
              className="absolute right-0 bottom-14 lg:-right-8 w-36 h-24 rounded-xl shadow-2xl border border-border z-20 overflow-hidden"
              style={{ transform: "rotate(3deg)" }}
            >
              <Image
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=320&q=80"
                alt="Financial analytics"
                fill
                className="object-cover"
              />
            </div>

            {/* Floating image 3 — top right */}
            <div
              className="absolute right-0 top-4 lg:-right-6 w-32 h-20 rounded-xl shadow-2xl border border-border z-20 overflow-hidden"
              style={{ transform: "rotate(5deg)" }}
            >
              <Image
                src="https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?w=320&q=80"
                alt="Financial market data"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>

        {/* ── Stats bar at bottom ───────────────────────── */}
        <div className="relative z-10 border-t border-border">
          <div className="max-w-6xl mx-auto px-6 py-4 grid grid-cols-1 sm:grid-cols-3 gap-5">
            {[
              { icon: Users, label: "500+ Students Trained" },
              { icon: Clock, label: "5+ Years Experience" },
              { icon: MapPin, label: "Kisumu, Kenya" },
            ].map(({ icon: Icon, label }) => (
              <div key={label} className="flex items-center gap-3">
                <Icon className="w-4 h-4 flex-shrink-0" style={{ color: "hsl(22 100% 50%)" }} />
                <span className="text-sm text-muted-foreground font-medium">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHO IS THIS FOR */}
      <section className="py-24 bg-background">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-14">
            <p className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: "hsl(22 100% 50%)" }}>
              Who This Is For
            </p>
            <h2 className="text-4xl font-black text-foreground">Built for the serious few.</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-card border border-border rounded-lg p-8">
              <div
                className="w-10 h-10 rounded flex items-center justify-center mb-6 text-xl"
                style={{ backgroundColor: "hsl(22 100% 50% / 0.12)" }}
              >
                🌱
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">The Beginner</h3>
              <p className="text-muted-foreground leading-relaxed text-sm">
                You want to start with the right foundation — not the bad habits most self-taught traders spend years unlearning. We build you up correctly from day one.
              </p>
            </div>

            <div className="bg-card border border-border rounded-lg p-8">
              <div
                className="w-10 h-10 rounded flex items-center justify-center mb-6 text-xl"
                style={{ backgroundColor: "hsl(22 100% 50% / 0.12)" }}
              >
                🔄
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">The Struggling Trader</h3>
              <p className="text-muted-foreground leading-relaxed text-sm">
                You've been trading but results are inconsistent. You know something is missing. We help you find it, fix it, and build a system that actually works for you.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* INSTRUMENTS */}
      <section className="py-24 bg-muted border-t border-border">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: "hsl(22 100% 50%)" }}>
                Markets We Trade
              </p>
              <h2 className="text-4xl font-black text-foreground mb-6">
                Specialists in three key instruments.
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-8 text-sm">
                All training happens on the Deriv platform, focused on the instruments where disciplined strategy produces the most consistent edge.
              </p>
              <Link
                href="/training"
                className="inline-flex items-center gap-2 text-sm font-semibold transition-opacity hover:opacity-80"
                style={{ color: "hsl(22 100% 50%)" }}
              >
                View Full Programme <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            <div className="space-y-4">
              {[
                { label: "Forex — Currency Pairs", desc: "Price action, timing entries, position management." },
                { label: "Gold (XAU/USD)", desc: "Navigate volatility with structure and precision." },
                { label: "Deriv Binary Options", desc: "Strategic binary trading with proper risk framing." },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-4 p-5 bg-card border border-border rounded-lg">
                  <div
                    className="w-1 min-h-[40px] rounded-full flex-shrink-0 mt-1"
                    style={{ backgroundColor: "hsl(22 100% 50%)" }}
                  />
                  <div>
                    <p className="font-semibold text-foreground text-sm mb-1">{item.label}</p>
                    <p className="text-muted-foreground text-sm">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* UPCOMING COHORTS PREVIEW */}
      <section className="py-24 bg-background border-t border-border">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12">
            <div>
              <p className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: "hsl(22 100% 50%)" }}>
                Upcoming
              </p>
              <h2 className="text-4xl font-black text-foreground">Open cohorts.</h2>
            </div>
            <Link
              href="/programmes"
              className="text-sm font-semibold transition-opacity hover:opacity-80 flex items-center gap-2"
              style={{ color: "hsl(22 100% 50%)" }}
            >
              View all cohorts <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            {[
              { title: "Forex Foundations", date: "May 5, 2026", spots: "9 spots left", type: "Group · 6 Weeks", status: "open" },
              { title: "Advanced Price Action", date: "Apr 14, 2026", spots: "2 spots left", type: "Group · 4 Weeks", status: "almost-full" },
              { title: "1-on-1 Intensive", date: "Flexible start", spots: "2 spots left", type: "Private · 4–8 Weeks", status: "open" },
            ].map((c) => (
              <div key={c.title} className="bg-card border border-border rounded-lg p-6 hover:border-primary/40 transition-colors">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-medium text-muted-foreground bg-muted px-2.5 py-1 rounded">
                    {c.type}
                  </span>
                  {c.status === "almost-full" && (
                    <span className="text-xs font-semibold text-orange-400">Almost Full</span>
                  )}
                </div>
                <h3 className="font-bold text-foreground mb-1">{c.title}</h3>
                <p className="text-xs text-muted-foreground mb-3">{c.date}</p>
                <p className="text-xs font-semibold" style={{ color: "hsl(22 100% 50%)" }}>{c.spots}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA STRIP */}
      <section className="py-16 border-t border-border" style={{ backgroundColor: "hsl(22 100% 50%)" }}>
        <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h2 className="text-2xl font-black text-white">Ready to take the first step?</h2>
            <p className="text-white/70 mt-2 text-sm">No commitment required — just a conversation about where you are.</p>
          </div>
          <Link
            href="/contact"
            className="flex-shrink-0 inline-flex items-center gap-2 px-7 py-3.5 rounded text-sm font-bold bg-white text-black hover:bg-white/90 transition-colors"
          >
            Book a Session <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
