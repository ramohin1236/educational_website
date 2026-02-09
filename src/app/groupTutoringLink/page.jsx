'use client';

import { useEffect } from 'react';
import Script from 'next/script';

export default function groupTutoringPage() {
  useEffect(() => {
    const tryOpenLogin = () => {
      if (window.TutorBirdWidget) {
        window.TutorBirdWidget.open('Group Tutoring - In Center');
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

            src="https://app.tutorbird.com/Widget/v4/Widget.ashx?settings=eyJTY2hvb2xJRCI6InNjaF9wTFpKUCIsIldlYnNpdGVJRCI6Indic181WnRKNyIsIldlYnNpdGVCbG9ja0lEIjoid2JiX2ZoczJKayJ9"
            strategy="afterInteractive"
          />
        </div>

      </div>

    </>
  );
}
