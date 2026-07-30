"use client";

import React, { useRef } from "react";
import { ArrowRight, Activity, Brain, Clock, BarChart2, Eye, FileText, Settings, HeartPulse } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export function NeuroSection() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!containerRef.current) return;
    
    // Animate the nodes floating gently
    const nodes = containerRef.current.querySelectorAll('.neuro-node');
    
    nodes.forEach((node, i) => {
      gsap.to(node, {
        y: i % 2 === 0 ? -15 : 15,
        x: i % 3 === 0 ? 10 : -10,
        duration: 3 + i * 0.5,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut"
      });
    });
  }, { scope: containerRef });

  return (
    <section className="py-24 md:py-32 bg-cepap-deep relative overflow-hidden text-white">
      {/* Background ambient lighting */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-cepap-primary/20 via-transparent to-transparent rounded-full pointer-events-none translate-x-1/3 -translate-y-1/3" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-cepap-accent-1/10 via-transparent to-transparent rounded-full pointer-events-none -translate-x-1/3 translate-y-1/3" />

      <div className="container mx-auto px-6 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        
        {/* Text Content */}
        <div className="max-w-xl">
          <div className="inline-flex items-center gap-2 mb-6">
            <span className="w-8 h-[1px] bg-cepap-primary"></span>
            <span className="text-sm font-medium text-cepap-primary uppercase tracking-widest">
              Destaque
            </span>
          </div>
          
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-white mb-8 leading-tight">
            Compreender a mente com precisão.
          </h2>
          <p className="text-lg md:text-xl text-cepap-mist opacity-90 mb-10 leading-relaxed font-light">
            A avaliação neuropsicológica é um processo investigativo detalhado das funções cognitivas, emocionais e comportamentais, essencial para diagnósticos precisos como TEA e TDAH.
          </p>
          
          <ul className="space-y-6 mb-12">
            {[
              "Para crianças, adolescentes, adultos e idosos.",
              "Identificação de potencialidades e desafios.",
              "Devolutiva humanizada com relatório detalhado."
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-4 text-white/90">
                <div className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center shrink-0 mt-0.5 border border-white/20">
                  <div className="w-1.5 h-1.5 rounded-full bg-cepap-primary" />
                </div>
                <span className="text-lg font-light">{item}</span>
              </li>
            ))}
          </ul>
          
          <Button asChild size="lg" className="bg-cepap-primary text-white hover:bg-white hover:text-cepap-deep border-none text-base h-14 px-8 shadow-lg shadow-cepap-primary/20">
            <Link href="/especialidades/neuropsicologia" className="gap-2">
              Detalhes da avaliação
              <ArrowRight className="w-5 h-5" />
            </Link>
          </Button>
        </div>

        {/* Abstract Data Visualization */}
        <div ref={containerRef} className="relative w-full aspect-square md:aspect-[4/3] lg:aspect-square flex items-center justify-center perspective-1000">
          
          {/* Decorative glowing rings */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="w-[70%] h-[70%] rounded-full border border-white/10 animate-[spin_60s_linear_infinite]" />
            <div className="absolute w-[90%] h-[90%] rounded-full border border-white/5 animate-[spin_40s_linear_infinite_reverse]" />
          </div>

          <div className="relative w-full h-full max-w-[300px] md:max-w-lg mx-auto">
            {/* Center Brain Node */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
              <div className="relative w-20 h-20 md:w-36 md:h-36 bg-gradient-to-br from-cepap-primary to-[#185c72] rounded-full flex items-center justify-center shadow-[0_0_60px_rgba(36,124,152,0.8)] border border-white/10">
                <div className="absolute inset-0 bg-white/20 rounded-full animate-ping opacity-20 duration-3000" />
                <Brain className="w-10 h-10 md:w-16 md:h-16 text-white drop-shadow-md" />
              </div>
            </div>

            {/* Orbiting Nodes */}
            <div className="neuro-node absolute top-[5%] left-[5%] flex flex-col items-center gap-2 md:gap-3 z-10">
              <div className="w-12 h-12 md:w-20 md:h-20 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/20 flex items-center justify-center text-white shadow-2xl hover:bg-white/10 hover:scale-110 transition-all cursor-default hover:border-white/40 hover:shadow-cepap-primary/20">
                <Eye className="w-6 h-6 md:w-9 md:h-9 opacity-90" />
              </div>
              <span className="text-[10px] md:text-sm font-medium text-white/70 tracking-widest uppercase whitespace-nowrap">Atenção</span>
            </div>

            <div className="neuro-node absolute top-[0%] right-[10%] flex flex-col items-center gap-2 md:gap-3 z-10">
              <div className="w-12 h-12 md:w-20 md:h-20 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/20 flex items-center justify-center text-white shadow-2xl hover:bg-white/10 hover:scale-110 transition-all cursor-default hover:border-white/40 hover:shadow-cepap-primary/20">
                <Clock className="w-6 h-6 md:w-9 md:h-9 opacity-90" />
              </div>
              <span className="text-[10px] md:text-sm font-medium text-white/70 tracking-widest uppercase whitespace-nowrap">Memória</span>
            </div>

            <div className="neuro-node absolute bottom-[10%] left-[0%] flex flex-col items-center gap-2 md:gap-3 z-10">
              <div className="w-12 h-12 md:w-20 md:h-20 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/20 flex items-center justify-center text-white shadow-2xl hover:bg-white/10 hover:scale-110 transition-all cursor-default hover:border-white/40 hover:shadow-cepap-primary/20">
                <Activity className="w-6 h-6 md:w-9 md:h-9 opacity-90" />
              </div>
              <span className="text-[10px] md:text-sm font-medium text-white/70 tracking-widest uppercase whitespace-nowrap">Proces.</span>
            </div>

            <div className="neuro-node absolute bottom-[0%] right-[5%] flex flex-col items-center gap-2 md:gap-3 z-10">
              <div className="w-12 h-12 md:w-20 md:h-20 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/20 flex items-center justify-center text-white shadow-2xl hover:bg-white/10 hover:scale-110 transition-all cursor-default hover:border-white/40 hover:shadow-cepap-primary/20">
                <Settings className="w-6 h-6 md:w-9 md:h-9 opacity-90" />
              </div>
              <span className="text-[10px] md:text-sm font-medium text-white/70 tracking-widest uppercase whitespace-nowrap">Func. Exec.</span>
            </div>

            <div className="neuro-node absolute top-[45%] right-[-10%] md:right-[0%] flex flex-col items-center gap-2 md:gap-3 z-10">
              <div className="w-12 h-12 md:w-20 md:h-20 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/20 flex items-center justify-center text-white shadow-2xl hover:bg-white/10 hover:scale-110 transition-all cursor-default hover:border-white/40 hover:shadow-cepap-primary/20">
                <FileText className="w-6 h-6 md:w-9 md:h-9 opacity-90" />
              </div>
              <span className="text-[10px] md:text-sm font-medium text-white/70 tracking-widest uppercase whitespace-nowrap">Linguagem</span>
            </div>
            
            <div className="neuro-node absolute top-[45%] left-[-10%] md:left-[0%] flex flex-col items-center gap-2 md:gap-3 z-10">
              <div className="w-12 h-12 md:w-20 md:h-20 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/20 flex items-center justify-center text-white shadow-2xl hover:bg-white/10 hover:scale-110 transition-all cursor-default hover:border-white/40 hover:shadow-cepap-primary/20">
                <HeartPulse className="w-6 h-6 md:w-9 md:h-9 opacity-90" />
              </div>
              <span className="text-[10px] md:text-sm font-medium text-white/70 tracking-widest uppercase whitespace-nowrap">Emocional</span>
            </div>

            {/* Connecting lines (SVG) */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-20 z-0" fill="none">
              <path d="M 50% 50% L 15% 15%" stroke="url(#gradLines)" strokeWidth="2" strokeDasharray="4 6" />
              <path d="M 50% 50% L 85% 10%" stroke="url(#gradLines)" strokeWidth="2" strokeDasharray="4 6" />
              <path d="M 50% 50% L 10% 85%" stroke="url(#gradLines)" strokeWidth="2" strokeDasharray="4 6" />
              <path d="M 50% 50% L 90% 95%" stroke="url(#gradLines)" strokeWidth="2" strokeDasharray="4 6" />
              <path d="M 50% 50% L 100% 45%" stroke="url(#gradLines)" strokeWidth="2" strokeDasharray="4 6" />
              <path d="M 50% 50% L 0% 45%" stroke="url(#gradLines)" strokeWidth="2" strokeDasharray="4 6" />
              <defs>
                <linearGradient id="gradLines" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#fff" stopOpacity="1" />
                  <stop offset="100%" stopColor="#fff" stopOpacity="0.2" />
                </linearGradient>
              </defs>
            </svg>

          </div>
        </div>
      </div>
    </section>
  );
}
