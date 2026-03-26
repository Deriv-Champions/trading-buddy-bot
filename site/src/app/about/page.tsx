import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, MapPin, Phone } from "lucide-react";

export const metadata: Metadata = {
  title: "About Steve",
  description: "Meet Steve, the founder and head mentor at Deriv Champions. Learn about his disciplined approach to trading Forex, Gold, and Binary Options.",
};

export default function About() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* PAGE HEADER */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1600&q=80"
            alt="Trading data"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/82" />
        </div>
        <div className="relative z-10 max-w-6xl mx-auto px-6">
          <p className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: "hsl(22 100% 50%)" }}>
            Your Mentor
          </p>
          <h1 className="text-5xl md:text-6xl font-black text-white leading-tight">
            Trained by experience.
          </h1>
          <p className="text-white/50 mt-5 max-w-xl leading-relaxed text-sm">
            Real market experience — not theory. Steve's mission is to help serious traders build a foundation that lasts.
          </p>
        </div>
      </section>

      {/* STEVE BIO */}
      <section className="py-24 bg-background">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div className="relative">
              <div className="aspect-[4/5] rounded-lg overflow-hidden bg-muted relative">
                <Image
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=700&q=80"
                  alt="Steve — Deriv Trader"
                  fill
                  className="object-cover object-top"
                />
              </div>
              <div className="mt-6 p-5 bg-card border border-border rounded-lg">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-2 h-2 rounded-full flex-shrink-0" style={{ backgroundColor: "hsl(22 100% 50%)" }} />
                  <span className="text-foreground font-semibold text-sm">Steve</span>
                  <span className="text-muted-foreground text-sm">— Founder & Head Mentor</span>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground text-sm">
                  <MapPin className="w-4 h-4 flex-shrink-0" />
                  Kisumu, Kenya — In-person & Online
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-foreground mb-6">
                An active Deriv trader specialising in currency pairs, Gold (XAU/USD), and binary options.
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-5 text-sm">
                Steve's training is built on real market experience — not theory. His mission is to help serious traders build a foundation that lasts. He brings years of disciplined market experience directly to you.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-10 text-sm">
                Whether you're trading currency pairs, Gold (XAU/USD), or leveraging the Deriv Binary Options platform, success requires a proven edge. Steve helps you build that edge through deliberate, structured practice and honest self-assessment.
              </p>

              <div className="grid grid-cols-2 gap-3 mb-10">
                {["Deriv Platform", "Forex Currencies", "Gold (XAU/USD)", "Binary Options"].map((skill) => (
                  <div key={skill} className="flex items-center gap-2.5 px-4 py-3 bg-card border border-border rounded-lg">
                    <div className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ backgroundColor: "hsl(22 100% 50%)" }} />
                    <span className="text-foreground text-sm font-medium">{skill}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded text-sm font-bold text-white hover:opacity-90 transition-opacity"
                  style={{ backgroundColor: "hsl(22 100% 50%)" }}
                >
                  Book with Steve <ArrowRight className="w-4 h-4" />
                </Link>
                <a
                  href="tel:+254726043830"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded text-sm font-semibold text-foreground border border-border hover:border-primary/60 transition-colors"
                >
                  <Phone className="w-4 h-4" />
                  +254 726 043 830
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="py-20 bg-muted border-t border-border">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { value: "500+", label: "Students Trained" },
              { value: "5+", label: "Years Experience" },
              { value: "3", label: "Instruments Mastered" },
              { value: "2", label: "Learning Formats" },
            ].map((stat) => (
              <div key={stat.label} className="text-center p-6 bg-card border border-border rounded-lg">
                <p className="text-4xl font-black mb-2" style={{ color: "hsl(22 100% 50%)" }}>
                  {stat.value}
                </p>
                <p className="text-muted-foreground text-sm">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DERIV OPEN ACCOUNT */}
      <section className="py-24 bg-background border-t border-border">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: "hsl(22 100% 50%)" }}>
                Get Started
              </p>
              <h2 className="text-4xl font-black text-foreground mb-5">
                Open a Deriv trading account
              </h2>
              <p className="text-muted-foreground leading-relaxed text-sm mb-8">
                Free to sign up. Start trading today on the platform Steve uses for all training sessions. No obligation — just the first step toward mastery.
              </p>
              <a
                href="https://deriv.com"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded text-sm font-bold text-white hover:opacity-90 transition-opacity"
                style={{ backgroundColor: "hsl(22 100% 50%)" }}
              >
                Open Deriv Account <ArrowRight className="w-4 h-4" />
              </a>
            </div>
            <div className="rounded-lg overflow-hidden aspect-video bg-muted relative">
              <Image
                src="https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?w=900&q=80"
                alt="Finance and trading"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
