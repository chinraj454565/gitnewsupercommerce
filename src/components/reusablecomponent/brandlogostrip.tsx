"use client";
import { useEffect, useRef } from "react";

export default function BrandLogoStrip() {
  const brandsRef = useRef<HTMLDivElement>(null);
  const animRef = useRef<number | null>(null);
  const posRef = useRef<number>(0);

  useEffect(() => {
    const el = brandsRef.current;
    if (!el) return;

    const step = () => {
      const halfWidth = el.scrollWidth / 2;
      posRef.current += 0.6;
      if (posRef.current >= halfWidth) {
        posRef.current = 0;
      }
      el.scrollLeft = posRef.current;
      animRef.current = requestAnimationFrame(step);
    };

    animRef.current = requestAnimationFrame(step);
    return () => {
      if (animRef.current !== null) cancelAnimationFrame(animRef.current);
    };
  }, []);

  const brands = [
    <span key="meundies" className="whitespace-nowrap select-none flex items-baseline">
      <span style={{ fontFamily: "Georgia, serif", fontStyle: "italic", fontSize: "1.25rem", color: "#888" }}>Me</span>
      <span style={{ fontFamily: "Georgia, serif", fontWeight: 700, fontSize: "1.25rem", color: "#444" }}>Undies</span>
    </span>,

    <span key="huckberry" className="whitespace-nowrap select-none flex items-center gap-1">
      <span style={{ fontSize: "0.85rem", fontWeight: 900, color: "#333" }}>↑</span>
      <span style={{ fontFamily: "'Arial Narrow', Arial, sans-serif", fontWeight: 700, fontSize: "1.1rem", color: "#333" }}>Huckberry</span>
    </span>,

    <span key="kfc" className="whitespace-nowrap select-none" style={{ fontFamily: "Georgia, 'Times New Roman', serif", fontWeight: 900, fontSize: "1.5rem", color: "#111", letterSpacing: "0.04em" }}>
      KFC
    </span>,

    <span key="goop" className="whitespace-nowrap select-none" style={{ fontFamily: "Georgia, serif", fontWeight: 300, fontSize: "1.25rem", color: "#ccc", letterSpacing: "0.12em" }}>
      goop
    </span>,

    <span key="godaddy" className="whitespace-nowrap select-none" style={{ fontFamily: "Arial, sans-serif", fontWeight: 700, fontSize: "1.05rem", color: "#666" }}>
      GoDaddy
    </span>,

    <span key="craftsman" className="whitespace-nowrap select-none uppercase" style={{ fontFamily: "Arial, sans-serif", fontWeight: 900, fontSize: "0.8rem", color: "#444", letterSpacing: "0.15em" }}>
      Craftsman
    </span>,

    <span key="3form" className="whitespace-nowrap select-none" style={{ fontFamily: "Georgia, serif", fontWeight: 300, fontSize: "1.15rem", color: "#999", letterSpacing: "0.04em" }}>
      3form
    </span>,

    <span key="packhelp" className="whitespace-nowrap select-none" style={{ fontFamily: "Arial, sans-serif", fontWeight: 600, fontSize: "1.05rem", color: "#777" }}>
      Packhelp
    </span>,
  ];

  return (
    <section className="py-14 bg-gray-50 border-t border-gray-200 overflow-hidden">
      <div className="max-w-7xl mx-auto px-24">

        <p className="text-center text-[0.88rem] text-gray-500 font-normal mb-10">
          Used by over 5K businesses worldwide
        </p>

        <div
          className="relative"
          style={{
            maskImage: "linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)",
            WebkitMaskImage: "linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)",
          }}
        >
          <div
            ref={brandsRef}
            className="flex items-center overflow-x-hidden"
            style={{ scrollBehavior: "auto" }}
          >
            {[0, 1].map((pass) => (
              <div
                key={pass}
                className="flex items-center flex-shrink-0"
                style={{ gap: "140px", paddingRight: "140px" }}
              >
                {brands}
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}