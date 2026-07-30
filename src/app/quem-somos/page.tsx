import Image from "next/image";
import { ManifestoSection } from "@/components/sections/ManifestoSection";
import { FinalCtaSection } from "@/components/sections/FinalCtaSection";

export default function QuemSomosPage() {
  return (
    <div className="pt-24 min-h-screen bg-cepap-white overflow-hidden">
      {/* Hero Section */}
      <section className="py-24 relative">
        {/* Subtle background decoration */}
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-cepap-mist/30 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 z-0"></div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            {/* Text Content */}
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 mb-6 opacity-80">
                <span className="w-8 h-[1px] bg-cepap-primary"></span>
                <span className="text-sm font-medium text-cepap-primary uppercase tracking-wider">
                  Nossa História
                </span>
              </div>
              
              <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-cepap-deep mb-8 leading-tight">
                Um espaço dedicado à <br className="hidden md:block" />
                <span className="text-cepap-primary">escuta</span> e <span className="text-cepap-accent-1">transformação</span>.
              </h1>
              
              <div className="space-y-6 text-lg text-cepap-graphite/90 leading-relaxed font-light">
                <p>
                  Desde 2014, a <strong className="font-medium text-cepap-deep">CEPAP — Centro Paulista de Psicologia</strong> se dedica a ser mais do que uma clínica, mas um ambiente seguro onde cada pessoa pode se reencontrar e florescer.
                </p>
                <p>
                  Acreditamos que o cuidado com a saúde mental deve ser acessível, ético e profundamente humano. Por isso, construímos um espaço onde o cuidado acontece em camadas, respeitando a subjetividade e a história de cada um.
                </p>
                <p>
                  Nossa equipe interdisciplinar trabalha em sinergia constante, oferecendo um acompanhamento completo para todas as idades, porque sabemos que <em>você não precisa enfrentar tudo sozinho</em>.
                </p>
              </div>
            </div>

            {/* Image Content */}
            <div className="relative">
              <div className="relative w-full aspect-square rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-white group">
                <Image 
                  src="/quem-somos-amor.png" 
                  alt="Não se esqueça de se amar todos os dias. Centro Paulista de Psicologia" 
                  fill 
                  className="object-contain md:object-cover object-center transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority
                />
              </div>
              {/* Floating accent card */}
              <div className="absolute -bottom-8 -left-8 bg-white p-6 rounded-2xl shadow-xl border border-cepap-mist max-w-[280px] hidden md:block">
                <p className="font-serif text-xl text-cepap-deep leading-tight mb-2">O cuidado em camadas</p>
                <p className="text-sm text-cepap-graphite/80">Estética, clínica e editorial. A excelência no atendimento pautado pela ciência e empatia.</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Reusing Manifesto for brand reinforcement */}
      <ManifestoSection />
      
      {/* Final CTA */}
      <div className="content-auto">
        <FinalCtaSection />
      </div>
    </div>
  );
}
