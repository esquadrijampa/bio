/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Share2, MapPin, CheckCircle, Copy, Check } from 'lucide-react';
import { LOGO_URL, INSTAGRAM_HANDLE } from '../data';
import { trackButtonClick } from '../utils/gtm';

export default function Header() {
  const [showToast, setShowToast] = useState(false);

  const handleShare = async () => {
    trackButtonClick({
      buttonId: 'header-share-btn',
      buttonText: 'Compartilhar link',
      buttonUrl: window.location.href,
      clickCategory: 'header_actions'
    });

    try {
      await navigator.clipboard.writeText(window.location.href);
      setShowToast(true);
      setTimeout(() => setShowToast(false), 2500);
    } catch (err) {
      // Fallback if clipboard API is blocked in iframe
      const el = document.createElement('input');
      el.value = window.location.href;
      document.body.appendChild(el);
      el.select();
      document.execCommand('copy');
      document.body.removeChild(el);
      setShowToast(true);
      setTimeout(() => setShowToast(false), 2500);
    }
  };

  return (
    <header className="relative flex flex-col items-center text-center pt-8 pb-4 px-4 max-w-md mx-auto">
      {/* Share Button top right */}
      <button
        id="share-btn"
        onClick={handleShare}
        aria-label="Compartilhar link"
        className="absolute top-4 right-4 p-2.5 rounded-full bg-slate-100 border border-slate-200 text-slate-600 hover:text-brand-orange hover:bg-slate-200/80 transition-all cursor-pointer backdrop-blur-sm"
      >
        <Share2 className="w-5 h-5" />
      </button>

      {/* Profile Logo Container */}
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className="relative mb-4 group"
      >
        {/* Outer glowing border */}
        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-brand-orange to-brand-gold blur-md opacity-20 group-hover:opacity-40 transition-opacity duration-300" />
        
        <div className="relative w-24 h-24 rounded-full p-[3px] bg-gradient-to-tr from-brand-orange via-brand-gold to-brand-orange">
          <img
            src={LOGO_URL}
            alt="Logo Esquadrijampa"
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover rounded-full bg-white"
          />
        </div>
      </motion.div>

      {/* Brand Name */}
      <motion.div
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.1, duration: 0.4 }}
        className="flex items-center gap-1.5 mb-1"
      >
        <h1 className="font-display font-extrabold text-2xl tracking-tight text-slate-900">
          Esquadrijampa
        </h1>
        <CheckCircle className="w-5 h-5 text-brand-orange fill-brand-orange/10 shrink-0" />
      </motion.div>

      {/* Subtitle / Handle */}
      <motion.div
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.15, duration: 0.4 }}
        className="text-brand-orange font-mono text-sm tracking-wide mb-3"
      >
        @{INSTAGRAM_HANDLE}
      </motion.div>

      {/* Location Badge */}
      <motion.div
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.4 }}
        className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-brand-orange/10 border border-brand-orange/20 text-brand-orange text-xs font-medium mb-4 backdrop-blur-sm"
      >
        <MapPin className="w-3.5 h-3.5" />
        <span>João Pessoa — PB</span>
      </motion.div>

      {/* Biography */}
      <motion.p
        initial={{ y: 15, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.25, duration: 0.4 }}
        className="text-slate-600 text-sm leading-relaxed max-w-sm"
      >
        Fabricação e instalação de esquadrias de alumínio, brises, ripados, fachada ACM e pele de vidro. Sua obra merece alto padrão. 🏗️
      </motion.p>

      {/* Custom Toast Alert */}
      <AnimatePresence>
        {showToast && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.9 }}
            className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 flex items-center gap-2 px-4 py-3 rounded-xl bg-white border border-slate-200 shadow-2xl text-slate-800 text-sm font-medium"
          >
            <Check className="w-4 h-4 text-brand-orange" />
            <span>Link copiado com sucesso!</span>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
