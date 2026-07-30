"use client";

import React, { useRef } from "react";
import Link from "next/link";
import { servicesData } from "@/data/servicesData";
import { ArrowRight, User, Users, Baby, BrainCircuit, BookOpen, Puzzle, Stethoscope, MessageCircle, MonitorSmartphone, Compass, Building2, HeartPulse, ChevronLeft, ChevronRight } from "lucide-react";

const iconMap: Record<string, React.ReactNode> = {
  User: <User className="w-8 h-8" />,
  Users: <Users className="w-8 h-8" />,
  Baby: <Baby className="w-8 h-8" />,
  BrainCircuit: <BrainCircuit className="w-8 h-8" />,
  BookOpen: <BookOpen className="w-8 h-8" />,
  Puzzle: <Puzzle className="w-8 h-8" />,
  Stethoscope: <Stethoscope className="w-8 h-8" />,
  MessageCircle: <MessageCircle className="w-8 h-8" />,
  MonitorSmartphone: <MonitorSmartphone className="w-8 h-8" />,
  Compass: <Compass className="w-8 h-8" />,
  Building2: <Building2 className="w-8 h-8" />,
  HeartPulse: <HeartPulse className="w-8 h-8" />
};

export function EspecialidadesSection() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -424, behavior: "smooth" }); // 400px width + 24px gap
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 424, behavior: "smooth" });
    }
  };

  return (
    <section className="bg-cepap-white py-24 relative group">
      <div className="flex flex-col justify-center relative">
        <div className="container mx-auto px-6 mb-8 md:mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <h2 className="font-serif text-3xl md:text-5xl text-cepap-deep">
            Um cuidado específico para cada necessidade.
          </h2>
          
          {/* Mobile Hint */}
          <div className="md:hidden flex items-center gap-2 text-cepap-primary opacity-80 text-sm font-medium">
            <ArrowRight className="w-4 h-4 animate-pulse" />
            Deslize para ver mais
          </div>

          {/* Desktop Controls */}
          <div className="hidden md:flex items-center gap-4">
            <button 
              onClick={scrollLeft}
              className="w-12 h-12 rounded-full border border-cepap-mist text-cepap-deep hover:bg-cepap-mist/50 transition-colors flex items-center justify-center outline-none focus:outline-none"
              aria-label="Rolar para a esquerda"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button 
              onClick={scrollRight}
              className="w-12 h-12 rounded-full border border-cepap-mist text-cepap-deep hover:bg-cepap-mist/50 transition-colors flex items-center justify-center outline-none focus:outline-none"
              aria-label="Rolar para a direita"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Horizontal Scroll Native CSS */}
        <div className="w-full overflow-hidden md:container md:mx-auto md:px-6">
          <div 
            ref={scrollRef}
            className="flex gap-6 px-6 md:px-0 pb-12 overflow-x-auto snap-x snap-mandatory hide-scrollbar md:justify-start"
          >
            {servicesData.map((service) => (
              <div 
                key={service.id}
                className="bg-white rounded-3xl p-8 border border-cepap-mist shadow-sm w-[85vw] md:w-[400px] flex-shrink-0 snap-center group/card hover:border-cepap-primary hover:shadow-md transition-colors transition-shadow duration-300 flex flex-col"
              >
                <div className="w-16 h-16 rounded-2xl bg-cepap-mist/50 text-cepap-primary flex items-center justify-center mb-8 group-hover/card:bg-cepap-primary group-hover/card:text-white transition-colors duration-300">
                  {iconMap[service.iconName] || <User className="w-8 h-8" />}
                </div>
                
                <h3 className="font-serif text-2xl text-cepap-deep mb-3">
                  {service.title}
                </h3>
                
                <p className="text-sm font-medium text-cepap-accent-1 mb-4">
                  {service.audience}
                </p>
                
                <p className="text-cepap-graphite opacity-80 mb-8 leading-relaxed flex-1">
                  {service.description}
                </p>
                
                <Link 
                  href={`/especialidades/${service.slug}`}
                  className="inline-flex items-center gap-2 text-sm font-semibold text-cepap-primary group-hover/card:text-cepap-deep transition-colors mt-auto"
                >
                  Conhecer atendimento
                  <ArrowRight className="w-4 h-4 transform group-hover/card:translate-x-1 transition-transform" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
