"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const steps = [
  {
    number: "01",
    title: "Sign up, its Free!",
    description: "Our team will set up your account and help you build your path to a professional trading desk.",
    highlight: false,
  },
  {
    number: "02",
    title: "Find best Deals & Invest",
    description: "Select from our open cohorts or private mentoring to start your disciplined trading journey.",
    highlight: true,
  },
  {
    number: "03",
    title: "Get your profit back",
    description: "Apply your training to the markets, manage risk with precision, and see the results of discipline.",
    highlight: false,
  },
];

export function ProcessSection() {
  return (
    <section className="py-24 bg-background relative overflow-hidden">
      <div className="container max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <p className="text-primary font-bold uppercase tracking-widest text-xs mb-4">The Process</p>
          <h2 className="text-4xl font-black mb-6">How It Works</h2>
          <p className="text-muted-foreground text-base leading-relaxed">
            Discover how our structured training and mentoring programs turn beginners into disciplined professionals on the Deriv platform.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={cn(
                "relative p-10 rounded-3xl border transition-all duration-300",
                step.highlight 
                  ? "bg-primary/5 border-primary text-foreground orange-glow shadow-xl scale-105" 
                  : "bg-card border-border hover:border-primary/30"
              )}
            >
              <div className={cn(
                "absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 border border-border px-5 py-2 rounded-full font-black text-sm z-10",
                step.highlight ? "bg-primary text-white border-primary" : "bg-background"
              )}>
                {step.number}
              </div>
              
              <div className="text-center">
                <h3 className="text-xl font-bold mb-4">{step.title}</h3>
                <p className={cn(
                  "text-sm leading-relaxed",
                  step.highlight ? "text-muted-foreground" : "text-muted-foreground"
                )}>
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
