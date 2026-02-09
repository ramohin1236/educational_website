'use client';

import { useEffect } from 'react';
import Script from 'next/script';

export default function TutoringPage() {
  useEffect(() => {
    const tryOpenLogin = () => {
      if (window.TutorBirdWidget) {
        window.TutorBirdWidget.open('1-1 Tutoring - At Home');
      } else {

        setTimeout(tryOpenLogin, 300);
      }
    };

    tryOpenLogin();
  }, []);

  return (
    <>
      <div className=''>

        <div >
          <Script

            src="https://app.tutorbird.com/Widget/v4/Widget.ashx?settings=eyJTY2hvb2xJRCI6InNjaF9wTFpKUCIsIldlYnNpdGVJRCI6Indic181WnRKNyIsIldlYnNpdGVCbG9ja0lEIjoid2JiX2Zoc3lKMCJ9"
            strategy="afterInteractive"
          />
        </div>

      </div>

    </>
  );
}
