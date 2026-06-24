/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { Wrench, ShieldCheck, Ruler } from 'lucide-react';

const DIFFERENTIALS = [
  {
    id: 'diff-1',
    title: 'Fabricação Própria',
    subtitle: 'Controle total da produção',
    description: 'Fabricamos nossas próprias esquadrias com cortes milimétricos, produtos homologados, testados e aprovados.',
    icon: Wrench,
  },
  {
    id: 'diff-2',
    title: 'Sistemas Premium',
    subtitle: 'Bitolas estruturais robustas',
    description: 'Trabalhamos com as melhores linhas de esquadrias de alumínio do mercado e ajudamos você a escolher a opção ideal para o seu projeto, garantindo beleza, segurança, durabilidade e o melhor custo-benefício.',
    icon: ShieldCheck,
  },
  {
    id: 'diff-3',
    title: 'Projeto Sob Medida',
    subtitle: 'A solução ideal para sua obra',
    description: 'Análise detalhada do seu projeto arquitetônico para criar esquadrias, brises e peles de vidro perfeitamente ajustadas.',
    icon: Ruler,
  },
];

export default function Differentials() {
  return (
    <section id="differentials" className="w-full max-w-md mx-auto px-4 py-8">
      {/* Section Title */}
      <div className="flex flex-col items-center mb-6">
        <h2 className="font-display font-extrabold text-xl text-slate-900 tracking-tight flex items-center gap-2">
          Nossos Diferenciais
        </h2>
        <div className="w-12 h-1 bg-brand-orange mt-2 rounded-full" />
      </div>

      {/* Differentials Cards */}
      <div className="flex flex-col gap-4">
        {DIFFERENTIALS.map((diff, idx) => {
          const Icon = diff.icon;
          return (
            <motion.div
              key={diff.id}
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.4 }}
              className="p-4.5 rounded-2xl bg-slate-50 border border-slate-200 hover:border-brand-orange/30 transition-all duration-300 flex items-start gap-4 group hover:bg-slate-100/60 shadow-xs"
            >
              {/* Icon Container */}
              <div className="p-3 rounded-xl bg-white border border-slate-200 text-brand-orange group-hover:bg-brand-orange group-hover:text-white transition-colors duration-300 shrink-0">
                <Icon className="w-5 h-5" />
              </div>

              {/* Text content */}
              <div className="flex flex-col">
                <h3 className="font-display font-bold text-[14px] text-slate-800 tracking-tight group-hover:text-brand-orange transition-colors">
                  {diff.title}
                </h3>
                <span className="text-[11px] text-brand-gold font-medium mt-0.5">
                  {diff.subtitle}
                </span>
                <p className="text-slate-500 text-xs leading-relaxed mt-2 font-sans">
                  {diff.description}
                </p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
