"use client";

import React, { useState } from "react";
import { faqData } from "@/data/faqData";
import { ChevronDown } from "lucide-react";

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleItem = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="font-serif text-3xl md:text-5xl text-cepap-deep mb-6">
            Dúvidas antes do primeiro contato
          </h2>
        </div>

        <div className="space-y-4">
          {faqData.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div 
                key={faq.id} 
                className={`border rounded-2xl transition-colors duration-300 ${isOpen ? "border-cepap-primary bg-cepap-primary/5" : "border-cepap-mist hover:border-cepap-accent-1"}`}
              >
                <button
                  className="w-full flex items-center justify-between p-6 text-left"
                  onClick={() => toggleItem(index)}
                  aria-expanded={isOpen}
                >
                  <span className="font-serif text-xl text-cepap-deep pr-8">{faq.question}</span>
                  <ChevronDown className={`w-5 h-5 text-cepap-primary transform transition-transform duration-300 shrink-0 ${isOpen ? "rotate-180" : ""}`} />
                </button>
                
                <div 
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}
                >
                  <div className="p-6 pt-0 text-cepap-graphite opacity-80 leading-relaxed">
                    {faq.answer}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
