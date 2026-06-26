"use client";
import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";

gsap.registerPlugin(ScrollTrigger, useGSAP);

const features = [
  {
    num: "01",
    href: "#reviews",
    title: "Google Reviews",
    description: "Verified feedback from real clients. Consistently rated 5 stars for quality and experience.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="w-[30px] h-[30px]">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
      </svg>
    ),
  },
  {
    num: "02",
    href: "#booking",
    title: "Online Booking",
    description: "Reserve your seat in seconds. Pick your time and service — no waiting, no calls.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="w-[30px] h-[30px]">
        <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
        <line x1="16" y1="2" x2="16" y2="6" />
        <line x1="8" y1="2" x2="8" y2="6" />
        <line x1="3" y1="10" x2="21" y2="10" />
      </svg>
    ),
  },
  {
    num: "03",
    href: "#gallery",
    title: "Haircut Gallery",
    description: "Browse the full portfolio. Fades, tapers, classics — every style documented.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="w-[30px] h-[30px]">
        <circle cx="6" cy="6" r="3" />
        <circle cx="6" cy="18" r="3" />
        <line x1="20" y1="4" x2="8.12" y2="15.88" />
        <line x1="14.47" y1="14.48" x2="20" y2="20" />
        <line x1="8.12" y1="8.12" x2="12" y2="12" />
      </svg>
    ),
  },
];

const slideFrom = [
  { x: -80, y: 0 },
  { x: 0,   y: 60 },
  { x: 80,  y: 0 },
];

export function Features() {
  const containerRef = useRef<HTMLElement>(null);

  useGSAP(() => {
    gsap.from("[data-features-header]", {
      scrollTrigger: { trigger: containerRef.current, start: "top 80%" },
      y: 32, opacity: 0, duration: 0.8, ease: "power2.out",
    });

    const cards = containerRef.current?.querySelectorAll("[data-feature-card]");
    cards?.forEach((card, i) => {
      gsap.from(card, {
        scrollTrigger: { trigger: containerRef.current, start: "top 72%" },
        x: slideFrom[i].x,
        y: slideFrom[i].y,
        opacity: 0,
        duration: 0.9,
        delay: i * 0.15,
        ease: "power2.out",
      });
    });
  }, { scope: containerRef });

  return (
    <section ref={containerRef} id="features" className="py-16 md:py-[120px] bg-card border-y border-border">
      <div className="max-w-[1100px] mx-auto px-5 md:px-8">
        <div data-features-header className="text-center mb-[72px]">
          <span className="inline-block text-gold text-[0.65rem] font-semibold tracking-[0.3em] uppercase mb-4">
            What We Offer
          </span>
          <h2 className="font-serif font-bold text-foreground tracking-[-0.04em] leading-[1.1]" style={{ fontSize: "clamp(2rem, 4vw, 3.25rem)" }}>
            Everything in One Place
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-border border border-border rounded-xl overflow-hidden">
          {features.map((f) => (
            <div key={f.num} data-feature-card>
              <motion.a
                href={f.href}
                whileHover={{ backgroundColor: "rgba(255,255,255,0.03)" }}
                transition={{ duration: 0.2 }}
                className="block h-full"
              >
                <Card className="rounded-none border-0 bg-transparent h-full">
                  <CardContent className="p-7 md:p-11">
                    <p className="text-gold text-[0.65rem] font-semibold tracking-[0.18em] mb-8 opacity-65">{f.num}</p>
                    <div className="text-muted-foreground mb-5">{f.icon}</div>
                    <h3 className="text-foreground font-bold text-[1.3rem] tracking-[-0.03em] leading-tight mb-3">{f.title}</h3>
                    <p className="text-muted-foreground text-[0.875rem] leading-[1.75]">{f.description}</p>
                  </CardContent>
                </Card>
              </motion.a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
