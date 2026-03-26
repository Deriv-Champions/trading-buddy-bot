import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X, Sun, Moon } from "lucide-react";
import { cn } from "@/lib/utils";
import { useTheme } from "@/lib/theme";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [location] = useLocation();
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setMenuOpen(false), [location]);

  const links = [
    { label: "Training", href: "/training" },
    { label: "Programmes", href: "/programmes" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ];

  const isHeroPage = location === "/" || location === "/training" || location === "/about";

  return (
    <header
      className={cn(
        "fixed top-0 inset-x-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-background/95 backdrop-blur-md border-b border-border shadow-sm"
          : isHeroPage
          ? "bg-transparent"
          : "bg-background border-b border-border"
      )}
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <span
            className="w-8 h-8 rounded flex items-center justify-center text-white font-black text-xs flex-shrink-0"
            style={{ backgroundColor: "hsl(22 100% 50%)" }}
          >
            DC
          </span>
          <span
            className={cn(
              "font-bold text-sm tracking-tight",
              scrolled || !isHeroPage ? "text-foreground" : "text-white"
            )}
          >
            DERIV{" "}
            <span
              className={cn(
                "font-normal",
                scrolled || !isHeroPage ? "text-muted-foreground" : "text-white/50"
              )}
            >
              CHAMPIONS
            </span>
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-6">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={cn(
                "text-sm font-medium transition-colors",
                location === l.href
                  ? scrolled || !isHeroPage
                    ? "text-foreground"
                    : "text-white"
                  : scrolled || !isHeroPage
                  ? "text-muted-foreground hover:text-foreground"
                  : "text-white/60 hover:text-white"
              )}
            >
              {l.label}
            </Link>
          ))}

          <button
            onClick={toggleTheme}
            className={cn(
              "p-2 rounded-full transition-colors",
              scrolled || !isHeroPage
                ? "text-muted-foreground hover:text-foreground hover:bg-muted"
                : "text-white/60 hover:text-white hover:bg-white/10"
            )}
            aria-label="Toggle theme"
          >
            {theme === "dark" ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          </button>

          <Link
            href="/contact"
            className="px-5 py-2 rounded text-sm font-semibold text-white transition-colors hover:opacity-90"
            style={{ backgroundColor: "hsl(22 100% 50%)" }}
          >
            Book a Session
          </Link>
        </nav>

        <div className="md:hidden flex items-center gap-2">
          <button
            onClick={toggleTheme}
            className={cn(
              "p-2 rounded-full transition-colors",
              scrolled || !isHeroPage
                ? "text-muted-foreground hover:text-foreground"
                : "text-white/70 hover:text-white"
            )}
            aria-label="Toggle theme"
          >
            {theme === "dark" ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          </button>
          <button
            className={cn(
              "p-2 transition-colors",
              scrolled || !isHeroPage ? "text-muted-foreground hover:text-foreground" : "text-white/70 hover:text-white"
            )}
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
                "py-2 text-sm font-medium transition-colors",
                location === l.href ? "text-foreground" : "text-muted-foreground hover:text-foreground"
              )}
            >
              {l.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="mt-2 py-2.5 rounded text-sm font-semibold text-white text-center"
            style={{ backgroundColor: "hsl(22 100% 50%)" }}
          >
            Book a Session
          </Link>
        </div>
      )}
    </header>
  );
}
