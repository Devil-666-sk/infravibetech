"use client";

import { Phone, Mail, MapPin, Send, Navigation } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";

interface ApiResponse {
  success: boolean;
  message: string;
}

export default function ContactUs() {
  const [loading, setLoading] = useState(false);
  const [phoneError, setPhoneError] = useState("");
  const [formMessage, setFormMessage] = useState("");
  const [success, setSuccess] = useState(false);

  const isMobileValid = (mobile: string) =>
    /^[6-9]\d{9}$/.test(mobile);

  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();
    setPhoneError("");
    setFormMessage("");
    setSuccess(false);

    const form = e.currentTarget;
    const formData = new FormData(form);

    const name = String(formData.get("name") || "").trim();
    const phone = String(formData.get("phone") || "").trim();
    const message = String(formData.get("message") || "").trim();

    if (!isMobileValid(phone)) {
      setPhoneError("Please enter a valid 10-digit mobile number.");
      return;
    }

    setLoading(true);

    try {
      const res = await fetch("/api/send-enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          service: "Contact Form Enquiry",
          name,
          email: "N/A",
          mobile: phone,
          address: "N/A",
          message,
        }),
      });

      const data: ApiResponse = await res.json();

      if (res.ok && data.success) {
        setSuccess(true);
        setFormMessage(data.message || "Message sent successfully.");
        form.reset();
      } else {
        setSuccess(false);
        setFormMessage(
          data.message || "Failed to send message. Please try again."
        );
      }
    } catch (error) {
      setSuccess(false);
      setFormMessage("Something went wrong. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="w-full py-20 bg-gradient-to-br from-white via-blue-50 to-cyan-50 px-4 sm:px-6 md:px-16">
      <div className="max-w-7xl mx-auto">

        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Contact InfraVibe Tech
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Send us your details and we will contact you soon.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">

          {/* LEFT SIDE */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="space-y-6">

              <div className="flex items-start gap-4">
                <Phone className="text-blue-600 w-6 h-6 mt-1" />
                <div>
                  <h3 className="font-semibold text-sm text-gray-900">Call Us</h3>
                  <a href="tel:7860225993" className="text-gray-600 hover:text-blue-600">
                    +91 78602 25993
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Mail className="text-blue-600 w-6 h-6 mt-1" />
                <div>
                  <h3 className="font-semibold text-sm text-gray-900">Email</h3>
                  <a href="mailto:info@infravibetech.com" className="text-gray-600 hover:text-blue-600">
                    info@infravibetech.com
                  </a>
                </div>
              </div>

              {/* LOCATION WITH EXACT MAP */}
<div className="flex items-start gap-4">
  <MapPin className="text-blue-600 w-6 h-6 mt-1" />
  <div className="w-full">
    <h3 className="font-semibold text-sm text-gray-900">
      Location
    </h3>

    <a
      href="https://www.google.com/maps/search/?api=1&query=30.6043045,76.8353311"
      target="_blank"
      rel="noopener noreferrer"
      className="text-gray-600 hover:text-blue-600"
    >
      InfraVibe Tech, Bhankharpur, Punjab – 140201
    </a>

    <div className="mt-4 rounded-2xl overflow-hidden shadow-lg border hover:shadow-2xl transition">
      <iframe
        src="https://www.google.com/maps?q=30.6043045,76.8353311&z=17&output=embed"
        title="InfraVibe Tech Location"        
        width="100%"
        height="240"
        style={{ border: 0 }}
        loading="lazy"
      ></iframe>
    </div>

    <a
      href="https://www.google.com/maps/dir/?api=1&destination=30.6043045,76.8353311"
      target="_blank"
      rel="noopener noreferrer"
      className="mt-3 inline-flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg shadow-md hover:bg-blue-700 transition"
    >
      <Navigation size={16} />
      Get Directions
    </a>
  </div>
</div>


            </div>
          </motion.div>

          {/* FORM */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-white p-8 rounded-3xl shadow-xl border border-gray-100 space-y-5"
          >
            <div>
              <label className="text-sm font-medium text-gray-700">
                Full Name
              </label>
              <input
                name="name"
                aria-label="Full Name"
                type="text"
                required
                className="w-full mt-2 p-3 border rounded-xl focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="text-sm font-medium text-gray-700">
                Phone Number
              </label>
              <input
                name="phone"
                aria-label="Phone Number"
                type="tel"
                required
                maxLength={10}
                inputMode="numeric"
                onInput={(e: React.FormEvent<HTMLInputElement>) => {
                  e.currentTarget.value = e.currentTarget.value.replace(/[^0-9]/g, "");
                }}
                className="w-full mt-2 p-3 border rounded-xl focus:ring-2 focus:ring-blue-500"
              />
              {phoneError && (
                <p className="text-red-500 text-xs mt-1">{phoneError}</p>
              )}
            </div>

            <div>
              <label className="text-sm font-medium text-gray-700">
                Your Query
              </label>
              <textarea
                name="message"
                aria-label="Your Query"
                rows={5}
                required
                className="w-full mt-2 p-3 border rounded-xl focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {formMessage && (
              <div
                className={`text-sm p-3 rounded-lg ${
                  success
                    ? "bg-green-100 text-green-700"
                    : "bg-red-100 text-red-700"
                }`}
              >
                {formMessage}
              </div>
            )}

            <button
              type="submit"
              aria-label="Submit Contact Form"
              disabled={loading}
              className="w-full flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl shadow-md transition disabled:opacity-60"
            >
              <Send size={18} />
              {loading ? "Sending..." : "Send Message"}
            </button>

          </motion.form>
        </div>
      </div>
    </section>
  );
}
