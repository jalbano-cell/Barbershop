"use client";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { MotionButton } from "@/components/MotionButton";

const links = [
  { label: "Services",    href: "#features" },
  { label: "Our Barbers", href: "#barbers"  },
  { label: "Gallery",     href: "#gallery"  },
  { label: "Reviews",     href: "#reviews"  },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled || open
        ? "bg-background/95 backdrop-blur-xl border-b border-border"
        : "bg-transparent"
    }`}>
      {/* Top bar */}
      <div className="max-w-[1100px] mx-auto px-5 md:px-8 h-[68px] flex items-center justify-between">
        <a href="#hero" className="text-white font-bold tracking-[0.1em] uppercase text-[1rem] font-sans">
          Barbershop
        </a>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-9">
          {links.map((l) => (
            <li key={l.label}>
              <a href={l.href} className="text-white/80 hover:text-white transition-colors text-[0.8rem] font-medium tracking-wide">
                {l.label}
              </a>
            </li>
          ))}
          <li>
            <MotionButton>
              <Button asChild size="sm" className="bg-white text-[#111111] hover:bg-white/90 border-0 text-[0.75rem] tracking-wider uppercase font-semibold">
                <a href="#booking">Book Now</a>
              </Button>
            </MotionButton>
          </li>
        </ul>

        {/* Mobile: Book Now + hamburger */}
        <div className="flex items-center gap-3 md:hidden">
          <Button asChild size="sm" className="bg-white text-[#111111] hover:bg-white/90 border-0 text-[0.7rem] tracking-wider uppercase font-semibold px-4">
            <a href="#booking">Book Now</a>
          </Button>
          <button
            onClick={() => setOpen(!open)}
            className="text-white p-1"
            aria-label={open ? "Close menu" : "Open menu"}
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile dropdown */}
      {open && (
        <div className="md:hidden px-5 pb-6 pt-1 flex flex-col">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              onClick={() => setOpen(false)}
              className="text-white/80 hover:text-white text-[0.95rem] font-medium tracking-wide py-4 border-b border-border/40 last:border-0 transition-colors"
            >
              {l.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}
