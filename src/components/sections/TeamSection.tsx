"use client";

import React, { useState, useMemo, useRef } from "react";
import { professionalsData } from "@/data/professionalsData";
import { Button } from "@/components/ui/button";
import { UserCircle2, ChevronLeft, ChevronRight } from "lucide-react";

const FILTERS = [
  "Todos",
  "Infantil",
  "Adolescentes",
  "Adultos",
  "Idosos",
  "Casais",
  "TCC",
  "Psicanálise",
  "Neuropsicologia",
  "ABA",
];

export function TeamSection() {
  const [activeFilter, setActiveFilter] = useState("Todos");
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(3); // Default 3
  const sectionRef = useRef<HTMLElement>(null);

  React.useEffect(() => {
    const handleResize = () => {
      setItemsPerPage(window.innerWidth < 768 ? 1 : 3);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const visibleTeam = useMemo(() => {
    return professionalsData.filter(p => {
      // Regra 1: Ocultar quem tem crpPendingConfirmation
      if (p.crpPendingConfirmation) return false;
      // Regra 2: Ocultar suporte dessa lista principal (Barbara, Nicole)
      if (p.isSupport) return false;

      if (activeFilter === "Todos") return true;

      // Lógica de match simples: check in audiences or approaches or specialties
      const matchTerm = activeFilter.toLowerCase();
      const inAudiences = p.audiences.some(a => a.toLowerCase().includes(matchTerm));
      const inApproaches = p.approaches.some(a => a.toLowerCase().includes(matchTerm));
      const inSpecialties = p.specialties.some(s => s.toLowerCase().includes(matchTerm));

      return inAudiences || inApproaches || inSpecialties;
    });
  }, [activeFilter]);

  const totalPages = Math.ceil(visibleTeam.length / itemsPerPage);
  const paginatedTeam = visibleTeam.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

  const handleFilterChange = (filter: string) => {
    setActiveFilter(filter);
    setCurrentPage(1); // Reset page on filter change
  };

  const handlePageChange = (newPage: number) => {
    setCurrentPage(newPage);
  };

  return (
    <section ref={sectionRef} className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mb-12">
          <h2 className="font-serif text-3xl md:text-5xl text-cepap-deep mb-6">
            Especialistas que escutam antes de conduzir.
          </h2>
          <p className="text-lg text-cepap-graphite opacity-80">
            Nossa equipe reúne diferentes abordagens e especialidades para que cada pessoa encontre um cuidado coerente com sua necessidade.
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap gap-2 mb-12">
          {FILTERS.map(filter => (
            <button
              key={filter}
              onClick={() => handleFilterChange(filter)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors border outline-none focus:outline-none ${
                activeFilter === filter 
                  ? "bg-cepap-primary text-white border-cepap-primary" 
                  : "bg-transparent text-cepap-graphite border-cepap-mist hover:border-cepap-primary hover:text-cepap-primary"
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Team Grid (Paginated) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 min-h-[600px] animate-in fade-in duration-700" key={currentPage + activeFilter}>
          {paginatedTeam.length > 0 ? (
            paginatedTeam.map((prof) => (
              <div key={prof.id} className="bg-cepap-white rounded-3xl p-6 border border-cepap-mist shadow-sm flex flex-col group">
                <div className="flex items-center gap-4 mb-6">
                  {prof.imageUrl ? (
                    <img src={prof.imageUrl} alt={prof.name} className="w-16 h-16 rounded-full object-cover" />
                  ) : (
                    <div className="w-16 h-16 rounded-full bg-cepap-mist flex items-center justify-center text-cepap-graphite/50 group-hover:bg-cepap-primary/10 group-hover:text-cepap-primary transition-colors">
                      <UserCircle2 className="w-8 h-8" />
                    </div>
                  )}
                  <div>
                    <h3 className="font-serif text-xl text-cepap-deep leading-tight">{prof.name}</h3>
                    <p className="text-xs text-cepap-graphite opacity-60 mt-1">CRP {prof.crp}</p>
                  </div>
                </div>

                <div className="mb-6 flex-1 space-y-3">
                  <div>
                    <span className="text-xs font-bold text-cepap-graphite uppercase tracking-wider block mb-1">Público</span>
                    <p className="text-sm text-cepap-graphite opacity-80">{prof.audiences.join(", ")}</p>
                  </div>
                  <div>
                    <span className="text-xs font-bold text-cepap-graphite uppercase tracking-wider block mb-1">Especialidades</span>
                    <p className="text-sm text-cepap-graphite opacity-80">{prof.specialties.join(", ")}</p>
                  </div>
                  <div>
                    <span className="text-xs font-bold text-cepap-graphite uppercase tracking-wider block mb-1">Abordagem</span>
                    <p className="text-sm text-cepap-graphite opacity-80">{prof.approaches.join(", ")}</p>
                  </div>
                  {prof.bio && (
                    <div className="pt-2 border-t border-cepap-mist/50">
                      <p className="text-sm text-cepap-graphite/80 leading-relaxed line-clamp-6 hover:line-clamp-none transition-all duration-500">
                        {prof.bio}
                      </p>
                    </div>
                  )}
                </div>

                <Button variant="outline" className="w-full" asChild>
                  <a href={`https://wa.me/551122289233?text=${encodeURIComponent(`Olá, gostaria de agendar um atendimento com o(a) profissional ${prof.name}.`)}`} target="_blank" rel="noreferrer">
                    Agendar com {prof.name.split(" ")[0]}
                  </a>
                </Button>
              </div>
            ))
          ) : (
            <div className="col-span-full py-12 text-center text-cepap-graphite opacity-60">
              Nenhum profissional encontrado para este filtro no momento.
            </div>
          )}
        </div>

        {/* Pagination Controls */}
        {totalPages > 1 && (
          <div className="flex items-center justify-center gap-6 mt-12 pt-8 border-t border-cepap-mist">
            <button 
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
              className="p-3 rounded-full border border-cepap-mist text-cepap-deep hover:bg-cepap-mist/50 disabled:opacity-30 disabled:hover:bg-transparent transition-colors outline-none focus:outline-none"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            
            <span className="text-sm font-medium text-cepap-graphite">
              Página {currentPage} de {totalPages}
            </span>
            
            <button 
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
              className="p-3 rounded-full border border-cepap-mist text-cepap-deep hover:bg-cepap-mist/50 disabled:opacity-30 disabled:hover:bg-transparent transition-colors outline-none focus:outline-none"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        )}

      </div>
    </section>
  );
}
