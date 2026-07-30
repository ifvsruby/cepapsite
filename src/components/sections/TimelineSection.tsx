"use client";

import React, { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const steps = [
  {
    num: "01",
    title: "Entre em contato",
    description: "Converse com a equipe pelo WhatsApp ou formulário.",
  },
  {
    num: "02",
    title: "Conte o que está procurando",
    description: "A equipe realiza um acolhimento inicial e entende sua necessidade.",
  },
  {
    num: "03",
    title: "Encontre o atendimento adequado",
    description: "A pessoa é orientada sobre especialidade, profissional, formato e unidade.",
  },
  {
    num: "04",
    title: "Inicie o acompanhamento",
    description: "O cuidado começa respeitando a história, os objetivos e o ritmo de cada pessoa.",
  }
];

export function TimelineSection() {
  const containerRef = useRef<HTMLElement>(null);

  useGSAP(() => {
    const cards = gsap.utils.toArray(".timeline-card");
    
    gsap.from(cards, {
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 75%",
      },
      y: 50,
      opacity: 0,
      stagger: 0.2,
      duration: 0.8,
      ease: "power2.out"
    });
  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="py-24 bg-cepap-mist/20">
      <div className="container mx-auto px-6">
        <div className="max-w-2xl mb-16">
          <h2 className="font-serif text-3xl md:text-5xl text-cepap-deep mb-6">
            Começar pode ser mais simples do que parece.
          </h2>
        </div>

        <div className="relative">
          {/* Connecting Line Desktop */}
          <div className="hidden md:block absolute top-1/2 left-0 w-full h-[1px] bg-cepap-mist -translate-y-1/2 z-0" />
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative z-10">
            {steps.map((step, index) => (
              <div key={index} className="timeline-card bg-white rounded-3xl p-8 border border-cepap-mist shadow-sm relative pt-12">
                <div className="absolute -top-6 md:-top-12 left-8 md:left-1/2 md:-translate-x-1/2 w-12 md:w-24 h-12 md:h-24 bg-cepap-white rounded-full flex items-center justify-center text-xl md:text-3xl font-serif text-cepap-primary border-4 border-white shadow-sm">
                  {step.num}
                </div>
                
                <h3 className="font-serif text-xl text-cepap-deep mb-3 mt-4 md:text-center">
                  {step.title}
                </h3>
                <p className="text-cepap-graphite opacity-80 md:text-center text-sm">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
