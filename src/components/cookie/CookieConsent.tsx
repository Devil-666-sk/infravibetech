"use client";

import { useEffect, useState } from "react";

const COOKIE_NAME = "infravibe_cookie_consent";
type ConsentValue = "accepted" | "rejected" | "unknown";

function setConsentCookie(value: ConsentValue) {
  try {
    localStorage.setItem(COOKIE_NAME, value);
  } catch {}

  if (typeof window !== "undefined" && (window as any).gtag) {
    const analytics_storage = value === "accepted" ? "granted" : "denied";
    (window as any).gtag("consent", "update", { analytics_storage });
  }
}

function getStoredConsent(): ConsentValue {
  try {
    const v = localStorage.getItem(COOKIE_NAME);
    if (v === "accepted" || v === "rejected") return v;
  } catch {}
  return "unknown";
}

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const stored = getStoredConsent();
    if (stored === "unknown") {
      setTimeout(() => setVisible(true), 500);
    }
  }, []);

  function acceptAll() {
    setConsentCookie("accepted");
    setVisible(false);
  }

  function rejectAll() {
    setConsentCookie("rejected");
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <div
      aria-live="polite"
      className="fixed bottom-6 left-4 right-4 md:left-8 md:right-auto z-50 flex flex-col md:flex-row items-center gap-4 p-6 max-w-3xl mx-auto bg-gradient-to-br from-white via-blue-50 to-cyan-50 border border-gray-200 rounded-2xl shadow-xl"
    >
      {/* Content */}
      <div className="flex-1 min-w-0">
        <h3 className="text-lg md:text-xl font-semibold text-gray-900">
          Cookie Policy Notice
        </h3>
        <p className="text-sm md:text-base text-gray-600 mt-2 leading-relaxed">
          InfraVibe Tech uses cookies and similar technologies to improve website performance, 
          analyze traffic, and enhance user experience. By clicking “Accept”, you consent to 
          our use of cookies. You may choose to decline if you prefer.
        </p>
      </div>

      {/* Actions */}
      <div className="flex flex-col sm:flex-row gap-3 md:gap-4 w-full md:w-auto mt-3 md:mt-0">
        <button
          onClick={rejectAll}
          className="w-full sm:w-auto px-5 py-2.5 rounded-lg text-sm bg-gray-100 hover:bg-gray-200 border border-gray-200 text-gray-800 transition font-medium"
          aria-label="Reject cookies"
        >
          Decline
        </button>

        <button
          onClick={acceptAll}
          className="w-full sm:w-auto px-5 py-2.5 rounded-lg text-sm font-semibold bg-blue-600 text-white hover:bg-blue-700 transition shadow-md"
          aria-label="Accept cookies"
        >
          Accept
        </button>
      </div>
    </div>
  );
}
