/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { Instagram, MessageCircle, Mail, Phone, ExternalLink } from 'lucide-react';
import { SOCIAL_LINKS } from '../data';
import { trackButtonClick } from '../utils/gtm';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="w-full max-w-md mx-auto px-4 pt-4 pb-12 mt-4 text-center border-t border-slate-200">
      
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
              onClick={() => {
                trackButtonClick({
                  buttonId: `footer-social-${link.platform}`,
                  buttonText: `Footer: ${link.label} (${link.value})`,
                  buttonUrl: link.url,
                  clickCategory: 'footer_social_links'
                });
              }}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200 hover:border-brand-orange/40 hover:bg-slate-100 transition-all flex flex-col items-center justify-center gap-1.5 group cursor-pointer shadow-xs"
            >
              <div className="p-2 rounded-xl bg-white border border-slate-200 text-brand-orange group-hover:bg-brand-orange group-hover:text-white group-hover:border-transparent transition-colors">
                <Icon className="w-4 h-4" />
              </div>
              <span className="text-[10px] text-slate-500 font-mono font-bold tracking-wider uppercase">
                {link.label}
              </span>
              <span className="text-xs text-slate-800 group-hover:text-brand-orange transition-colors truncate max-w-[120px] font-sans">
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
        
        <p className="text-slate-500 text-[10px] tracking-wide mt-1">
          © {year} Esquadrijampa — Todos os direitos reservados
        </p>
        
        <p className="text-slate-600 text-[9px] mt-1 font-mono">
          João Pessoa, PB — Brasil
        </p>
      </div>

      {/* Desenvolvido por Webconverte */}
      <div className="mt-8 pt-4 border-t border-slate-100 flex flex-col items-center gap-1">
        <span className="text-[9px] uppercase font-mono tracking-widest text-slate-400 font-medium">
          Desenvolvido por
        </span>
        <a
          href="https://webconverte.com.br"
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => {
            trackButtonClick({
              buttonId: 'footer-webconverte-link',
              buttonText: 'Desenvolvido por Webconverte',
              buttonUrl: 'https://webconverte.com.br',
              clickCategory: 'footer_developer_link'
            });
          }}
          className="flex items-center hover:opacity-85 transition-opacity cursor-pointer"
          id="footer-webconverte-link"
        >
          <span className="text-[15px] font-sans font-light tracking-widest text-[#8cc63f] leading-none">
            WEB
          </span>
          <span className="text-[15px] font-sans font-medium tracking-widest text-[#1b365d] leading-none ml-0.5">
            CONVERTE
          </span>
        </a>
      </div>
    </footer>
  );
}
