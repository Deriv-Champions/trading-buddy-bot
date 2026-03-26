"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Star } from "lucide-react";
import Link from "next/link";

export function AboutSplitFeature() {
  return (
    <section className="py-24 bg-muted relative overflow-hidden">
      <div className="container max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Column: Professional Image and Decorative Elements */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative z-10 rounded-2xl overflow-hidden border-8 border-background shadow-2xl aspect-[4/5] max-w-md mx-auto">
              <Image
                src="/woman_trader_professional.png"
                alt="Professional Trader"
                fill
                className="object-cover"
              />
            </div>
            
            {/* Floating Element 1 (Card-style) */}
            <motion.div 
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 6, repeat: Infinity }}
              className="absolute -bottom-6 -right-6 md:right-0 bg-background p-6 rounded-xl shadow-xl z-20 border border-border max-w-[200px]"
            >
              <div className="flex items-center gap-1 mb-2">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Star key={i} className="w-3 h-3 fill-primary text-primary" />
                ))}
              </div>
              <p className="text-xs font-bold leading-tight uppercase">Trusted by 500+ Traders</p>
              <p className="text-[10px] text-muted-foreground mt-1">Consistency built on discipline.</p>
            </motion.div>
            
            {/* Background geometric shape */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-primary/5 rounded-full blur-3xl -z-10" />
            <div 
              className="absolute top-10 left-0 w-24 h-24 bg-primary rounded-xl rotate-12 opacity-10 pointer-events-none"
            />
          </motion.div>

          {/* Right Column: Content and Features */}
          <div className="space-y-10">
            <div>
              <p className="text-primary font-bold uppercase tracking-widest text-xs mb-4">Why Trade With Us</p>
              <h2 className="text-3xl md:text-4xl font-black mb-6">Trade <span className="text-primary italic">Genius</span> & Trade <span className="text-primary italic">Apex</span></h2>
              <p className="text-muted-foreground text-base leading-relaxed max-w-lg">
                Trade Genius is the art of buying and selling financial instruments with precision and strategy. 
                Trade Apex focuses on turning trading into a multifaceted professional career.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              <div className="space-y-4">
                <h4 className="text-lg font-bold">Trade Genius</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Navigate high-volatility environments like XAU/USD and Forex with clear structure and risk Framing.
                </p>
                <Link href="/training" className="inline-flex items-center gap-2 text-xs font-bold text-primary group">
                  Learn more <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
              
              <div className="space-y-4">
                <h4 className="text-lg font-bold">Trade Apex</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">
                   A comprehensive career roadmap for individuals looking to build long-term wealth through disciplined trading.
                </p>
                <Link href="/about" className="inline-flex items-center gap-2 px-5 py-2.5 bg-primary text-white rounded-lg text-xs font-bold transition-all hover:orange-glow">
                  About Us <ArrowRight className="w-3 h-3" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
