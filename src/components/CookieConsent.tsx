// components/CookieConsent.tsx
"use client";

import { useEffect, useState } from "react";

const COOKIE_NAME = "infravibe_cookie_consent";
type ConsentValue = "accepted" | "rejected" | "unknown";

function setConsentCookie(value: ConsentValue) {
  try {
    localStorage.setItem(COOKIE_NAME, value);
  } catch {}
  // Google (gtag) consent update (replace GA_MEASUREMENT_ID if needed elsewhere)
  if (typeof window !== "undefined" && (window as any).gtag) {
    // analytics_storage controls Google Analytics cookies
    const analytics_storage = value === "accepted" ? "granted" : "denied";
    (window as any).gtag("consent", "update", {
      analytics_storage,
    });
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
      // show banner after small delay so it doesn't flash on SSR
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
    // optional: open a modal or redirect to /privacy
    window.location.href = "/privacy";
  }

  if (!visible) return null;

  return (
    <div
      aria-live="polite"
      className="fixed left-4 right-4 md:left-8 md:right-auto md:bottom-8 bottom-6 z-50 flex items-center gap-4 p-4 max-w-3xl shadow-2xl rounded-2xl bg-gradient-to-r from-white/80 to-white/60 backdrop-blur-md border border-white/20"
      style={{ boxShadow: "0 8px 32px rgba(0,0,0,0.08)" }}
    >
      <div className="flex-1 min-w-0">
        <h3 className="text-base md:text-lg font-semibold" style={{ fontFamily: "Poppins, Montserrat, sans-serif" }}>
          InfraVibe uses cookies
        </h3>
        <p className="text-sm md:text-base text-slate-600 mt-1">
          We use cookies to improve site experience, analyse traffic and personalise content. You can accept all or manage settings.
        </p>
      </div>

      <div className="flex gap-3 items-center">
        <button
          onClick={openSettings}
          className="px-3 py-2 rounded-lg text-sm border border-transparent hover:underline"
          aria-label="Manage cookie settings"
        >
          Settings
        </button>

        <button
          onClick={rejectAll}
          className="px-3 py-2 rounded-lg text-sm bg-white/70 hover:bg-white/80 border border-white/10"
          aria-label="Reject cookies"
        >
          Reject
        </button>

        <button
          onClick={acceptAll}
          className="px-4 py-2 rounded-xl text-sm font-semibold bg-gradient-to-r from-indigo-500 to-cyan-400 text-white shadow-lg hover:scale-[1.02] transform transition"
          aria-label="Accept cookies"
        >
          Accept
        </button>
      </div>
    </div>
  );
}
