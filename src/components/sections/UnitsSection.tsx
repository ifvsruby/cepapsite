"use client";

import React from "react";
import { siteData } from "@/data/siteData";
import { MapPin, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";

export function UnitsSection() {
  const visibleLocations = siteData.locations.filter((l) => !l.pendingConfirmation);

  return (
    <section className="py-24 bg-cepap-mist/10">
      <div className="container mx-auto px-6">
        <div className="max-w-2xl mb-16">
          <h2 className="font-serif text-3xl md:text-5xl text-cepap-deep mb-6">
            Cuidado próximo de você.
          </h2>
          <p className="text-lg text-cepap-graphite opacity-80">
            Nossas unidades foram pensadas para oferecer conforto, privacidade e segurança durante o seu atendimento.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {visibleLocations.map((location) => (
            <div key={location.id} className="bg-white rounded-3xl overflow-hidden border border-cepap-mist shadow-sm group hover:shadow-md transition-shadow flex flex-col">
              
              {/* Map Preview Area */}
              <div className="w-full h-48 bg-cepap-mist/50 relative">
                <iframe 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }}
                  loading="lazy"
                  allowFullScreen
                  referrerPolicy="no-referrer-when-downgrade"
                  src={`https://maps.google.com/maps?q=${encodeURIComponent(location.address)}&t=&z=15&ie=UTF8&iwloc=&output=embed`}
                  title={`Mapa da unidade ${location.name}`}
                ></iframe>
              </div>

              <div className="p-8 flex-1 flex flex-col">
                <h3 className="font-serif text-2xl text-cepap-deep mb-4">{location.name}</h3>
                
                <div className="flex items-start gap-3 mb-4">
                  <MapPin className="w-5 h-5 text-cepap-primary shrink-0 mt-0.5" />
                  <p className="text-sm text-cepap-graphite opacity-80 leading-relaxed">
                    {location.address}
                  </p>
                </div>

                <div className="flex items-start gap-3 mb-8">
                  <Clock className="w-5 h-5 text-cepap-primary shrink-0 mt-0.5" />
                  <div className="text-sm text-cepap-graphite opacity-80">
                    <p>{siteData.hours.weekdays}</p>
                    <p>{siteData.hours.saturday}</p>
                  </div>
                </div>

                <div className="flex flex-col gap-3 mt-auto">
                  <Button asChild variant="default" className="w-full">
                    <a href={siteData.contacts.whatsappLink} target="_blank" rel="noreferrer">
                      Agendar nesta unidade
                    </a>
                  </Button>
                  <Button asChild variant="outline" className="w-full">
                    <a href={`https://maps.google.com/?q=${encodeURIComponent(location.address)}`} target="_blank" rel="noreferrer">
                      Como chegar
                    </a>
                  </Button>
                </div>
              </div>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
