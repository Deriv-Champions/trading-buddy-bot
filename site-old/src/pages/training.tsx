import { useEffect } from "react";
import { Link } from "wouter";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { ArrowRight, Check } from "lucide-react";

export default function Training() {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />

      {/* PAGE HEADER */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?w=1600&q=80"
            alt="Trading charts"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/80" />
        </div>
        <div className="relative z-10 max-w-6xl mx-auto px-6">
          <p className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: "hsl(22 100% 50%)" }}>
            The Programme
          </p>
          <h1 className="text-5xl md:text-6xl font-black text-white max-w-2xl leading-tight">
            Trading Mastery Programme
          </h1>
          <p className="text-white/50 mt-5 max-w-xl leading-relaxed text-sm">
            Available in-person in Kisumu or fully online. Both formats deliver the same rigorous curriculum.
          </p>
        </div>
      </section>

      {/* PHILOSOPHY */}
      <section className="py-24 bg-background">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-14">
            <p className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: "hsl(22 100% 50%)" }}>
              Philosophy
            </p>
            <h2 className="text-4xl font-black text-foreground">Skill is built, not inherited.</h2>
            <p className="text-muted-foreground mt-4 max-w-xl text-sm leading-relaxed">
              Consistent traders earn their edge through deliberate practice and honest self-assessment. Our training is built on three unshakeable pillars.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                num: "01",
                title: "Technical Foundation",
                desc: "Price action, market structure, and precise entries — built from the ground up. No lagging indicators, just raw chart fluency and structure reading.",
              },
              {
                num: "02",
                title: "Risk Discipline",
                desc: "Protecting capital is the first rule. We train exact position sizing, exposure limits, and drawdown defense as a non-negotiable habit.",
              },
              {
                num: "03",
                title: "Trading Psychology",
                desc: "Your mindset is your edge. We address FOMO, revenge trading, and emotional paralysis — the patterns that silently destroy most traders.",
              },
            ].map((p) => (
              <div key={p.num} className="bg-card border border-border rounded-lg p-8 relative overflow-hidden">
                <span className="absolute top-4 right-6 text-6xl font-black text-border select-none leading-none">
                  {p.num}
                </span>
                <p className="text-xs font-bold uppercase tracking-widest mb-4" style={{ color: "hsl(22 100% 50%)" }}>
                  {p.num}
                </p>
                <h3 className="text-lg font-bold text-foreground mb-3">{p.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROGRAMS */}
      <section className="py-24 bg-muted border-t border-border">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-14">
            <p className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: "hsl(22 100% 50%)" }}>
              Mentorship Paths
            </p>
            <h2 className="text-4xl font-black text-foreground">Two paths, one standard.</h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-card border border-border rounded-lg p-8 flex flex-col">
              <div className="mb-8">
                <div className="w-10 h-10 rounded flex items-center justify-center mb-6 text-xl" style={{ backgroundColor: "hsl(22 100% 50% / 0.12)" }}>
                  🎯
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-3">1-on-1 Mentorship</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  The fastest path to mastery — built entirely around you. Fully personalised with direct access to Steve.
                </p>
              </div>
              <ul className="space-y-3 mb-8 flex-1">
                {[
                  "Personalised curriculum and trading plan",
                  "Live chart analysis and trade reviews",
                  "Ongoing support between sessions",
                  "Accountability and progress tracking",
                  "Flexible scheduling — online or in-person",
                ].map((f) => (
                  <li key={f} className="flex items-start gap-3 text-sm text-muted-foreground">
                    <Check className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: "hsl(22 100% 50%)" }} />
                    {f}
                  </li>
                ))}
              </ul>
              <Link
                href="/programmes"
                className="inline-flex items-center justify-center gap-2 py-3 rounded text-sm font-bold text-white hover:opacity-90 transition-opacity"
                style={{ backgroundColor: "hsl(22 100% 50%)" }}
              >
                View 1-on-1 Cohorts <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            <div className="bg-card border border-border rounded-lg p-8 flex flex-col">
              <div className="mb-8">
                <div className="w-10 h-10 rounded flex items-center justify-center mb-6 text-xl" style={{ backgroundColor: "hsl(22 100% 50% / 0.12)" }}>
                  👥
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-3">Group Sessions</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Expert instruction meets peer learning — a community growing together through a structured curriculum.
                </p>
              </div>
              <ul className="space-y-3 mb-8 flex-1">
                {[
                  "Structured curriculum from basics to advanced",
                  "Live market analysis and Q&A",
                  "Peer discussion and shared learning",
                  "Regular session schedule",
                  "Access to group trading community",
                ].map((f) => (
                  <li key={f} className="flex items-start gap-3 text-sm text-muted-foreground">
                    <Check className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: "hsl(22 100% 50%)" }} />
                    {f}
                  </li>
                ))}
              </ul>
              <Link
                href="/programmes"
                className="inline-flex items-center justify-center gap-2 py-3 rounded text-sm font-bold text-foreground border border-border hover:border-primary/60 transition-colors"
              >
                View Group Cohorts <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* INSTRUMENTS */}
      <section className="py-24 bg-background border-t border-border">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-14">
            <p className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: "hsl(22 100% 50%)" }}>
              Instruments
            </p>
            <h2 className="text-4xl font-black text-foreground">Markets we specialise in.</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { icon: "💱", title: "Forex — Currency Pairs", desc: "Price action, timing entries, position management on the major and minor currency pairs." },
              { icon: "🥇", title: "Gold (XAU/USD)", desc: "Navigate volatility with structure and precision. High reward when traded with discipline." },
              { icon: "⚡", title: "Deriv Binary Options", desc: "Strategic binary trading with proper risk framing. Mastery of fixed-time instruments." },
            ].map((inst) => (
              <div key={inst.title} className="bg-card border border-border rounded-lg p-7">
                <span className="text-3xl mb-5 block">{inst.icon}</span>
                <h3 className="text-lg font-bold text-foreground mb-3">{inst.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{inst.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 border-t border-border" style={{ backgroundColor: "hsl(22 100% 50%)" }}>
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-black text-white mb-4">Ready to start training?</h2>
          <p className="text-white/70 mb-8 text-sm">Book a free consultation with Steve — no commitment required.</p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded text-sm font-bold bg-white text-black hover:bg-white/90 transition-colors"
          >
            Book a Session <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
