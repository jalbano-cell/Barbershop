"use client";
import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

const images = [
  { src: "https://beardburys.com/img/cms/high-fade-hombre-beardburys.jpg", label: "Fade" },
  { src: "https://cdn1.npcdn.net/images/1729482448e289a25ef63cb0bf5be609efdba8bbd8.webp?md5id=1192007d993f13fc9de7ce32bd9bab16&new_width=1000&new_height=1000&size=max&w=1780047466&from=jpeg&type=10", label: "Skin Fade" },
  { src: "https://i0.wp.com/therighthairstyles.com/wp-content/uploads/2024/05/1-mid-length-blowout-cut-for-young-men.jpg?resize=1080%2C1350&ssl=1", label: "Taper" },
  { src: "https://cdn.prod.website-files.com/5cb569e54ca2fddd5451cbb2/5f8e7707ad6d75eda371136b_Cannington-120.jpg", label: "Beard Trim" },
  { src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDv2szNVN3f2C27rn1LSXoBl9NfXQdBI3ImccOamM_pgd6-2Bt9h5OzjL-&s=10", label: "Classic Cut" },
  { src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1vMkvfJhZmj9W8EbtRVUFPTsUccJqpm6yjbn-cDiG-Q&s=10", label: "Line Up" },
];

export function Gallery() {
  const containerRef = useRef<HTMLElement>(null);
  const lightboxRef = useRef<HTMLDivElement>(null);
  const lightboxImgRef = useRef<HTMLImageElement>(null);

  useGSAP(() => {
    gsap.from("[data-gallery-header]", {
      scrollTrigger: { trigger: containerRef.current, start: "top 80%" },
      y: 32, opacity: 0, duration: 0.8, ease: "power2.out",
    });
    gsap.from("[data-gallery-item]", {
      scrollTrigger: { trigger: containerRef.current, start: "top 72%" },
      scale: 0.82, opacity: 0, duration: 0.65,
      stagger: { amount: 0.45, from: "start" },
      ease: "back.out(1.4)",
    });
  }, { scope: containerRef });

  const openLightbox = (src: string, alt: string) => {
    if (!lightboxRef.current || !lightboxImgRef.current) return;
    lightboxImgRef.current.src = src;
    lightboxImgRef.current.alt = alt;
    lightboxRef.current.classList.add("open");
    document.body.style.overflow = "hidden";
  };

  const closeLightbox = () => {
    lightboxRef.current?.classList.remove("open");
    document.body.style.overflow = "";
  };

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") closeLightbox(); };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);

  return (
    <section ref={containerRef} id="gallery" className="py-16 md:py-[120px] bg-card border-y border-border">
      <div className="max-w-[1100px] mx-auto px-5 md:px-8">
        <div data-gallery-header className="text-center mb-12 md:mb-[72px]">
          <span className="inline-block text-gold text-[0.65rem] font-semibold tracking-[0.3em] uppercase mb-4">
            The Work
          </span>
          <h2 className="font-serif font-bold text-foreground tracking-[-0.04em] leading-[1.1]" style={{ fontSize: "clamp(2rem, 4vw, 3.25rem)" }}>
            Fresh Cuts. Consistent Results.
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-2 md:gap-3">
          {images.map((img) => (
            <div
              key={img.label}
              data-gallery-item
              className="relative rounded-md overflow-hidden cursor-zoom-in group"
              style={{ aspectRatio: "4/5", background: "#161616" }}
              onClick={() => openLightbox(img.src, img.label)}
            >
              <Image
                src={img.src}
                alt={img.label}
                fill
                className="object-cover transition-transform duration-500 ease-in-out group-hover:scale-[1.06]"
                sizes="(max-width: 768px) 50vw, 33vw"
              />
              <div className="absolute inset-x-0 bottom-0 pt-10 pb-4 px-[18px] bg-gradient-to-t from-white/85 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="text-[0.72rem] font-semibold tracking-[0.1em] uppercase" style={{ color: "#111111" }}>
                  {img.label}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div ref={lightboxRef} className="lightbox" onClick={(e) => { if (e.target === lightboxRef.current) closeLightbox(); }}>
        <button onClick={closeLightbox} className="absolute top-6 right-7 text-white/50 hover:text-white text-[2.2rem] leading-none bg-transparent border-none cursor-pointer transition-colors">
          &times;
        </button>
        <img ref={lightboxImgRef} src="" alt="" />
      </div>
    </section>
  );
}
