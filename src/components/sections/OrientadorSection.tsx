"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Info } from "lucide-react";

type OptionType = {
  id: string;
  label: string;
  recommendation: {
    title: string;
    description: string;
    link: string;
  };
};

const options: OptionType[] = [
  {
    id: "para-mim",
    label: "Estou buscando atendimento para mim.",
    recommendation: {
      title: "Psicoterapia para Adultos",
      description: "Um espaço seguro para lidar com ansiedade, autoconhecimento e desafios na vida pessoal e profissional. Indicamos conversar com nossa equipe para encontrar o profissional com a abordagem mais adequada para você.",
      link: "/especialidades/psicoterapia-adultos"
    }
  },
  {
    id: "filho",
    label: "Preciso de atendimento para meu filho.",
    recommendation: {
      title: "Psicoterapia Infantil",
      description: "Atendimento lúdico e respeitoso para auxiliar crianças no desenvolvimento emocional. Se houver suspeita de TEA ou TDAH, nossos especialistas também realizam Avaliação Neuropsicológica e Terapia ABA.",
      link: "/especialidades/psicoterapia-infantil"
    }
  },
  {
    id: "adolescente",
    label: "Procuro atendimento para um adolescente.",
    recommendation: {
      title: "Psicoterapia para Adolescentes",
      description: "Apoio emocional para jovens lidarem com questões de identidade, relações e escolhas. Oferecemos também Orientação Profissional.",
      link: "/especialidades/psicoterapia-adolescentes"
    }
  },
  {
    id: "avaliacao",
    label: "Preciso de uma avaliação.",
    recommendation: {
      title: "Avaliação Psicológica e Neuropsicológica",
      description: "Realizamos avaliações neuropsicológicas completas para diagnóstico (como TEA e TDAH) e avaliações psicológicas para cirurgia bariátrica.",
      link: "/especialidades/neuropsicologia"
    }
  },
  {
    id: "empresa",
    label: "Quero apoio para minha empresa.",
    recommendation: {
      title: "Saúde Mental nas Empresas",
      description: "Ações corporativas, palestras e treinamentos para promover o bem-estar organizacional e desenvolvimento de lideranças.",
      link: "/especialidades/palestras-empresas"
    }
  },
  {
    id: "orientacao",
    label: "Quero orientação profissional.",
    recommendation: {
      title: "Orientação Profissional",
      description: "Auxílio estruturado na escolha de carreira, transição profissional e alinhamento de propósito no trabalho.",
      link: "/especialidades/orientacao-profissional"
    }
  },
  {
    id: "nao-sei",
    label: "Ainda não sei qual atendimento escolher.",
    recommendation: {
      title: "Acolhimento Inicial",
      description: "Não se preocupe em ter essa resposta agora. Converse com nossa equipe, conte um pouco sobre o que está buscando e nós ajudaremos a indicar o caminho mais adequado.",
      link: "/contato"
    }
  }
];

export function OrientadorSection() {
  const [selectedId, setSelectedId] = useState<string | null>(null);
  
  const selectedOption = options.find(o => o.id === selectedId);

  return (
    <section id="orientador" className="py-24 bg-cepap-white">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="font-serif text-3xl md:text-5xl text-cepap-deep mb-6">
            Por onde o seu cuidado pode começar?
          </h2>
          <p className="text-lg text-cepap-graphite opacity-80 max-w-2xl mx-auto">
            Você não precisa saber o nome exato do atendimento. Conte apenas o que está procurando e nós ajudamos a indicar um caminho inicial.
          </p>
        </div>

        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-cepap-mist flex flex-col md:flex-row gap-12">
          
          <div className="flex-1 flex flex-col gap-3">
            {options.map((option) => (
              <div key={option.id} className="flex flex-col">
                <button
                  onClick={() => setSelectedId(option.id)}
                  className={`text-left px-6 py-4 rounded-xl transition-all duration-300 border outline-none focus:outline-none ${
                    selectedId === option.id 
                      ? "border-cepap-primary bg-cepap-primary/5 text-cepap-deep font-medium shadow-sm" 
                      : "border-transparent bg-cepap-mist/30 text-cepap-graphite hover:bg-cepap-mist hover:text-cepap-deep"
                  }`}
                >
                  {option.label}
                </button>

                {/* Mobile Result (Accordion style) */}
                <div 
                  className={`md:hidden overflow-hidden transition-all duration-500 ease-in-out ${
                    selectedId === option.id ? "max-h-[500px] mt-4 opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="bg-cepap-mist/10 p-6 rounded-xl border border-cepap-mist/50">
                    <h3 className="font-serif text-xl text-cepap-deep mb-3">
                      {option.recommendation.title}
                    </h3>
                    <p className="text-sm text-cepap-graphite opacity-80 mb-6 leading-relaxed">
                      {option.recommendation.description}
                    </p>
                    <Button asChild size="sm" className="w-full outline-none focus:outline-none">
                      <a href="/contato" className="outline-none focus:outline-none">Falar com a equipe</a>
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Desktop Result */}
          <div className="hidden md:flex flex-1 outline-none focus:outline-none" tabIndex={-1}>
            {selectedOption ? (
              <div className="h-full flex flex-col justify-center animate-in fade-in slide-in-from-right-4 duration-500 outline-none focus:outline-none" tabIndex={-1}>
                <div className="w-12 h-12 rounded-full bg-cepap-accent-2/50 flex items-center justify-center mb-6">
                  <ArrowRight className="text-cepap-primary w-6 h-6" />
                </div>
                <h3 className="font-serif text-2xl text-cepap-deep mb-4">
                  {selectedOption.recommendation.title}
                </h3>
                <p className="text-cepap-graphite opacity-80 mb-8 leading-relaxed">
                  {selectedOption.recommendation.description}
                </p>
                <div className="mt-auto">
                  <Button asChild className="w-full sm:w-auto outline-none focus:outline-none">
                    <a href="/contato" className="outline-none focus:outline-none">Falar com a equipe</a>
                  </Button>
                </div>
              </div>
            ) : (
              <div className="h-full flex flex-col items-center justify-center text-center p-8 bg-cepap-mist/20 rounded-2xl outline-none focus:outline-none" tabIndex={-1}>
                <p className="text-cepap-graphite opacity-50">
                  Selecione uma opção ao lado para receber uma indicação inicial.
                </p>
              </div>
            )}
          </div>
          
        </div>
      </div>
    </section>
  );
}
