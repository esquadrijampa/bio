/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface Servico {
  id: string;
  category: 'janelas' | 'portas' | 'fachadas' | 'vidros';
  title: string;
  description: string;
  whatsappMessage: string;
}

export interface Project {
  id: string;
  title: string;
  category: string;
  image: string;
  description: string;
  whatsappMessage: string;
}

export interface Differential {
  id: string;
  title: string;
  description: string;
  iconName: string;
}

export interface SocialLink {
  platform: 'instagram' | 'whatsapp' | 'email' | 'phone';
  url: string;
  label: string;
  value: string;
}
