'use client';

import { useEffect } from 'react';
import Script from 'next/script';

export default function StudentLoginPage() {
  useEffect(() => {
    const tryOpenLogin = () => {
      if (window.TutorBirdWidget) {
        window.TutorBirdWidget.open('login');
      } else {

        setTimeout(tryOpenLogin, 300);
      }
    };

    tryOpenLogin();

    return () => {
      // Small delay to ensure the widget has time to initialize before we try to kill it
      // if the user navigates away extremely quickly
      if (window.TutorBirdWidget && typeof window.TutorBirdWidget.close === 'function') {
        window.TutorBirdWidget.close();
      }

      // Force remove any persistent DOM elements injected by the widget
      const selectors = [
        'iframe[src*="tutorbird.com"]',
        'div[id*="tutorbird"]',
        'div[class*="tutorbird"]',
        '.tutorbird-modal',
        '.tutorbird-overlay'
      ];

      selectors.forEach(selector => {
        document.querySelectorAll(selector).forEach(el => el.remove());
      });
    };
  }, []);

  return (
    <>
      <div className='h-[20vh] flex flex-col justify-center items-center'>

        <div >
          <Script

            src="https://app.tutorbird.com/Widget/v4/Widget.ashx?settings=eyJTY2hvb2xJRCI6InNjaF9wTFpKUCIsIldlYnNpdGVJRCI6Indic181WnRKNyIsIldlYnNpdGVCbG9ja0lEIjoid2JiX21jY1hKRyJ9"
            strategy="afterInteractive"
          />
        </div>

      </div>

    </>
  );
}
