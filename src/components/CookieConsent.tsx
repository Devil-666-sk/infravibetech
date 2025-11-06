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

  function openSettings() {
    window.location.href = "/privacy";
  }

  if (!visible) return null;

  return (
    <div
      aria-live="polite"
      className="fixed left-4 right-4 md:left-8 md:right-auto md:bottom-8 bottom-6 z-50 flex flex-col md:flex-row md:items-center gap-4 p-4 md:p-5 max-w-3xl shadow-2xl rounded-2xl bg-gradient-to-r from-white/90 to-white/60 backdrop-blur-md border border-white/20 transition-all duration-300 ease-in-out"
      style={{ boxShadow: "0 8px 32px rgba(0,0,0,0.1)" }}
    >
      <div className="flex-1 min-w-0">
        <h3
          className="text-base md:text-lg font-semibold text-slate-800"
          style={{ fontFamily: "Poppins, Montserrat, sans-serif" }}
        >
          InfraVibe uses cookies
        </h3>
        <p className="text-sm md:text-base text-slate-600 mt-1 leading-snug">
          We use cookies to improve your experience, analyse traffic, and
          personalise content. You can accept all or manage your preferences.
        </p>
      </div>

      <div className="flex flex-col sm:flex-row sm:items-center gap-3 md:gap-4 w-full md:w-auto">
        <button
          onClick={openSettings}
          className="w-full sm:w-auto px-4 py-2 rounded-lg text-sm border border-transparent text-slate-700 hover:underline transition"
          aria-label="Manage cookie settings"
        >
          Settings
        </button>

        <button
          onClick={rejectAll}
          className="w-full sm:w-auto px-4 py-2 rounded-lg text-sm bg-white/70 hover:bg-white/80 border border-white/10 text-slate-800 transition"
          aria-label="Reject cookies"
        >
          Reject
        </button>

        <button
          onClick={acceptAll}
          className="w-full sm:w-auto px-4 py-2 rounded-xl text-sm font-semibold bg-gradient-to-r from-indigo-500 to-cyan-400 text-white shadow-lg hover:scale-[1.03] transform transition duration-200"
          aria-label="Accept cookies"
        >
          Accept
        </button>
      </div>
    </div>
  );
}
