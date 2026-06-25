/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { SERVICES_DATA, WHATSAPP_API_BASE, WHATSAPP_NUMBER } from '../data';
import { Grid, MessageSquare, ChevronRight } from 'lucide-react';
import { trackButtonClick } from '../utils/gtm';

import imgBriseRipado from '../assets/images/project_brise_ripado_1782318999919.jpg';
import imgJanelaMaximar from '../assets/images/project_janela_maximar_1782319028030.jpg';
import imgPortaCorrer from '../assets/images/project_porta_de_correr_1782318984510.jpg';
import imgPeleVidro from '../assets/images/project_pele_de_vidro_1782318971334.jpg';
import imgVidroTemperado from '../assets/images/project_vidro_temperado_1782319966784.jpg';

const CATEGORIES = [
  { id: 'all', label: 'Todos', icon: Grid },
  { id: 'janelas', label: 'Janelas', icon: ChevronRight },
  { id: 'portas', label: 'Portas', icon: ChevronRight },
  { id: 'fachadas', label: 'Fachadas', icon: ChevronRight },
  { id: 'vidros', label: 'Vidros', icon: ChevronRight },
];

const CATEGORY_IMAGES: Record<string, { src: string; alt: string; badge: string }> = {
  all: {
    src: imgBriseRipado,
    alt: 'Brises e Ripados de Alumínio Premium',
    badge: 'Destaque: Ripados & Brises'
  },
  janelas: {
    src: imgJanelaMaximar,
    alt: 'Janela Maxim-Ar de Alumínio Preto',
    badge: 'Linhas Suprema & Gold'
  },
  portas: {
    src: imgPortaCorrer,
    alt: 'Porta de Correr Minimalista Premium',
    badge: 'Grandes Vãos & Suavidade'
  },
  fachadas: {
    src: imgPeleVidro,
    alt: 'Fachada em Pele de Vidro Estrutural',
    badge: 'Glazing & ACM'
  },
  vidros: {
    src: imgVidroTemperado,
    alt: 'Projetos em Vidro Temperado de Segurança',
    badge: 'Alta Resistência'
  }
};

export default function ServicesShowcase() {
  const [activeTab, setActiveTab] = useState<string>('all');

  const filteredServices = activeTab === 'all'
    ? SERVICES_DATA
    : SERVICES_DATA.filter((s) => s.category === activeTab);

  const currentBanner = CATEGORY_IMAGES[activeTab] || CATEGORY_IMAGES.all;

  return (
    <section id="services" className="w-full max-w-md mx-auto px-4 py-8">
      {/* Section Title */}
      <div className="flex flex-col items-center mb-6">
        <h2 className="font-display font-extrabold text-xl text-slate-900 tracking-tight flex items-center gap-2">
          Nossos Serviços
        </h2>
        <div className="w-12 h-1 bg-brand-orange mt-2 rounded-full" />
        <p className="text-slate-500 text-xs mt-2 text-center">
          Clique nas categorias para explorar soluções sob medida
        </p>
      </div>

      {/* Category Tabs Scroll */}
      <div className="flex items-center gap-2 overflow-x-auto pb-3 scrollbar-none scroll-smooth -mx-4 px-4 mb-4">
        {CATEGORIES.map((cat) => {
          const isActive = activeTab === cat.id;
          return (
            <button
              key={cat.id}
              onClick={() => {
                setActiveTab(cat.id);
                trackButtonClick({
                  buttonId: `category-tab-${cat.id}`,
                  buttonText: `Filtrar Categoria: ${cat.label}`,
                  clickCategory: 'services_navigation'
                });
              }}
              className={`px-4 py-2 rounded-full text-xs font-semibold whitespace-nowrap transition-all duration-300 flex items-center gap-1.5 cursor-pointer border ${
                isActive
                  ? 'bg-brand-orange text-white border-brand-orange shadow-md shadow-brand-orange/25'
                  : 'bg-slate-50 text-slate-600 border-slate-200 hover:text-brand-orange hover:bg-slate-100 shadow-xs'
              }`}
            >
              <span>{cat.label}</span>
            </button>
          );
        })}
      </div>

      {/* Dynamic Visual Banner */}
      <div className="relative h-48 w-full rounded-2xl overflow-hidden mb-6 border border-brand-card-border/80 bg-brand-card group">
        <AnimatePresence mode="wait">
          <motion.img
            key={activeTab}
            src={currentBanner.src}
            alt={currentBanner.alt}
            referrerPolicy="no-referrer"
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.45 }}
            className="absolute inset-0 w-full h-full object-cover"
          />
        </AnimatePresence>
        
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
        
        {/* Banner Details */}
        <div className="absolute bottom-4 left-4 right-4 flex flex-col items-start">
          <span className="inline-block text-[9px] uppercase tracking-wider font-mono bg-brand-orange text-white font-bold px-2 py-0.5 rounded-md mb-1.5 shadow-sm">
            {currentBanner.badge}
          </span>
          <h3 className="text-sm font-display font-bold text-white tracking-tight text-shadow-premium">
            {currentBanner.alt}
          </h3>
        </div>
      </div>

      {/* Services List Grid */}
      <div className="flex flex-col gap-3.5">
        <AnimatePresence mode="popLayout">
          {filteredServices.map((service, idx) => {
            const categoryLabel = CATEGORIES.find(c => c.id === service.category)?.label || '';
            const whatsappUrl = `${WHATSAPP_API_BASE}?phone=${WHATSAPP_NUMBER}&text=${encodeURIComponent(service.whatsappMessage)}`;

            return (
              <motion.div
                key={service.id}
                layout
                initial={{ opacity: 0, scale: 0.95, y: 15 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: -10 }}
                transition={{ duration: 0.35, ease: 'easeOut' }}
                className="p-4 rounded-2xl bg-slate-50 border border-slate-200 hover:border-brand-orange/30 hover:bg-slate-100/60 transition-all duration-300 group shadow-xs"
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    {/* Badge Category */}
                    <span className="inline-block text-[10px] uppercase tracking-wider font-mono text-brand-orange font-bold px-2 py-0.5 rounded bg-brand-orange/10 mb-2">
                      {categoryLabel}
                    </span>
                    <h3 className="font-display font-bold text-[15px] text-slate-800 group-hover:text-brand-orange transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-slate-500 text-xs leading-relaxed mt-1.5 font-sans">
                      {service.description}
                    </p>
                  </div>
                </div>

                {/* Card Actions */}
                <div className="mt-4 pt-3.5 border-t border-slate-200/80 flex items-center justify-between gap-2">
                  <span className="text-[10px] text-slate-500 flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                    Consulte Orçamento Grátis
                  </span>

                  <a
                    id={`service-cta-${service.id}`}
                    href={whatsappUrl}
                    onClick={() => {
                      trackButtonClick({
                        buttonId: `service-cta-${service.id}`,
                        buttonText: `Solicitar Preço - ${service.title}`,
                        buttonUrl: whatsappUrl,
                        clickCategory: 'service_quote_clicks'
                      });
                    }}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-white hover:bg-brand-orange/10 border border-brand-orange/20 hover:border-brand-orange text-brand-orange text-xs font-semibold transition-all duration-300 hover:scale-[1.02] cursor-pointer shadow-xs"
                  >
                    <MessageSquare className="w-3.5 h-3.5" />
                    <span>Solicitar Preço</span>
                  </a>
                </div>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>
    </section>
  );
}
