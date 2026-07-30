"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { siteData } from "@/data/siteData";
import { MessageCircle, MapPin } from "lucide-react";
import Link from "next/link";

export function FinalCtaSection() {
  return (
    <section className="py-32 bg-cepap-deep relative overflow-hidden">
      {/* Abstract background shapes representing stability and closure */}
      <div className="absolute inset-0 pointer-events-none opacity-20 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-cepap-primary to-transparent" />
      </div>

      <div className="container mx-auto px-6 relative z-10 text-center max-w-3xl">
        <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-white mb-8 leading-tight">
          Você não precisa ter todas as respostas para dar o primeiro passo.
        </h2>
        <p className="text-xl text-cepap-mist opacity-90 mb-12 font-light">
          Converse com nossa equipe. Vamos ouvir sua necessidade e ajudar você a encontrar o atendimento mais adequado.
        </p>
        
        <div className="flex flex-col sm:flex-row justify-center gap-6">
          <Button size="lg" asChild className="bg-cepap-accent-1 text-cepap-deep hover:bg-white text-base gap-2 h-14 px-8">
            <a href={siteData.contacts.whatsappLink} target="_blank" rel="noreferrer">
              <MessageCircle className="w-5 h-5" />
              Conversar pelo WhatsApp
            </a>
          </Button>
          <Button size="lg" variant="outline" asChild className="border-cepap-mist text-cepap-mist hover:bg-white hover:text-cepap-deep hover:border-white text-base gap-2 h-14 px-8">
            <Link href="/unidades">
              <MapPin className="w-5 h-5" />
              Ver unidades
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
