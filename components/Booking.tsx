"use client";
import { useRef } from "react";
import dynamic from "next/dynamic";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

const ParticleWave = dynamic(
  () => import("@/components/ParticleWave").then((m) => ({ default: m.ParticleWave })),
  { ssr: false, loading: () => null }
);

export function Booking() {
  const containerRef = useRef<HTMLElement>(null);

  useGSAP(() => {
    gsap.from("[data-booking-header]", {
      scrollTrigger: { trigger: containerRef.current, start: "top 80%" },
      y: 32, opacity: 0, duration: 0.8, ease: "power2.out",
    });
    gsap.from("[data-booking-iframe]", {
      scrollTrigger: { trigger: containerRef.current, start: "top 65%" },
      y: 40, opacity: 0, duration: 0.9, ease: "power2.out",
    });
  }, { scope: containerRef });

  return (
    <section ref={containerRef} id="booking" className="relative py-16 md:py-[120px] bg-background overflow-hidden">
      <ParticleWave />

      <div className="absolute inset-x-0 top-0 h-36 bg-gradient-to-b from-background to-transparent pointer-events-none z-10" />
      <div className="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-background to-transparent pointer-events-none z-10" />

      <div className="relative z-20 max-w-[1100px] mx-auto px-5 md:px-8">
        <div data-booking-header className="text-center mb-10 md:mb-[72px]">
          <span className="inline-block text-gold text-[0.65rem] font-semibold tracking-[0.3em] uppercase mb-4">
            Reserve Your Seat
          </span>
          <h2 className="font-serif font-bold text-foreground tracking-[-0.04em] leading-[1.1]" style={{ fontSize: "clamp(2rem, 4vw, 3.25rem)" }}>
            Book an Appointment
          </h2>
        </div>

        <div data-booking-iframe className="rounded-xl overflow-hidden border border-border h-[520px] md:h-[700px]">
          <iframe
            src="https://gillbarber.setmore.com"
            title="Book an appointment at Barbershop"
            className="w-full h-full"
            style={{ border: "none" }}
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
}
