/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { MessageSquare, PhoneCall, Image, Globe } from 'lucide-react';
import { WHATSAPP_API_BASE, WHATSAPP_NUMBER, INSTAGRAM_HANDLE } from '../data';
import { trackButtonClick } from '../utils/gtm';

export default function QuickLinks() {
  const links = [
    {
      id: 'orcamento',
      label: 'Solicitar Orçamento',
      subtitle: 'Atendimento rápido via WhatsApp',
      url: `${WHATSAPP_API_BASE}?phone=${WHATSAPP_NUMBER}&text=Olá!%20Gostaria%20de%20solicitar%20um%20orçamento%20para%20minha%20obra.`,
      icon: MessageSquare,
      highlight: true,
      action: null
    },
    {
      id: 'especialista',
      label: 'Falar com Especialista',
      subtitle: 'Tire suas dúvidas técnicas sobre esquadrias',
      url: `${WHATSAPP_API_BASE}?phone=${WHATSAPP_NUMBER}&text=Olá!%20Gostaria%20de%20falar%20com%20um%20especialista%20técnico%20sobre%20as%20esquadrias.`,
      icon: PhoneCall,
      highlight: false,
      action: null
    },
    {
      id: 'website',
      label: 'Acesse Nosso Site',
      subtitle: 'Conheça nosso catálogo e portfólio completo',
      url: 'https://esquadrijampa.com.br',
      icon: Globe,
      highlight: false,
      action: null
    }
  ];

  return (
    <section className="w-full max-w-md mx-auto px-4 py-4 flex flex-col gap-3.5">
      {links.map((link, idx) => {
        const Icon = link.icon;
        return (
          <motion.a
            key={link.id}
            id={`quick-link-${link.id}`}
            href={link.url}
            onClick={(e) => {
              trackButtonClick({
                buttonId: `quick-link-${link.id}`,
                buttonText: link.label,
                buttonUrl: link.url,
                clickCategory: 'quick_links'
              });
              if (link.action) {
                (link.action as Function)(e);
              }
            }}
            target={link.url.startsWith('#') ? undefined : '_blank'}
            rel={link.url.startsWith('#') ? undefined : 'noopener noreferrer'}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 + idx * 0.1, duration: 0.4 }}
            className={`relative flex items-center justify-between p-4 rounded-2xl border transition-all duration-300 select-none group cursor-pointer ${
              link.highlight
                ? 'bg-gradient-to-r from-brand-orange to-brand-orange-hover text-white border-transparent shadow-[0_4px_20px_rgba(232,122,42,0.2)] hover:shadow-[0_6px_25px_rgba(232,122,42,0.3)] scale-[1.02]'
                : 'bg-slate-50 text-slate-800 border-slate-200 hover:border-brand-orange/40 hover:bg-slate-100/70 shadow-sm'
            }`}
          >
            <div className="flex items-center gap-3.5">
              {/* Icon container */}
              <div
                className={`p-2.5 rounded-xl transition-colors duration-300 ${
                  link.highlight
                    ? 'bg-white/10 text-white'
                    : 'bg-white text-brand-orange border border-slate-200 group-hover:bg-brand-orange group-hover:text-white group-hover:border-transparent'
                }`}
              >
                <Icon className="w-5 h-5" />
              </div>

              {/* Text content */}
              <div className="flex flex-col items-start text-left">
                <span className="font-display font-bold text-[15px] tracking-tight">
                  {link.label}
                </span>
                <span
                  className={`text-[11px] font-sans mt-0.5 ${
                    link.highlight ? 'text-white/80' : 'text-slate-500 group-hover:text-slate-600'
                  }`}
                >
                  {link.subtitle}
                </span>
              </div>
            </div>

            {/* Accent arrow indicator */}
            <div
              className={`text-lg transform transition-transform duration-300 group-hover:translate-x-1 shrink-0 ${
                link.highlight ? 'text-white/80' : 'text-brand-orange/60 group-hover:text-brand-orange'
              }`}
            >
              →
            </div>
          </motion.a>
        );
      })}
    </section>
  );
}
