"use client";

import { motion } from "framer-motion";

export function TrustBar() {
  const logos = [
    { name: "Global Finance", icon: "🌐" },
    { name: "Trade Tech", icon: "🚀" },
    { name: "Secure Pay", icon: "🛡️" },
    { name: "Digital Assets", icon: "💎" },
    { name: "Elite Markets", icon: "📈" },
  ];

  return (
    <section className="bg-muted/50 border-y border-border py-12 overflow-hidden">
      <div className="container max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-12">
        <div className="flex-shrink-0">
          <p className="text-foreground/40 font-black text-xs uppercase tracking-[0.2em] whitespace-nowrap">
            Trusted By 500+ Traders
          </p>
        </div>
        
        <div className="flex flex-wrap items-center justify-center gap-12 md:gap-16 opacity-90">
          {logos.map((logo) => (
            <motion.div
              key={logo.name}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="flex items-center gap-2 group cursor-default"
            >
              <span className="text-2xl filter grayscale brightness-0 opacity-20 group-hover:grayscale-0 group-hover:opacity-100 dark:invert transition-all">
                {logo.icon}
              </span>
              <span className="text-foreground/30 font-black text-lg tracking-tight uppercase group-hover:text-primary transition-colors">
                {logo.name}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
