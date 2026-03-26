"use client";

import { motion } from "framer-motion";
import { TrendingUp, ShieldCheck, Zap, BarChart3, Users, Headphones } from "lucide-react";
import { cn } from "@/lib/utils";

const services = [
  {
    title: "Strategy Consulting",
    description: "A tailored approach that fits your schedule and needs, making consistent trading a reality.",
    icon: TrendingUp,
    highlight: false,
  },
  {
    title: "Financial Advisory",
    description: "Transform your trading with automated processes and data-driven decision making.",
    icon: Zap,
    highlight: true,
  },
  {
    title: "Risk Management",
    description: "Learn to navigate volatility with structure and precision, protecting your capital at all costs.",
    icon: ShieldCheck,
    highlight: false,
  },
  {
    title: "Market Analysis",
    description: "Deep dives into price action, timing entries, and position management for Deriv instruments.",
    icon: BarChart3,
    highlight: false,
  },
  {
    title: "Community Access",
    description: "Join a network of disciplined traders and grow together in a supportive environment.",
    icon: Users,
    highlight: false,
  },
  {
    title: "24/7 Support",
    description: "Our team is here to help you navigate every step of your trading journey.",
    icon: Headphones,
    highlight: false,
  },
];

export function ServicesGrid() {
  return (
    <section className="py-24 bg-background relative overflow-hidden">
      <div className="container max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-end justify-between gap-8 mb-16">
          <div className="max-w-xl">
            <p className="text-primary font-bold uppercase tracking-widest text-xs mb-4">Our Services</p>
            <h2 className="text-3xl md:text-4xl font-black tracking-tight leading-tight">
              Unlock financial freedom with <span className="text-primary italic">smart</span> choices
            </h2>
          </div>
          <p className="text-muted-foreground max-w-md text-base leading-relaxed">
            We offer the best training around Deriv trading, from foundations to advanced price action.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={cn(
                "group relative p-10 rounded-2xl border transition-all duration-300 hover:scale-[1.02]",
                service.highlight 
                  ? "bg-primary/5 border-primary text-foreground orange-glow-lg shadow-xl" 
                  : "bg-card border-border hover:border-primary/50"
              )}
            >
              <div className={cn(
                "w-12 h-12 rounded-xl flex items-center justify-center mb-8",
                service.highlight ? "bg-primary text-white" : "bg-primary/10 text-primary"
              )}>
                <service.icon className="w-6 h-6" />
              </div>
              
              <h3 className="text-lg font-bold mb-4">{service.title}</h3>
              <p className={cn(
                "text-sm leading-relaxed",
                service.highlight ? "text-muted-foreground" : "text-muted-foreground group-hover:text-foreground"
              )}>
                {service.description}
              </p>
              
              {!service.highlight && (
                <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="w-8 h-8 rounded-full border border-primary/20 flex items-center justify-center text-primary">
                    <TrendingUp className="w-4 h-4" />
                  </div>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
