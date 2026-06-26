"use client";
import { useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { Button } from "@/components/ui/button";
import { MotionButton } from "@/components/MotionButton";

gsap.registerPlugin(useGSAP);

export function Hero() {
  const containerRef = useRef<HTMLElement>(null);

  useGSAP(() => {
    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
    tl.from("[data-hero-eyebrow]", { opacity: 0, y: 18, duration: 0.7 })
      .from("[data-hero-title]",   { opacity: 0, y: 56, scale: 0.96, duration: 1.1 }, "-=0.4")
      .from("[data-hero-sub]",     { opacity: 0, y: 22, duration: 0.7 }, "-=0.55")
      .from("[data-hero-btn]",     { opacity: 0, y: 18, duration: 0.6, stagger: 0.14 }, "-=0.45")
      .from("[data-hero-scroll]",  { opacity: 0, duration: 0.5 }, "-=0.2");
  }, { scope: containerRef });

  return (
    <section
      ref={containerRef}
      id="hero"
      className="relative min-h-screen flex items-center justify-center text-center overflow-hidden"
      style={{ backgroundColor: "#0c0c0f" }}
    >
      {/* Prioritised hero image — drives LCP */}
      <Image
        src="https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&w=1920&q=80"
        alt=""
        fill
        priority
        className="object-cover object-top"
        sizes="100vw"
      />

      <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/70 to-[#0c0c0f]/95" />

      <div className="relative z-10 px-5 pt-28 md:pt-[120px] pb-12 md:pb-20 max-w-[820px]">
        <span
          data-hero-eyebrow
          className="inline-block text-white/80 text-[0.68rem] font-semibold tracking-[0.3em] uppercase mb-7"
        >
          Premium Barbershop
        </span>

        <h1
          data-hero-title
          className="font-serif font-bold text-white leading-[0.92] tracking-[-0.04em] mb-6"
          style={{ fontSize: "clamp(3rem, 10vw, 80px)" }}
        >
          Barbershop
        </h1>

        <p
          data-hero-sub
          className="text-white/85 font-light tracking-wide max-w-[380px] mx-auto mb-12"
          style={{ fontSize: "1rem", lineHeight: "1.8" }}
        >
          Where precision meets craft. Every cut, every time.
        </p>

        <div className="flex gap-3 items-center justify-center flex-wrap">
          <MotionButton data-hero-btn>
            <Button asChild size="lg" className="bg-white text-[#111111] hover:bg-white/90 border-0 text-[0.75rem] font-semibold tracking-[0.12em] uppercase px-8">
              <a href="#booking">Book an Appointment</a>
            </Button>
          </MotionButton>
          <MotionButton data-hero-btn>
            <Button asChild size="lg" variant="outline" className="border-white/55 text-foreground hover:border-white/85 bg-transparent text-[0.75rem] font-semibold tracking-[0.12em] uppercase px-8">
              <a href="#gallery">View Our Work</a>
            </Button>
          </MotionButton>
        </div>
      </div>

      <div data-hero-scroll className="absolute bottom-11 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2.5">
        <span className="text-[0.6rem] font-semibold tracking-[0.22em] uppercase text-white/35">Scroll</span>
        <div className="w-px h-[52px] bg-gradient-to-b from-gold/70 to-transparent animate-scroll-pulse" />
      </div>
    </section>
  );
}
