"use client";

import React, { useState } from "react";
import { siteData } from "@/data/siteData";
import { Button } from "@/components/ui/button";

export default function ContatoPage() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    unit: "",
    type: "",
    period: "",
    message: "",
    agreed: false
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.agreed) return;

    // Build whatsapp message
    const text = `Olá, meu nome é ${formData.name}. Gostaria de informações sobre atendimento (${formData.type}) na unidade ${formData.unit || "a definir"}. Melhor período: ${formData.period}. ${formData.message}`;
    const url = `https://wa.me/551122289233?text=${encodeURIComponent(text)}`;
    window.open(url, "_blank");
  };

  return (
    <div className="pt-32 pb-24 min-h-screen bg-cepap-mist/10">
      <div className="container mx-auto px-6 max-w-3xl">
        <h1 className="font-serif text-4xl md:text-5xl text-cepap-deep mb-6">Entre em contato</h1>
        <p className="text-lg text-cepap-graphite/80 mb-12">
          Preencha o formulário abaixo para nos ajudar a entender sua necessidade inicial. 
          Nossa equipe retornará o contato o mais breve possível.
        </p>

        <form onSubmit={handleSubmit} className="bg-white p-8 md:p-12 rounded-3xl shadow-sm border border-cepap-mist space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label htmlFor="name" className="text-sm font-medium text-cepap-deep">Nome completo</label>
              <input required type="text" id="name" className="w-full px-4 py-3 rounded-xl border border-cepap-mist focus:border-cepap-primary focus:ring-1 focus:ring-cepap-primary outline-none transition-all" value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})} />
            </div>
            <div className="space-y-2">
              <label htmlFor="phone" className="text-sm font-medium text-cepap-deep">Telefone / WhatsApp</label>
              <input required type="tel" id="phone" className="w-full px-4 py-3 rounded-xl border border-cepap-mist focus:border-cepap-primary focus:ring-1 focus:ring-cepap-primary outline-none transition-all" value={formData.phone} onChange={e => setFormData({...formData, phone: e.target.value})} />
            </div>
          </div>

          <div className="space-y-2">
            <label htmlFor="email" className="text-sm font-medium text-cepap-deep">E-mail (opcional)</label>
            <input type="email" id="email" className="w-full px-4 py-3 rounded-xl border border-cepap-mist focus:border-cepap-primary focus:ring-1 focus:ring-cepap-primary outline-none transition-all" value={formData.email} onChange={e => setFormData({...formData, email: e.target.value})} />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="space-y-2">
              <label htmlFor="unit" className="text-sm font-medium text-cepap-deep">Unidade</label>
              <select id="unit" className="w-full px-4 py-3 rounded-xl border border-cepap-mist bg-white outline-none" value={formData.unit} onChange={e => setFormData({...formData, unit: e.target.value})}>
                <option value="">Selecione...</option>
                {siteData.locations.filter(l => !l.pendingConfirmation).map(l => (
                  <option key={l.id} value={l.name}>{l.name}</option>
                ))}
                <option value="Online">Atendimento Online</option>
              </select>
            </div>
            <div className="space-y-2">
              <label htmlFor="type" className="text-sm font-medium text-cepap-deep">Atendimento para</label>
              <select id="type" className="w-full px-4 py-3 rounded-xl border border-cepap-mist bg-white outline-none" value={formData.type} onChange={e => setFormData({...formData, type: e.target.value})}>
                <option value="">Selecione...</option>
                <option value="Adulto">Adulto</option>
                <option value="Criança">Criança</option>
                <option value="Adolescente">Adolescente</option>
                <option value="Empresa">Empresa</option>
              </select>
            </div>
            <div className="space-y-2">
              <label htmlFor="period" className="text-sm font-medium text-cepap-deep">Melhor horário</label>
              <select id="period" className="w-full px-4 py-3 rounded-xl border border-cepap-mist bg-white outline-none" value={formData.period} onChange={e => setFormData({...formData, period: e.target.value})}>
                <option value="">Selecione...</option>
                <option value="Manhã">Manhã</option>
                <option value="Tarde">Tarde</option>
                <option value="Noite">Noite</option>
              </select>
            </div>
          </div>

          <div className="space-y-2">
            <label htmlFor="message" className="text-sm font-medium text-cepap-deep">Mensagem (opcional)</label>
            <textarea id="message" rows={4} className="w-full px-4 py-3 rounded-xl border border-cepap-mist focus:border-cepap-primary focus:ring-1 focus:ring-cepap-primary outline-none transition-all resize-none" value={formData.message} onChange={e => setFormData({...formData, message: e.target.value})}></textarea>
            <p className="text-xs text-cepap-accent-1 mt-1 font-medium">
              Para proteger sua privacidade, não envie informações clínicas sensíveis por este formulário.
            </p>
          </div>

          <div className="flex items-start gap-3 pt-2">
            <input required type="checkbox" id="agreed" className="mt-1" checked={formData.agreed} onChange={e => setFormData({...formData, agreed: e.target.checked})} />
            <label htmlFor="agreed" className="text-sm text-cepap-graphite/80 leading-snug">
              Concordo com a <a href="/politica-de-privacidade" className="text-cepap-primary hover:underline">Política de Privacidade</a> e entendo que serei direcionado ao WhatsApp da clínica para prosseguir com o agendamento.
            </label>
          </div>

          <Button type="submit" size="lg" className="w-full mt-4" disabled={!formData.agreed}>
            Enviar e abrir WhatsApp
          </Button>
        </form>
      </div>
    </div>
  );
}
