"use client";

import { motion } from "framer-motion";
import { Quote, Star, ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";

const testimonials = [
  {
    name: "Alvine Otieno",
    role: "Deriv Trader",
    content: "Trading has always been a passion, but it wasn't until I joined this program that I saw consistent results. The discipline and risk framing are invaluable.",
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&q=80",
    rating: 5,
  },
  {
    name: "Liam Porter",
    role: "Forex Enthusiast",
    content: "The journey was not without its ups and downs, but the mentors helped me build a system that actually works for me. Highly recommended.",
    avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&q=80",
    rating: 5,
  },
];

export function Testimonials() {
  return (
    <section className="py-24 bg-muted relative overflow-hidden">
      <div className="container max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-16">
          <div className="max-w-xl">
            <p className="text-primary font-bold uppercase tracking-widest text-xs mb-4">Testimonial</p>
            <h2 className="text-3xl md:text-4xl font-black tracking-tight leading-tight">
              Connect With Our <span className="text-primary italic">Clients</span>
            </h2>
          </div>
          <div className="flex items-center gap-4">
            <button className="w-12 h-12 rounded-full border border-border flex items-center justify-center hover:bg-card hover:border-primary/50 transition-all text-muted-foreground hover:text-primary">
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button className="w-12 h-12 rounded-full bg-primary flex items-center justify-center orange-glow hover:scale-110 transition-all text-white">
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((t, index) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, x: index === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-card border border-border p-10 rounded-3xl relative hover:border-primary/30 transition-all hover:shadow-2xl"
            >
              <div className="absolute top-10 right-10">
                <Quote className="w-12 h-12 text-primary/10 rotate-180" />
              </div>

              <div className="flex items-center gap-1 mb-8">
                {[...Array(t.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                ))}
              </div>

              <p className="text-lg leading-relaxed mb-10 text-muted-foreground font-medium italic italic-primary">
                "{t.content}"
              </p>

              <div className="flex items-center gap-4 border-t border-border pt-8">
                <div className="relative w-14 h-14 rounded-full overflow-hidden border-2 border-primary/20">
                  <Image
                    src={t.avatar}
                    alt={t.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-black text-lg">{t.name}</h4>
                  <p className="text-sm text-primary font-bold uppercase tracking-widest">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
