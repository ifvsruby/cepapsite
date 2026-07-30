"use client";

import React, { useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export function ManifestoSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(() => {
    const mm = gsap.matchMedia();
    
    mm.add("all", () => {
      // Removed Parallax effect as per user request
      // Simple fade up for the glass card
      gsap.from(".manifesto-card", {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
        },
        y: 50,
        opacity: 0,
        duration: 1,
        ease: "power2.out"
      });
    });

    return () => mm.revert();
  }, { scope: sectionRef });

  return (
    <section ref={sectionRef} className="relative py-32 md:py-48 overflow-hidden bg-cepap-deep flex items-center justify-center">
      {/* Background Image (Static) */}
      <div className="absolute inset-0 w-full h-full z-0">
        <Image
          src="/manifesto-bg.jpg"
          alt="Ambiente abstrato acolhedor"
          fill
          className="manifesto-bg object-cover object-center md:object-top opacity-60 mix-blend-screen"
          priority={true}
          quality={90}
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-cepap-deep/40 mix-blend-multiply" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="manifesto-card max-w-4xl mx-auto bg-white/10 backdrop-blur-xl border border-white/20 p-8 md:p-16 rounded-[2rem] shadow-2xl text-center">
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl mb-8 leading-tight text-white drop-shadow-sm">
            Você não precisa enfrentar tudo sozinho.
          </h2>
          <p className="text-lg md:text-2xl text-white/90 leading-relaxed font-light mb-12 max-w-3xl mx-auto">
            Algumas dificuldades são silenciosas. Outras afetam a rotina, os relacionamentos e a forma como você se percebe. 
            Na CEPAP, cada pessoa é acolhida com <span className="font-medium text-cepap-accent-2">respeito à sua história</span>, 
            às suas necessidades e ao seu tempo.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 md:gap-12 text-sm md:text-base font-medium tracking-wide uppercase text-cepap-mist/80">
            <span>Escuta Ativa</span>
            <span className="hidden md:inline">•</span>
            <span>Ciência</span>
            <span className="hidden md:inline">•</span>
            <span>Individualidade</span>
          </div>
        </div>
      </div>
    </section>
  );
}
