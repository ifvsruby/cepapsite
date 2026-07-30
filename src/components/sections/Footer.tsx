import React from "react";
import Link from "next/link";
import { siteData } from "@/data/siteData";

const Instagram = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
);

const Facebook = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
  </svg>
);

const Linkedin = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
    <rect x="2" y="9" width="4" height="12"></rect>
    <circle cx="4" cy="4" r="2"></circle>
  </svg>
);

export function Footer() {
  return (
    <footer className="bg-cepap-deep text-cepap-mist py-16 mt-20">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        {/* Brand Col */}
        <div className="flex flex-col gap-6">
          <Link href="/" className="flex items-center gap-2 group">
            <img src="/logo.png" alt="CEPAP Logo" className="h-12 w-auto" />
          </Link>
          <p className="text-sm opacity-80 max-w-sm mb-4">
            {siteData.positioning}
          </p>
          <div className="flex gap-4">
            <a href="https://www.instagram.com/cepapsicologiaoficial" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-cepap-primary transition-colors text-white">
              <Instagram className="w-5 h-5" />
            </a>
            <a href="https://www.facebook.com/cepapsi/?locale=pt_BR" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-cepap-primary transition-colors text-white">
              <Facebook className="w-5 h-5" />
            </a>
            <a href="https://br.linkedin.com/company/cepapsicologia" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-cepap-primary transition-colors text-white">
              <Linkedin className="w-5 h-5" />
            </a>
          </div>
        </div>

        {/* Links Col 1 */}
        <div className="flex flex-col gap-4">
          <h4 className="font-serif font-medium text-white text-lg">Sobre</h4>
          <Link href="/quem-somos" className="text-sm hover:text-white transition-colors opacity-80 hover:opacity-100">Quem Somos</Link>
          <Link href="/equipe" className="text-sm hover:text-white transition-colors opacity-80 hover:opacity-100">Equipe</Link>
          <Link href="/unidades" className="text-sm hover:text-white transition-colors opacity-80 hover:opacity-100">Nossas Unidades</Link>
        </div>

        {/* Links Col 2 */}
        <div className="flex flex-col gap-4">
          <h4 className="font-serif font-medium text-white text-lg">Especialidades</h4>
          <Link href="/especialidades/psicoterapia-adultos" className="text-sm hover:text-white transition-colors opacity-80 hover:opacity-100">Psicoterapia para Adultos</Link>
          <Link href="/especialidades/psicoterapia-infantil" className="text-sm hover:text-white transition-colors opacity-80 hover:opacity-100">Psicologia Infantil</Link>
          <Link href="/especialidades/neuropsicologia" className="text-sm hover:text-white transition-colors opacity-80 hover:opacity-100">Neuropsicologia</Link>
          <Link href="/especialidades/terapia-aba" className="text-sm hover:text-white transition-colors opacity-80 hover:opacity-100">Terapia ABA</Link>
        </div>

        {/* Contact Col */}
        <div className="flex flex-col gap-4">
          <h4 className="font-serif font-medium text-white text-lg">Contato</h4>
          <p className="text-sm opacity-80">
            WhatsApp: <a href={siteData.contacts.whatsappLink} className="hover:text-white transition-colors">{siteData.contacts.whatsapp}</a>
          </p>
          <p className="text-sm opacity-80">
            Telefone: {siteData.contacts.phoneMain}
          </p>
          <p className="text-sm opacity-80">
            {siteData.contacts.email}
          </p>
          <div className="mt-2">
            <h5 className="font-medium text-sm text-white mb-2">Horário de Atendimento</h5>
            <p className="text-sm opacity-80">{siteData.hours.weekdays}</p>
            <p className="text-sm opacity-80">{siteData.hours.saturday}</p>
          </div>
        </div>
      </div>
      
      <div className="container mx-auto px-6 mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm opacity-60">
          © {new Date().getFullYear()} {siteData.legalName}. Todos os direitos reservados.
        </p>
        <div className="flex gap-4">
          <Link href="/politica-de-privacidade" className="text-sm opacity-60 hover:opacity-100 transition-opacity">
            Política de Privacidade
          </Link>
          <Link href="/acessibilidade" className="text-sm opacity-60 hover:opacity-100 transition-opacity">
            Acessibilidade
          </Link>
        </div>
      </div>
    </footer>
  );
}
