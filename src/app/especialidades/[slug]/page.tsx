import { servicesData } from "@/data/servicesData";
import { notFound } from "next/navigation";
import { Button } from "@/components/ui/button";
import { siteData } from "@/data/siteData";

export function generateStaticParams() {
  return servicesData.map((service) => ({
    slug: service.slug,
  }));
}

export default async function EspecialidadePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = servicesData.find((s) => s.slug === slug);

  if (!service) {
    notFound();
  }

  return (
    <div className="pt-32 pb-24 bg-white min-h-screen">
      <div className="container mx-auto px-6 max-w-4xl">
        <h1 className="font-serif text-4xl md:text-5xl text-cepap-deep mb-6">{service.title}</h1>
        <p className="text-xl text-cepap-primary mb-12">{service.audience}</p>
        
        <div className="prose prose-lg prose-p:text-cepap-graphite/80 prose-headings:font-serif prose-headings:text-cepap-deep">
          <p className="text-xl leading-relaxed mb-8">{service.description}</p>
          
          <h2>Como funciona</h2>
          <p>
            Na CEPAP, o acompanhamento começa sempre com uma escuta cuidadosa. 
            Nosso objetivo não é aplicar fórmulas prontas, mas entender o contexto 
            e as necessidades únicas de cada pessoa.
          </p>
          
          <div className="bg-cepap-mist/20 p-8 rounded-2xl mt-12 border border-cepap-mist">
            <h3 className="font-serif text-2xl text-cepap-deep mb-4">Pronto para dar o primeiro passo?</h3>
            <p className="text-cepap-graphite/80 mb-6">
              Converse com nossa equipe para agendar seu atendimento ou tirar dúvidas sobre esta especialidade.
            </p>
            <Button asChild size="lg">
              <a href={siteData.contacts.whatsappLink} target="_blank" rel="noreferrer">
                Falar com a equipe
              </a>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
