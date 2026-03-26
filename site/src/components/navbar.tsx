"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Sun, Moon } from "lucide-react";
import { cn } from "@/lib/utils";
import { useTheme } from "next-themes";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setMenuOpen(false), [pathname]);

  const links = [
    { label: "Training", href: "/training" },
    { label: "Programmes", href: "/programmes" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ];

  if (!mounted) return null;

  return (
    <header
      className={cn(
        "fixed top-0 inset-x-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-background/95 backdrop-blur-md border-b border-border shadow-sm"
          : "bg-background/20 backdrop-blur-[2px]"
      )}
    >
      <div className="max-w-7xl mx-auto px-6 h-14 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <span
            className="w-7 h-7 rounded flex items-center justify-center text-white font-black text-[10px] flex-shrink-0"
            style={{ backgroundColor: "hsl(22 100% 50%)" }}
          >
            DC
          </span>
          <span className="font-bold text-[11px] tracking-tight text-foreground uppercase">
            DERIV{" "}
            <span className="font-normal text-muted-foreground">
              CHAMPIONS
            </span>
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={cn(
                "text-[11px] font-bold uppercase tracking-wider transition-colors",
                pathname === l.href
                  ? "text-primary"
                  : "text-muted-foreground hover:text-primary"
              )}
            >
              {l.label}
            </Link>
          ))}

          <div className="h-4 w-px bg-border mx-2" />

          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="p-2 rounded-full text-muted-foreground hover:text-primary transition-colors"
            aria-label="Toggle theme"
          >
            {theme === "dark" ? <Sun className="w-3.5 h-3.5" /> : <Moon className="w-3.5 h-3.5" />}
          </button>

          <Link
            href="/contact"
            className="px-4 py-2 rounded text-[10px] font-black uppercase tracking-widest text-white transition-all hover:scale-105 hover:orange-glow active:scale-95"
            style={{ backgroundColor: "hsl(22 100% 50%)" }}
          >
            Book a Session
          </Link>
        </nav>

        <div className="md:hidden flex items-center gap-2">
          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="p-2 text-muted-foreground hover:text-primary"
            aria-label="Toggle theme"
          >
            {theme === "dark" ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          </button>
          <button
            className="p-2 text-muted-foreground hover:text-primary"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-background border-b border-border px-6 py-4 flex flex-col gap-3">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={cn(
                "py-2 text-[11px] font-bold uppercase tracking-wider transition-colors",
                pathname === l.href ? "text-primary" : "text-muted-foreground hover:text-primary"
              )}
            >
              {l.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="mt-2 py-2.5 rounded text-[10px] font-black uppercase tracking-widest text-white text-center"
            style={{ backgroundColor: "hsl(22 100% 50%)" }}
          >
            Book a Session
          </Link>
        </div>
      )}
    </header>
  );
}
