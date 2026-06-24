/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { Instagram, MessageCircle, Mail, Phone, ExternalLink } from 'lucide-react';
import { SOCIAL_LINKS } from '../data';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="w-full max-w-md mx-auto px-4 pt-4 pb-12 mt-4 text-center border-t border-brand-card-border/60">
      
      {/* Social Icons Grid */}
      <div className="grid grid-cols-2 gap-2 mb-6">
        {SOCIAL_LINKS.map((link) => {
          let Icon = ExternalLink;
          if (link.platform === 'instagram') Icon = Instagram;
          if (link.platform === 'whatsapp') Icon = MessageCircle;
          if (link.platform === 'email') Icon = Mail;
          if (link.platform === 'phone') Icon = Phone;

          return (
            <a
              key={link.platform}
              id={`footer-social-${link.platform}`}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3.5 rounded-2xl bg-brand-card/50 border border-brand-card-border hover:border-brand-orange/40 hover:bg-brand-card transition-all flex flex-col items-center justify-center gap-1.5 group cursor-pointer"
            >
              <div className="p-2 rounded-xl bg-brand-dark text-brand-orange group-hover:bg-brand-orange group-hover:text-white transition-colors">
                <Icon className="w-4 h-4" />
              </div>
              <span className="text-[10px] text-gray-500 font-mono font-bold tracking-wider uppercase">
                {link.label}
              </span>
              <span className="text-xs text-white group-hover:text-brand-orange transition-colors truncate max-w-[120px] font-sans">
                {link.value}
              </span>
            </a>
          );
        })}
      </div>

      {/* Slogan & Copyright */}
      <div className="flex flex-col items-center gap-2">
        <p className="text-[10px] uppercase font-mono tracking-widest text-brand-gold font-bold">
          Sua obra merece o melhor
        </p>
        
        <p className="text-gray-500 text-[10px] tracking-wide mt-1">
          © {year} Esquadrijampa — Todos os direitos reservados
        </p>
        
        <p className="text-gray-600 text-[9px] mt-1 font-mono">
          João Pessoa, PB — Brasil
        </p>
      </div>
    </footer>
  );
}
