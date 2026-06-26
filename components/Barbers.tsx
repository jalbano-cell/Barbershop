"use client";
import { useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { Button } from "@/components/ui/button";
import { MotionButton } from "@/components/MotionButton";

gsap.registerPlugin(ScrollTrigger, useGSAP);

const barbers = [
  { name: "Marcus Reid",    role: "Classic Cuts & Fades", img: "https://i.pravatar.cc/480?img=11" },
  { name: "Devon Williams", role: "Beard & Grooming",     img: "https://i.pravatar.cc/480?img=52" },
  { name: "Jalen Carter",   role: "Tapers & Line-Ups",   img: "https://i.pravatar.cc/480?img=68" },
];

export function Barbers() {
  const containerRef = useRef<HTMLElement>(null);

  useGSAP(() => {
    gsap.from("[data-barbers-header]", {
      scrollTrigger: { trigger: containerRef.current, start: "top 80%" },
      y: 32, opacity: 0, duration: 0.8, ease: "power2.out",
    });
    gsap.from("[data-barber-card]", {
      scrollTrigger: { trigger: containerRef.current, start: "top 72%" },
      y: 48, opacity: 0, duration: 0.7, stagger: 0.16, ease: "power2.out",
    });
  }, { scope: containerRef });

  return (
    <section ref={containerRef} id="barbers" className="py-16 md:py-[120px] bg-background">
      <div className="max-w-[1100px] mx-auto px-5 md:px-8">
        <div data-barbers-header className="text-center mb-12 md:mb-[72px]">
          <span className="inline-block text-gold text-[0.65rem] font-semibold tracking-[0.3em] uppercase mb-4">
            The Team
          </span>
          <h2 className="font-serif font-bold text-foreground tracking-[-0.04em] leading-[1.1]" style={{ fontSize: "clamp(2rem, 4vw, 3.25rem)" }}>
            Meet Your Barbers
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 md:gap-6">
          {barbers.map((b) => (
            <div key={b.name} data-barber-card className="flex flex-col items-center text-center">
              <div className="relative w-full rounded-xl overflow-hidden mb-6 border border-border" style={{ aspectRatio: "3/4" }}>
                <Image
                  src={b.img}
                  alt={b.name}
                  fill
                  className="object-cover object-top grayscale hover:grayscale-0 transition-[filter] duration-500"
                  sizes="(max-width: 640px) 90vw, 33vw"
                />
              </div>

              <h3 className="font-serif font-bold text-foreground text-[1.3rem] tracking-[-0.03em] leading-tight mb-1">
                {b.name}
              </h3>
              <p className="text-muted-foreground text-[0.8rem] tracking-wide mb-5">
                {b.role}
              </p>

              <MotionButton>
                <Button asChild size="sm" className="bg-white text-[#111111] hover:bg-white/90 border-0 text-[0.72rem] tracking-wider uppercase font-semibold px-6">
                  <a href="#booking">Book Now</a>
                </Button>
              </MotionButton>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
