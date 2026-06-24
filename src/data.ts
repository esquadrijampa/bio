/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Servico, Project, Differential, SocialLink } from './types';

export const WHATSAPP_NUMBER = '5583991255555'; // João Pessoa (Paraíba) - Customizable standard placeholder
export const WHATSAPP_API_BASE = 'https://api.whatsapp.com/send';

export const CONTACT_EMAIL = 'mktesquadrijampa@gmail.com';
export const INSTAGRAM_HANDLE = 'esquadrijampa';
export const TELEPHONE_NUMBER = '+55 (83) 99125-5555';

export const LOGO_URL = '/src/assets/images/esquadrijampa_logo_1782318955326.jpg';

export const SOCIAL_LINKS: SocialLink[] = [
  {
    platform: 'whatsapp',
    url: `${WHATSAPP_API_BASE}?phone=${WHATSAPP_NUMBER}&text=Olá!%20Gostaria%20de%20solicitar%20um%20orçamento%20de%20esquadrias.`,
    label: 'WhatsApp',
    value: '(83) 99125-5555'
  },
  {
    platform: 'instagram',
    url: `https://instagram.com/${INSTAGRAM_HANDLE}`,
    label: 'Instagram',
    value: `@${INSTAGRAM_HANDLE}`
  },
  {
    platform: 'email',
    url: `mailto:${CONTACT_EMAIL}`,
    label: 'E-mail',
    value: CONTACT_EMAIL
  },
  {
    platform: 'phone',
    url: `tel:+5583991255555`,
    label: 'Telefone',
    value: '(83) 99125-5555'
  }
];

export const SERVICES_DATA: Servico[] = [
  // Janelas
  {
    id: 'janela-correr',
    category: 'janelas',
    title: 'Janela de Correr (2 a 6 folhas)',
    description: 'Janelas deslizantes com perfis premium. Deslizamento suave, ótima vedação termoacústica e máxima luminosidade.',
    whatsappMessage: 'Olá Esquadrijampa! Gostaria de um orçamento para Janela de Correr (2 a 6 folhas) sob medida.'
  },
  {
    id: 'janela-maximar',
    category: 'janelas',
    title: 'Janela Maxim-Ar',
    description: 'Abertura externa basculante ideal para banheiros, cozinhas e áreas que exigem ventilação controlada com elegância.',
    whatsappMessage: 'Olá Esquadrijampa! Gostaria de um orçamento para Janela do tipo Maxim-Ar.'
  },
  {
    id: 'janela-boca-lobo',
    category: 'janelas',
    title: 'Janela Boca de Lobo',
    description: 'Estilo clássico e funcional que otimiza o espaço de circulação e ventilação em sua residência.',
    whatsappMessage: 'Olá Esquadrijampa! Gostaria de mais informações e orçamento para Janela Boca de Lobo.'
  },
  // Portas
  {
    id: 'porta-correr',
    category: 'portas',
    title: 'Porta de Correr (2 a 6 folhas)',
    description: 'Portas de correr em grandes vãos que integram ambientes com suavidade. Roldanas de alta performance.',
    whatsappMessage: 'Olá Esquadrijampa! Gostaria de solicitar um orçamento para Porta de Correr de alumínio com grandes vãos.'
  },
  {
    id: 'porta-giro',
    category: 'portas',
    title: 'Porta de Giro (Veneziana, Lambri, Vidro)',
    description: 'Portas pivotantes ou de abrir tradicionais com acabamentos personalizados em veneziana, lambri de alumínio ou vidro.',
    whatsappMessage: 'Olá Esquadrijampa! Gostaria de um orçamento para Porta de Giro (pivotante, veneziana ou lambri).'
  },
  {
    id: 'porta-camarao',
    category: 'portas',
    title: 'Porta Camarão / Articulada',
    description: 'Sistema articulado inovador que permite abertura quase total do vão, ideal para otimizar passagens estreitas.',
    whatsappMessage: 'Olá Esquadrijampa! Gostaria de um orçamento para Porta Camarão de alumínio.'
  },
  // Fachadas e Estruturas
  {
    id: 'pele-vidro',
    category: 'fachadas',
    title: 'Pele de Vidro (Stick e Unitizada)',
    description: 'Fachadas cortina modernas de alto padrão com fixação estrutural oculta ou visível, unindo beleza e conforto térmico.',
    whatsappMessage: 'Olá Esquadrijampa! Gostaria de agendar uma consultoria / orçamento para Pele de Vidro (Stick/Unitizada) para minha fachada.'
  },
  {
    id: 'fachada-acm',
    category: 'fachadas',
    title: 'Fachada ACM',
    description: 'Revestimento em placas de alumínio composto. Durabilidade, isolamento, visual limpo e design ultra-moderno.',
    whatsappMessage: 'Olá Esquadrijampa! Gostaria de um orçamento para Fachada em ACM para meu projeto.'
  },
  {
    id: 'brises-ripados',
    category: 'fachadas',
    title: 'Brises e Ripados de Alumínio',
    description: 'Brises para controle solar e ripados decorativos em alumínio. Acabamentos em preto, bronze ou padrão amadeirado.',
    whatsappMessage: 'Olá Esquadrijampa! Gostaria de solicitar um orçamento para Brises / Ripados de Alumínio.'
  },
  {
    id: 'muxarabi',
    category: 'fachadas',
    title: 'Muxarabi de Alumínio',
    description: 'Painéis vazados geométricos que garantem privacidade, ventilação natural e um efeito de luz maravilhoso na obra.',
    whatsappMessage: 'Olá Esquadrijampa! Gostaria de mais detalhes e orçamento para Muxarabi de alumínio.'
  },
  // Vidros
  {
    id: 'vidro-temperado',
    category: 'vidros',
    title: 'Vidro Temperado',
    description: 'Vidros de alta resistência para boxes, tampos, divisórias, portas pivotantes e guarda-corpos sob medida.',
    whatsappMessage: 'Olá Esquadrijampa! Gostaria de solicitar um orçamento para projetos em Vidro Temperado.'
  }
];

export const PROJECTS_DATA: Project[] = [
  {
    id: 'proj-1',
    title: 'Pele de Vidro de Alto Padrão',
    category: 'Fachadas e Estruturas',
    image: '/src/assets/images/project_pele_de_vidro_1782318971334.jpg',
    description: 'Fachada moderna de grande vão em pele de vidro com vidros refletivos de alta performance e perfis bronze.',
    whatsappMessage: 'Gostei muito do projeto de Pele de Vidro de Alto Padrão! Quero um orçamento parecido para o meu projeto.'
  },
  {
    id: 'proj-2',
    title: 'Porta de Correr Minimalista',
    category: 'Portas',
    image: '/src/assets/images/project_porta_de_correr_1782318984510.jpg',
    description: 'Porta de correr de alumínio preto com trilhos embutidos e roldanas blindadas para integração total com a piscina.',
    whatsappMessage: 'Gostei muito da Porta de Correr Minimalista que vi no portfólio! Quero um orçamento desse sistema para minha obra.'
  },
  {
    id: 'proj-3',
    title: 'Ripados e Brise Solar',
    category: 'Fachadas e Estruturas',
    image: '/src/assets/images/project_brise_ripado_1782318999919.jpg',
    description: 'Ripado de alumínio com efeito amadeirado premium e brises direcionais para proteção solar inteligente da fachada.',
    whatsappMessage: 'Gostei muito do projeto com Ripados e Brises de Alumínio! Poderia me passar informações de valores por m²?'
  },
  {
    id: 'proj-4',
    title: 'Fachada Corporativa em ACM',
    category: 'Fachadas e Estruturas',
    image: '/src/assets/images/project_fachada_acm_1782319013225.jpg',
    description: 'Revestimento de fachada com chapas de ACM em cinza chumbo com recortes precisos e acabamento impecável.',
    whatsappMessage: 'Vi o projeto da Fachada Corporativa em ACM no seu site e gostaria de solicitar um orçamento semelhante.'
  },
  {
    id: 'proj-5',
    title: 'Janela Maxim-Ar Integrada',
    category: 'Janelas',
    image: '/src/assets/images/project_janela_maximar_1782319028030.jpg',
    description: 'Janela maxim-ar com esquadria robusta na cor preta, ideal para vedações severas e ventilação superior.',
    whatsappMessage: 'Gostei da Janela Maxim-Ar Integrada. Gostaria de solicitar um orçamento para janelas desse tipo.'
  },
  {
    id: 'proj-6',
    title: 'Porta Pivotante de Entrada',
    category: 'Portas',
    image: '/src/assets/images/project_porta_pivotante_1782319043523.jpg',
    description: 'Porta pivotante de entrada principal com ripado de alumínio preto e puxador em inox escovado de 1.8m.',
    whatsappMessage: 'Gostei demais do projeto da Porta Pivotante de Entrada! Quero solicitar um orçamento para a entrada da minha obra.'
  }
];

export const DIFFERENTIALS_DATA: Differential[] = [
  {
    id: 'diff-1',
    title: 'Fabricação Própria',
    description: 'Controle total da produção, garantindo cortes precisos e montagem perfeita sem intermediários.',
    iconName: 'Wrench'
  },
  {
    id: 'diff-2',
    title: 'Sistemas Premium',
    description: 'Trabalhamos com os melhores sistemistas e bitolas estruturais certificadas (20mm, 25mm e 32mm).',
    iconName: 'ShieldCheck'
  },
  {
    id: 'diff-3',
    title: 'Projeto Sob Medida',
    description: 'Desenvolvimento e execução personalizados para atender perfeitamente aos detalhes da sua obra.',
    iconName: 'LayoutGrid'
  }
];
