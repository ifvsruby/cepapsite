"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { siteData } from "@/data/siteData";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setIsScrolled(window.scrollY > 20);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-cepap-white/80 backdrop-blur-md py-3 shadow-sm"
          : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group z-50">
          <img src="/logo.png" alt="CEPAP Logo" className="h-12 w-auto transition-transform group-hover:scale-105" />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <Link href="/" className="text-sm font-medium text-cepap-graphite hover:text-cepap-primary transition-colors">
            Início
          </Link>
          <div className="relative group">
            <button className="flex items-center gap-1 text-sm font-medium text-cepap-graphite hover:text-cepap-primary transition-colors py-2">
              Especialidades <ChevronDown className="w-4 h-4" />
            </button>
            {/* Mega Menu Dropdown */}
            <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-[600px] bg-white rounded-2xl shadow-xl border border-cepap-mist opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 grid grid-cols-2 p-6 gap-6">
              <div>
                <h3 className="font-serif font-medium text-cepap-deep mb-3 text-lg border-b border-cepap-mist pb-2">Por Público</h3>
                <ul className="space-y-3">
                  <li><Link href="/especialidades/psicoterapia-infantil" className="text-sm text-cepap-graphite hover:text-cepap-primary">Infantil</Link></li>
                  <li><Link href="/especialidades/psicoterapia-adolescentes" className="text-sm text-cepap-graphite hover:text-cepap-primary">Adolescentes</Link></li>
                  <li><Link href="/especialidades/psicoterapia-adultos" className="text-sm text-cepap-graphite hover:text-cepap-primary">Adultos e Casais</Link></li>
                  <li><Link href="/especialidades/palestras-empresas" className="text-sm text-cepap-graphite hover:text-cepap-primary">Empresas</Link></li>
                </ul>
              </div>
              <div>
                <h3 className="font-serif font-medium text-cepap-deep mb-3 text-lg border-b border-cepap-mist pb-2">Especializados</h3>
                <ul className="space-y-3">
                  <li><Link href="/especialidades/neuropsicologia" className="text-sm text-cepap-graphite hover:text-cepap-primary">Neuropsicologia</Link></li>
                  <li><Link href="/especialidades/terapia-aba" className="text-sm text-cepap-graphite hover:text-cepap-primary">Terapia ABA</Link></li>
                  <li><Link href="/especialidades/psicopedagogia" className="text-sm text-cepap-graphite hover:text-cepap-primary">Psicopedagogia</Link></li>
                  <li><Link href="/especialidades/psiquiatria" className="text-sm text-cepap-graphite hover:text-cepap-primary">Psiquiatria</Link></li>
                </ul>
              </div>
            </div>
          </div>
          <Link href="/equipe" className="text-sm font-medium text-cepap-graphite hover:text-cepap-primary transition-colors">
            Equipe
          </Link>
          <Link href="/quem-somos" className="text-sm font-medium text-cepap-graphite hover:text-cepap-primary transition-colors">
            Quem Somos
          </Link>
          <Link href="/unidades" className="text-sm font-medium text-cepap-graphite hover:text-cepap-primary transition-colors">
            Unidades
          </Link>
        </nav>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-4">
          <Button asChild>
            <a href={siteData.contacts.whatsappLink} target="_blank" rel="noreferrer">
              Agendar atendimento
            </a>
          </Button>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden p-2 bg-white/90 backdrop-blur-md rounded-xl shadow-sm border border-cepap-mist text-cepap-deep z-50"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle Menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 bg-white z-40 flex flex-col pt-24 px-6 transition-transform duration-300 ease-in-out md:hidden ${
          mobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <nav className="flex flex-col gap-6 text-lg font-medium text-cepap-deep">
          <Link href="/" onClick={() => setMobileMenuOpen(false)}>Início</Link>
          <Link href="/especialidades" onClick={() => setMobileMenuOpen(false)}>Especialidades</Link>
          <Link href="/equipe" onClick={() => setMobileMenuOpen(false)}>Equipe</Link>
          <Link href="/quem-somos" onClick={() => setMobileMenuOpen(false)}>Quem Somos</Link>
          <Link href="/unidades" onClick={() => setMobileMenuOpen(false)}>Unidades</Link>
        </nav>
        
        <div className="mt-12 flex flex-col gap-4">
          <Button asChild size="lg" className="w-full">
            <a href={siteData.contacts.whatsappLink} target="_blank" rel="noreferrer">
              Falar pelo WhatsApp
            </a>
          </Button>
        </div>
      </div>
    </header>
  );
}
