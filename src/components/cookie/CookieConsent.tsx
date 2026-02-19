"use client";

import { useEffect, useState } from "react";
import { X } from "lucide-react";

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
  const [consent, setConsent] = useState<ConsentValue>("unknown");

  useEffect(() => {
    const stored = getStoredConsent();
    setConsent(stored);
    if (stored === "unknown") {
      setTimeout(() => setVisible(true), 500);
    }
  }, []);

  function acceptAll() {
    setConsent("accepted");
    setConsentCookie("accepted");
    setVisible(false);
  }

  function rejectAll() {
    setConsent("rejected");
    setConsentCookie("rejected");
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <div
      aria-live="polite"
      className="fixed bottom-6 left-4 right-4 md:left-8 md:right-auto z-50 flex flex-col md:flex-row items-center gap-4 p-5 max-w-3xl mx-auto bg-white/90 backdrop-blur-xl border border-white/30 rounded-2xl shadow-xl animate-slideUp"
      style={{ boxShadow: "0 12px 40px rgba(0,0,0,0.15)" }}
    >
      {/* Content */}
      <div className="flex-1 min-w-0">
        <h3
          className="text-lg md:text-xl font-semibold text-slate-900"
          style={{ fontFamily: "Poppins, Montserrat, sans-serif" }}
        >
          We use cookies 🍪
        </h3>
        <p className="text-sm md:text-base text-slate-700 mt-1 leading-snug">
          InfraVibe Tech uses cookies to enhance your experience, analyze traffic, 
          and deliver personalized content. You can accept or reject cookies below.
        </p>
      </div>

      {/* Actions */}
      <div className="flex flex-col sm:flex-row gap-3 md:gap-4 w-full md:w-auto mt-3 md:mt-0">
        <button
          onClick={rejectAll}
          className="w-full sm:w-auto px-4 py-2 rounded-lg text-sm bg-slate-100 hover:bg-slate-200 border border-slate-200 text-slate-800 transition-all font-medium"
          aria-label="Reject cookies"
        >
          Reject
        </button>

        <button
          onClick={acceptAll}
          className="w-full sm:w-auto px-4 py-2 rounded-xl text-sm font-semibold bg-gradient-to-r from-blue-600 to-cyan-500 text-white shadow-lg hover:scale-[1.03] transform transition duration-200"
          aria-label="Accept cookies"
        >
          Accept
        </button>
      </div>
    </div>
  );
}
