"use client";

import { Phone, MessageCircle } from "lucide-react";

export default function FloatingActions() {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-4">
      {/* Call Button */}
      <a
        href="tel:+917860225993"
        aria-label="Call InfraVibe Tech"
        className="floating-btn bg-green-600"
      >
        <Phone className="icon" />
      </a>

      {/* WhatsApp Button */}
      <a
        href="https://wa.me/917860225993"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="WhatsApp InfraVibe Tech"
        className="floating-btn bg-[#25D366]"
      >
        <MessageCircle className="icon" />
      </a>

      {/* styles */}
      <style jsx>{`
        .floating-btn {
          height: 58px;
          width: 58px;
          border-radius: 9999px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          box-shadow:
            0 10px 25px rgba(0, 0, 0, 0.25),
            0 0 0 0 rgba(0, 0, 0, 0.15);
          animation: float 3s ease-in-out infinite;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          will-change: transform;
        }

        .floating-btn:hover {
          transform: scale(1.15);
          box-shadow: 0 18px 35px rgba(0, 0, 0, 0.35);
        }

        .icon {
          width: 28px;
          height: 28px;
          stroke-width: 2.2;
          image-rendering: crisp-edges;
        }

        @keyframes float {
          0% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-6px);
          }
          100% {
            transform: translateY(0px);
          }
        }
      `}</style>
    </div>
  );
}
