"use client";

import { useEffect } from "react";
import Script from "next/script";

export default function AppartmentBooking() {
  useEffect(() => {
    const tryOpenLogin = () => {
      if (window.TutorBirdWidget) {
        window.TutorBirdWidget.open("login");
      } else {
        setTimeout(tryOpenLogin, 300);
      }
    };

    tryOpenLogin();

    return () => {
      if (window.TutorBirdWidget && typeof window.TutorBirdWidget.close === 'function') {
        window.TutorBirdWidget.close();
      }
      const selectors = [
        'iframe[src*="tutorbird.com"]',
        'div[id*="tutorbird"]',
        'div[class*="tutorbird"]'
      ];
      selectors.forEach(selector => {
        document.querySelectorAll(selector).forEach(el => el.remove());
      });
    };
  }, []);


  return (
    <>
      <div className="h-[10vh] flex flex-col justify-center items-center">
        <div>
          <Script
            src="https://app.tutorbird.com/Widget/v4/Widget.ashx?settings=eyJTY2hvb2xJRCI6InNjaF9wTFpKUCIsIldlYnNpdGVJRCI6Indic181WnRKNyIsIldlYnNpdGVCbG9ja0lEIjoid2JiX2Y1S3dKRiJ9"
            strategy="afterInteractive"
          />
        </div>
      </div>
    </>
  );
}
