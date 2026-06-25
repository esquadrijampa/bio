/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import Header from './components/Header';
import QuickLinks from './components/QuickLinks';
import ServicesShowcase from './components/ServicesShowcase';
import Differentials from './components/Differentials';
import Footer from './components/Footer';
import { MessageSquare, ArrowUp, Zap } from 'lucide-react';
import { WHATSAPP_API_BASE, WHATSAPP_NUMBER } from './data';
import { trackButtonClick } from './utils/gtm';

export default function App() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 font-sans relative overflow-x-hidden pb-10">
      
      {/* Visual Ambient Auras (Glow effects) */}
      <div className="absolute top-[-10%] left-[-20%] w-[80vw] h-[80vw] sm:w-[50vw] sm:h-[50vw] rounded-full bg-brand-orange/5 blur-[100px] pointer-events-none z-0" />
      <div className="absolute top-[40%] right-[-20%] w-[80vw] h-[80vw] sm:w-[50vw] sm:h-[50vw] rounded-full bg-brand-gold/5 blur-[120px] pointer-events-none z-0" />
      <div className="absolute bottom-[10%] left-[-10%] w-[70vw] h-[70vw] sm:w-[40vw] sm:h-[40vw] rounded-full bg-brand-orange/5 blur-[100px] pointer-events-none z-0" />

      {/* Main Single Column Container (Link-in-Bio Standard Layout) */}
      <div className="relative z-10 w-full max-w-lg mx-auto bg-white sm:border-l sm:border-r sm:border-brand-card-border/80 sm:shadow-[0_4px_30px_rgba(15,23,42,0.06)] min-h-screen flex flex-col">
        
        {/* Top Banner Accent */}
        <div className="h-1.5 w-full bg-gradient-to-r from-brand-orange via-brand-gold to-brand-orange" />

        {/* Header - Brand Presentation */}
        <Header />

        {/* Quick Access CTAs */}
        <QuickLinks />

        {/* Quick Conversion Bar */}
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.4 }}
          className="px-4 py-2 max-w-md mx-auto w-full"
        >
          <div className="flex items-center gap-2 p-3.5 rounded-2xl bg-brand-orange/10 border border-brand-orange/20 text-brand-orange text-xs font-semibold backdrop-blur-md justify-center">
            <Zap className="w-4 h-4 text-brand-orange animate-pulse shrink-0" />
            <span>Sua obra merece o melhor em esquadrias premium.</span>
          </div>
        </motion.div>

        {/* Services Showcase Section */}
        <ServicesShowcase />

        {/* Differentials Block */}
        <Differentials />

        {/* Footer, Contact Info and Social links */}
        <Footer />
      </div>

      {/* Floating Action Buttons */}
      <div className="fixed bottom-6 right-6 z-40 flex flex-col gap-3">
        {/* WhatsApp Sticky Floating Chat Head */}
        <motion.a
          id="floating-whatsapp-btn"
          href={`${WHATSAPP_API_BASE}?phone=${WHATSAPP_NUMBER}&text=Olá!%20Gostaria%20de%20falar%20com%20um%20atendente%20da%20Esquadrijampa.`}
          onClick={() => {
            trackButtonClick({
              buttonId: 'floating-whatsapp-btn',
              buttonText: 'WhatsApp Flutuante',
              buttonUrl: `${WHATSAPP_API_BASE}?phone=${WHATSAPP_NUMBER}&text=Olá!%20Gostaria%20de%20falar%20com%20um%20atendente%20da%20Esquadrijampa.`,
              clickCategory: 'floating_actions'
            });
          }}
          target="_blank"
          rel="noopener noreferrer"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: 'spring', stiffness: 260, damping: 20, delay: 1 }}
          className="p-4 rounded-full bg-emerald-500 hover:bg-emerald-600 text-white shadow-[0_4px_20px_rgba(16,185,129,0.4)] hover:shadow-[0_6px_25px_rgba(16,185,129,0.6)] hover:scale-105 transition-all duration-300 flex items-center justify-center cursor-pointer border border-emerald-400/20"
          aria-label="Fale Conosco"
          title="Falar no WhatsApp"
        >
          <MessageSquare className="w-6 h-6 fill-white" />
        </motion.a>

        {/* Scroll To Top Button */}
        <AnimatePresence>
          {showScrollTop && (
            <motion.button
              id="back-to-top-btn"
              onClick={(e) => {
                trackButtonClick({
                  buttonId: 'back-to-top-btn',
                  buttonText: 'Voltar ao Topo',
                  clickCategory: 'floating_actions'
                });
                scrollToTop();
              }}
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0, opacity: 0 }}
              className="p-3 rounded-full bg-brand-card hover:bg-brand-orange border border-brand-card-border hover:border-brand-orange text-slate-700 hover:text-white shadow-lg transition-all duration-300 flex items-center justify-center cursor-pointer"
              aria-label="Voltar ao Topo"
              title="Voltar ao Topo"
            >
              <ArrowUp className="w-5 h-5" />
            </motion.button>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
