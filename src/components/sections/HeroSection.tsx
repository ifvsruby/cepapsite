"use client";

import React, { Suspense } from "react";

import { Button } from "@/components/ui/button";
import { siteData } from "@/data/siteData";
import { ArrowRight, MessageCircle } from "lucide-react";

import { HeroScene } from "@/components/three/HeroScene";

export function HeroSection() {
  const scrollToOrientador = () => {
    document.getElementById("orientador")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden pt-24">
      {/* 3D Canvas Background */}
      <HeroScene />

      {/* Content */}
      <div className="container mx-auto px-6 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="flex flex-col max-w-2xl">
          <div className="inline-flex items-center gap-2 mb-6 opacity-80">
            <span className="w-8 h-[1px] bg-cepap-primary"></span>
            <span className="text-sm font-medium text-cepap-primary uppercase tracking-wider">
              {siteData.name} • Desde {siteData.founded}
            </span>
          </div>
          
          <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl leading-tight text-cepap-deep mb-6">
            Cuidar da mente muda a forma como você vive o mundo.
          </h1>
          
          <p className="text-lg md:text-xl text-cepap-graphite opacity-90 mb-10 leading-relaxed">
            Psicoterapia, psiquiatria e avaliações especializadas para crianças, adolescentes, adultos e famílias — com atendimento ético, científico e verdadeiramente humanizado.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" asChild className="gap-2">
              <a href={siteData.contacts.whatsappLink} target="_blank" rel="noreferrer">
                <MessageCircle className="w-5 h-5" />
                Agendar pelo WhatsApp
              </a>
            </Button>
            <Button size="lg" variant="outline" onClick={scrollToOrientador} className="gap-2">
              Encontrar meu atendimento
              <ArrowRight className="w-5 h-5" />
            </Button>
          </div>
          
          {/* Trust elements */}
          <div className="mt-12 pt-8 border-t border-cepap-mist grid grid-cols-2 md:grid-cols-4 gap-4">
            <div>
              <p className="font-medium text-cepap-deep">Desde {siteData.founded}</p>
              <p className="text-sm text-cepap-graphite opacity-70">Experiência</p>
            </div>
            <div>
              <p className="font-medium text-cepap-deep">Online & Físico</p>
              <p className="text-sm text-cepap-graphite opacity-70">Flexibilidade</p>
            </div>
            <div>
              <p className="font-medium text-cepap-deep">Multidisciplinar</p>
              <p className="text-sm text-cepap-graphite opacity-70">Especialidades</p>
            </div>
            <div>
              <p className="font-medium text-cepap-deep">Todas as Idades</p>
              <p className="text-sm text-cepap-graphite opacity-70">Cuidado contínuo</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
