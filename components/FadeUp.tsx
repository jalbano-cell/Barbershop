"use client";
import { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

interface FadeUpProps {
  children: React.ReactNode;
  className?: string;
  delay?: 1 | 2 | 3 | 4 | 5 | 6;
  as?: keyof JSX.IntrinsicElements;
}

export function FadeUp({ children, className, delay, as: Tag = "div" }: FadeUpProps) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("visible");
          observer.unobserve(el);
        }
      },
      { threshold: 0.12 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    // @ts-expect-error dynamic tag
    <Tag ref={ref} className={cn("fade-up", delay && `delay-${delay}`, className)}>
      {children}
    </Tag>
  );
}
