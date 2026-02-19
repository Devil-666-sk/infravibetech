"use client";

import { useState, useEffect } from "react";
import { X, Minus, Maximize, Send, Bot } from "lucide-react";

type Step = 0 | 1 | 2;

interface Message {
  sender: "bot" | "user";
  text: string;
}

export default function WhatsAppStyleChatbot() {
  const [open, setOpen] = useState(true);
  const [minimized, setMinimized] = useState(false);
  const [step, setStep] = useState<Step>(0);
  const [category, setCategory] = useState("");
  const [service, setService] = useState("");
  const [form, setForm] = useState({ name: "", mobile: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { sender: "bot", text: "Hello! I’m InfraVibe Tech Assistant 👋 How can I help you today? Please choose an option below." },
  ]);

  const isMobileValid = /^[6-9]\d{9}$/.test(form.mobile);

  const categories = [
    { key: "technical", label: "Technical Support", services: ["Laptop & PC Repair & Service", "System Upgrade", "Installation", "AMC Maintenance"] },
    { key: "sale", label: "Sale & Purchase", services: ["New Laptops & PCs","Laptop & PCs Rent", "Refurbished Laptops & PC"] },
    { key: "digital", label: "Digital Services", services: ["Web Design & Development", "SEO On Page & Off Page", "Social Media Optimization", "Lead Generation", "Branding"] },
    { key: "other", label: "Others", services: ["General Inquiry"] },
  ];

  // Scroll to bottom
  useEffect(() => {
    const chat = document.getElementById("chatbox");
    if (chat) chat.scrollTop = chat.scrollHeight;
  }, [messages]);

  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const addMessage = (msg: Message) => {
    setMessages(prev => [...prev, msg]);
  };

  const handleCategorySelect = (cat: string) => {
    setCategory(cat);
    addMessage({ sender: "user", text: cat });
    setStep(1);

    setTimeout(() => {
      addMessage({ sender: "bot", text: `You selected "${cat}". Please choose a service.` });
    }, 300); 
  };

  const handleServiceSelect = (svc: string) => {
    setService(svc);
    addMessage({ sender: "user", text: svc });
    setStep(2);

    setTimeout(() => {
      addMessage({ sender: "bot", text: "Great! Please provide your details." });
    }, 300);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!isMobileValid) return alert("Enter a valid mobile number");

    addMessage({ sender: "user", text: `Name: ${form.name}, Mobile: ${form.mobile}, Message: ${form.message}` });

    try {
      setLoading(true);
      const res = await fetch("/api/send-enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          service: service || "Chatbot Inquiry",
          name: form.name,
          email: "N/A",
          mobile: form.mobile,
          address: "N/A",
          message: form.message,
        }),
      });
      const data = await res.json();
      if (!data.success) throw new Error(data.message || "Failed to send");

      setSuccess(true);
      addMessage({ sender: "bot", text: "✅ Submitted! We will contact you shortly." });

      setTimeout(() => {
        setStep(0);
        setCategory("");
        setService("");
        setForm({ name: "", mobile: "", message: "" });
        setSuccess(false);
        setMessages([
          { sender: "bot", text: "Hello! I’m InfraVibe Tech Assistant 👋 How can I help you today? Please choose an option below." }
        ]);
      }, 3000);

    } catch (err: any) {
      alert("Failed to send enquiry: " + (err.message || ""));
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      {open && !minimized && (
        <div className="w-80 bg-white rounded-2xl shadow-2xl p-3 flex flex-col gap-2 relative animate-slideUp max-h-[500px] overflow-y-auto" id="chatbox">
          {/* Header */}
          <div className="flex justify-between items-center mb-2 border-b border-gray-200 pb-2">
            <span className="font-semibold text-slate-900">InfraVibe Tech Assistant</span>
            <div className="flex gap-2">
              <button onClick={() => setMinimized(true)} className="text-gray-500 hover:text-gray-900"><Minus /></button>
              <button onClick={() => setOpen(false)} className="text-gray-500 hover:text-gray-900"><X /></button>
            </div>
          </div>

          {/* Messages */}
          <div className="flex flex-col gap-2">
            {messages.map((msg, idx) => (
              <div key={idx} className={`p-2 rounded-xl max-w-[80%] text-sm ${msg.sender === "bot" ? "self-start bg-blue-100 text-slate-900" : "self-end bg-blue-600 text-white"}`}>
                {msg.text}
              </div>
            ))}

            {/* Step options */}
            {step === 0 && !success && (
              <div className="flex flex-col gap-2 mt-2">
                {categories.map(cat => (
                  <button
                    key={cat.key}
                    className="bg-gray-100 hover:bg-gray-200 text-slate-800 py-2 rounded-lg text-sm"
                    onClick={() => handleCategorySelect(cat.label)}
                  >
                    {cat.label}
                  </button>
                ))}
              </div>
            )}

            {step === 1 && !success && (
              <div className="flex flex-col gap-2 mt-2">
                {categories.find(c => c.label === category)?.services.map(svc => (
                  <button
                    key={svc}
                    className="bg-gray-100 hover:bg-gray-200 text-slate-800 py-2 rounded-lg text-sm"
                    onClick={() => handleServiceSelect(svc)}
                  >
                    {svc}
                  </button>
                ))}
                <button
                  className="bg-gray-200 hover:bg-gray-300 text-slate-700 py-1 rounded-lg text-xs mt-2"
                  onClick={() => { setStep(0); setCategory(""); setService(""); addMessage({ sender: "user", text: "Back to main categories" }); }}
                >
                  ← Back to main categories
                </button>
              </div>
            )}

            {step === 2 && !success && (
              <form onSubmit={handleSubmit} className="flex flex-col gap-2 mt-2">
                <input
                  name="name"
                  value={form.name}
                  onChange={handleFormChange}
                  placeholder="Your Name"
                  required
                  className="w-full px-2 py-1 border rounded-lg outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                />
                <input
                  name="mobile"
                  value={form.mobile}
                  onChange={handleFormChange}
                  placeholder="Mobile Number"
                  required
                  maxLength={10}
                  className="w-full px-2 py-1 border rounded-lg outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                />
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleFormChange}
                  placeholder="Your Problem / Requirement"
                  rows={2}
                  className="w-full px-2 py-1 border rounded-lg outline-none focus:ring-2 focus:ring-blue-500 text-sm resize-none"
                />
                <button
                  type="submit"
                  disabled={loading}
                  className="mt-2 px-3 py-2 bg-gradient-to-r from-blue-600 to-cyan-500 text-white rounded-xl text-sm font-semibold flex items-center justify-center gap-2 disabled:opacity-60"
                >
                  {loading ? "Sending..." : <><Send size={16} /> Submit</>}
                </button>
              </form>
            )}
          </div>
        </div>
      )}

      {/* Floating buttons */}
      {minimized && (
        <button
          onClick={() => setMinimized(false)}
          className="h-14 w-14 rounded-full bg-blue-600 text-white flex items-center justify-center shadow-xl hover:scale-110 transform transition"
          aria-label="Maximize Chatbot"
        >
           <Bot size={26} />
        </button>
      )}

      {!open && (
        <button
          onClick={() => { setOpen(true); setMinimized(false); }}
          className="h-14 w-14 rounded-full bg-blue-600 text-white flex items-center justify-center shadow-xl hover:scale-110 transform transition"
          aria-label="Open Chatbot"
        >
          <Bot size={26} />
        </button>
      )}

      <style jsx>{`
        @keyframes slideUp {
          0% { opacity: 0; transform: translateY(20px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .animate-slideUp {
          animation: slideUp 0.35s ease-out forwards;
        }
      `}</style>
    </div>
  );
}
