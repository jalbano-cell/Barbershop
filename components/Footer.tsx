import { Separator } from "@/components/ui/separator";

const navLinks = [
  { label: "Services", href: "#features" },
  { label: "Reviews", href: "#reviews" },
  { label: "Gallery", href: "#gallery" },
  { label: "Book Now", href: "#booking" },
];

const hours = [
  { day: "Monday",    time: "9 a.m. – 9 p.m." },
  { day: "Tuesday",   time: "9 a.m. – 9 p.m." },
  { day: "Wednesday", time: "9 a.m. – 9 p.m." },
  { day: "Thursday",  time: "9 a.m. – 9 p.m." },
  { day: "Friday",    time: "9 a.m. – 9 p.m." },
  { day: "Saturday",  time: "9 a.m. – 8 p.m." },
  { day: "Sunday",    time: "9 a.m. – 7 p.m." },
];

export function Footer() {
  return (
    <footer className="bg-card border-t border-border pt-12 pb-8 md:pt-20 md:pb-10">
      <div className="max-w-[1100px] mx-auto px-5 md:px-8">
        <div className="grid grid-cols-2 md:grid-cols-[2fr_1fr_1fr_1.4fr] gap-8 md:gap-12 mb-10 md:mb-16">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <a href="#hero" className="text-gold font-bold tracking-[0.1em] uppercase text-[1rem] font-sans">
              Barbershop
            </a>
            <p className="text-muted-foreground text-[0.875rem] mt-4 leading-[1.75] max-w-[200px]">
              Premium grooming. Every visit.
            </p>
          </div>

          {/* Nav */}
          <div>
            <h4 className="text-muted-foreground text-[0.875rem] font-semibold tracking-[0.2em] uppercase mb-5">Navigate</h4>
            <ul className="space-y-2.5">
              {navLinks.map((l) => (
                <li key={l.label}>
                  <a href={l.href} className="text-muted-foreground hover:text-foreground text-[0.875rem] transition-colors">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h4 className="text-muted-foreground text-[0.875rem] font-semibold tracking-[0.2em] uppercase mb-5">Hours</h4>
            <ul className="space-y-2.5">
              {hours.map((h) => (
                <li key={h.day} className="grid grid-cols-[90px_auto] text-muted-foreground text-[0.8rem]">
                  <span>{h.day}</span>
                  <span className="whitespace-nowrap">{h.time}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Visit Us */}
          <div>
            <h4 className="text-muted-foreground text-[0.875rem] font-semibold tracking-[0.2em] uppercase mb-5">Visit Us</h4>
            <ul className="space-y-2.5">
              <li className="text-muted-foreground text-[0.875rem]">7215 Goreway Dr #1c17</li>
              <li className="text-muted-foreground text-[0.875rem]">Mississauga, ON L4T 0B4</li>
              <li>
                <a href="tel:+16476799829" className="text-muted-foreground hover:text-foreground text-[0.875rem] transition-colors">
                  (647) 679-9829
                </a>
              </li>
            </ul>
          </div>
        </div>

        <Separator className="bg-border mb-8" />

        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
          <p className="text-muted-foreground text-[0.75rem] tracking-wide">
            &copy; 2026 Barbershop. All rights reserved.
          </p>
          <p className="text-muted-foreground text-[0.75rem] tracking-wide">
            Designed & Managed by{" "}
            <a
              href="https://omnigriddigital.ca"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground hover:text-gold transition-colors"
            >
              Omnigrid Digital
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
