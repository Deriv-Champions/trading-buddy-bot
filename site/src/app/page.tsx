import { WelcomePopup } from "@/components/welcome-popup";
import { HeroSection } from "@/components/sections/hero-section";
import { TrustBar } from "@/components/sections/trust-bar";
import { ServicesGrid } from "@/components/sections/services-grid";
import { AboutSplitFeature } from "@/components/sections/about-split-feature";
import { ProcessSection } from "@/components/sections/process-section";
import { Testimonials } from "@/components/sections/testimonials";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <WelcomePopup />

      {/* Hero Section */}
      <HeroSection />

      {/* Trust Bar (Logo Cloud) */}
      <TrustBar />

      {/* Services Grid */}
      <ServicesGrid />

      {/* Why Choose Us / Split Feature */}
      <AboutSplitFeature />

      {/* How it Works / Process */}
      <ProcessSection />

      {/* Testimonials */}
      <Testimonials />

      {/* CTA STRIP (Original Theme) */}
      <section className="py-20 border-t border-border bg-primary relative overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-10 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 relative z-10 flex flex-col md:flex-row items-center justify-between gap-12 text-center md:text-left">
          <div className="max-w-2xl">
            <h2 className="text-2xl md:text-4xl font-black text-white leading-tight mb-4">
              Ready to take the first <br className="hidden md:block" />
              step in your <span className="opacity-70">trading journey?</span>
            </h2>
            <p className="text-white/80 text-base">No commitment required — just a conversation about where you are.</p>
          </div>
          <Link
            href="/contact"
            className="group inline-flex items-center gap-3 px-10 py-5 bg-white text-primary rounded-2xl font-black text-lg transition-all hover:scale-105 hover:shadow-2xl"
          >
            Book a Session <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>

      {/* INSTRUMENTS PREVIEW (Original Content, Refined) */}
      <section className="py-24 bg-card border-t border-border">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div>
              <p className="text-primary font-bold uppercase tracking-widest text-xs mb-4">Our Specialty</p>
              <h2 className="text-3xl md:text-4xl font-black mb-8 leading-tight">Mastering the <span className="italic text-primary">Key</span> Instruments.</h2>
              <div className="space-y-6">
                {[
                  { label: "Forex — Currency Pairs", desc: "Price action, timing entries, and position management." },
                  { label: "Gold (XAU/USD)", desc: "Navigate high-volatility environments with structure." },
                  { label: "Deriv Binary Options", desc: "Strategic binary trading with proper risk framing." },
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-4 p-6 bg-background rounded-2xl border border-border group hover:border-primary/30 transition-all">
                    <div className="w-1.5 h-10 bg-primary rounded-full group-hover:scale-y-110 transition-transform" />
                    <div>
                      <p className="font-bold text-lg mb-1">{item.label}</p>
                      <p className="text-muted-foreground text-sm">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="bg-muted p-12 rounded-3xl border border-border relative overflow-hidden group">
               <div className="absolute top-0 right-0 p-8">
                  <ArrowRight className="w-20 h-20 text-primary/5 -rotate-45" />
               </div>
               <h3 className="text-2xl font-black mb-6">Built for the serious few.</h3>
               <p className="text-muted-foreground text-base leading-relaxed mb-10">
                 All training happens on the Deriv platform, focused on the instruments where disciplined strategy produces the most consistent results.
               </p>
               <Link href="/training" className="inline-flex items-center gap-2 text-primary font-black uppercase tracking-widest text-sm hover:gap-4 transition-all">
                  View Full Programme <ArrowRight className="w-4 h-4" />
               </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
