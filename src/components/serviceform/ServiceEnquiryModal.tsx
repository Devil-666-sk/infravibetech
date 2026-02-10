"use client";

import { useState } from "react";
import { X, Loader2 } from "lucide-react";

export default function ServiceEnquiryModal({
  service,
  onClose,
}: {
  service: string;
  onClose: () => void;
}) {
  const [form, setForm] = useState({
    name: "",
    email: "",
    mobile: "",
    address: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const isMobileValid = /^[6-9]\d{9}$/.test(form.mobile);
  const isEmailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setError("");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!isMobileValid) return setError("Enter valid mobile number");
    if (!isEmailValid) return setError("Enter valid email address");

    try {
      setLoading(true);

      const res = await fetch("/api/send-enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ service, ...form }),
      });

      const data = await res.json();
      if (!data.success) throw new Error();

      setSuccess(true);
      setTimeout(() => onClose(), 1800);
    } catch {
      setError("Failed to send enquiry. Try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center px-3 sm:px-4">
      <div
        className="
          relative w-full max-w-lg
          bg-white rounded-2xl shadow-2xl
          p-5 sm:p-8
          max-h-[90vh] overflow-y-auto
          animate-fadeIn
        "
      >
        <button
          onClick={onClose}
          className="absolute right-3 top-3 sm:right-4 sm:top-4 text-gray-500 hover:text-black"
        >
          <X />
        </button>

        <h3 className="text-xl sm:text-2xl font-bold mb-1">
          Get Service Quote
        </h3>
        <p className="text-xs sm:text-sm text-gray-600 mb-5">
          Service: <strong className="text-blue-600">{service}</strong>
        </p>

        {success ? (
          <div className="text-center py-10">
            <p className="text-green-600 font-semibold text-lg">
              ✅ Enquiry Sent Successfully
            </p>
            <p className="text-sm text-gray-500 mt-2">
              Our team will contact you shortly.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-4">
            <input
              name="name"
              value={form.name}
              placeholder="Your Name"
              required
              className="w-full border rounded-lg px-3 py-2.5 sm:px-4 sm:py-3 focus:ring-2 focus:ring-blue-500 outline-none"
              onChange={handleChange}
            />

            <input
              name="email"
              type="email"
              value={form.email}
              placeholder="Email Address"
              required
              className={`w-full border rounded-lg px-3 py-2.5 sm:px-4 sm:py-3 outline-none ${
                form.email && !isEmailValid ? "border-red-500" : ""
              }`}
              onChange={handleChange}
            />

            <input
              name="mobile"
              value={form.mobile}
              placeholder="Mobile Number"
              required
              maxLength={10}
              className={`w-full border rounded-lg px-3 py-2.5 sm:px-4 sm:py-3 outline-none ${
                form.mobile && !isMobileValid ? "border-red-500" : ""
              }`}
              onChange={handleChange}
            />

            <input
              name="address"
              value={form.address}
              placeholder="Your Address"
              required
              className="w-full border rounded-lg px-3 py-2.5 sm:px-4 sm:py-3 outline-none"
              onChange={handleChange}
            />

            <textarea
              name="message"
              value={form.message}
              placeholder="Your Requirement (Optional)"
              rows={3}
              className="w-full border rounded-lg px-3 py-2.5 sm:px-4 sm:py-3 outline-none resize-none"
              onChange={handleChange}
            />

            {error && (
              <p className="text-red-600 text-sm font-medium">{error}</p>
            )}

            <button
              type="submit"
              disabled={loading}
              className="
                w-full bg-gradient-to-r from-blue-600 to-cyan-500
                text-white py-2.5 sm:py-3
                rounded-xl font-semibold
                flex items-center justify-center gap-2
                disabled:opacity-60
              "
            >
              {loading && <Loader2 className="animate-spin" size={18} />}
              {loading ? "Sending..." : "Submit Enquiry"}
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
