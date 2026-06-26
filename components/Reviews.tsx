import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { FadeUp } from "@/components/FadeUp";

const reviews = [
  { initial: "M", name: "Mark V.", text: '"If you\'re looking for a fresh cut and a high-quality grooming experience, look no further. Best barbershop around."' },
  { initial: "G", name: "Graeson L.", text: '"Hands down the best barbers here. Every time it\'s time for a cut they never disappoint — consistent, clean, professional."' },
  { initial: "J", name: "Joshua H.", text: '"I\'ve been to other barbers but it\'s not the same. Every time it\'s time for a fade he never disappoints!"' },
  { initial: "P", name: "Philip T.", text: '"True artists who treat every haircut like a masterpiece. The attention to detail is unmatched."' },
];

export function Reviews() {
  return (
    <section id="reviews" className="py-16 md:py-[120px] bg-background">
      <div className="max-w-[1100px] mx-auto px-5 md:px-8">
        <FadeUp className="text-center mb-[72px]">
          <span className="inline-block text-gold text-[0.65rem] font-semibold tracking-[0.3em] uppercase mb-4">
            Client Reviews
          </span>
          <h2 className="font-serif font-bold text-foreground tracking-[-0.04em] leading-[1.1]" style={{ fontSize: "clamp(2rem, 4vw, 3.25rem)" }}>
            What People Are Saying
          </h2>
        </FadeUp>

        <FadeUp>
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_340px] gap-5 items-start">
            {/* Review cards */}
            <div className="flex flex-col gap-3">
              {reviews.map((r) => (
                <Card key={r.name} className="bg-card border-border hover:border-border/80 transition-colors">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-3.5">
                      <div className="w-[38px] h-[38px] rounded-full bg-accent border border-border flex items-center justify-center text-gold text-[0.8rem] font-semibold flex-shrink-0">
                        {r.initial}
                      </div>
                      <div className="flex flex-col gap-0.5 flex-1">
                        <span className="text-foreground text-[0.85rem] font-semibold tracking-tight">{r.name}</span>
                        <span className="text-gold text-[0.75rem] tracking-[1px]">&#9733;&#9733;&#9733;&#9733;&#9733;</span>
                      </div>
                      <Badge variant="outline" className="text-muted-foreground border-border text-[0.65rem] tracking-widest font-semibold">
                        Google
                      </Badge>
                    </div>
                    <p className="text-muted-foreground text-[0.875rem] leading-[1.75]">{r.text}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Map */}
            <div className="rounded-xl overflow-hidden border border-border h-[280px] lg:h-[460px]">
              <iframe
                src="https://maps.google.com/maps?q=Gill+Barber+7215+Goreway+Dr+%231c17+Mississauga+ON+L4T+0B4&output=embed"
                title="Barbershop on Google Maps"
                className="w-full"
                style={{ height: "100%", border: "none" }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
