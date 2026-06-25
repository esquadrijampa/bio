/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

declare global {
  interface Window {
    dataLayer?: any[];
  }
}

interface TrackClickParams {
  buttonId: string;
  buttonText: string;
  buttonUrl?: string;
  clickCategory: string;
}

/**
 * Pushes a 'button_click' event to Google Tag Manager's dataLayer.
 * This can be captured in GTM using a single Custom Event trigger.
 */
export function trackButtonClick({ buttonId, buttonText, buttonUrl, clickCategory }: TrackClickParams) {
  if (typeof window !== 'undefined') {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      event: 'button_click',
      button_id: buttonId,
      button_text: buttonText,
      button_url: buttonUrl || '',
      click_category: clickCategory,
    });
    
    // Log to console for easy developer validation
    console.log(`[GTM DataLayer Push] event: 'button_click'`, {
      button_id: buttonId,
      button_text: buttonText,
      button_url: buttonUrl || '',
      click_category: clickCategory,
    });
  }
}
