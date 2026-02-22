"use client";

import { useRouter } from "next/navigation";
import { X } from "lucide-react";

export default function PrivacyPolicy() {
  const router = useRouter();

  return (
    <div className="relative max-w-3xl mx-auto py-12 px-5 text-gray-700 leading-7">

      {/* Close Button */}
      <button
        onClick={() => router.back()}
        className="absolute top-5 right-5 p-2 rounded-full hover:bg-gray-100 transition"
      >
        <X size={22} />
      </button>

      <h1 className="text-2xl md:text-3xl font-semibold mb-6 text-gray-900">
        Privacy Policy
      </h1>

      <p className="mb-4">
        At <strong>InfraVibe Tech</strong>, we respect your privacy and are 
        committed to protecting your personal information. This Privacy Policy 
        explains how we collect, use, and safeguard your data.
      </p>

      <h2 className="text-lg font-medium mt-6 mb-2 text-gray-900">
        Information We Collect
      </h2>
      <p className="mb-4">
        We may collect personal details such as your name, phone number, 
        email address, billing and shipping details, and service-related 
        information when you contact us, place an order, or use our services.
      </p>

      <h2 className="text-lg font-medium mt-6 mb-2 text-gray-900">
        How We Use Your Information
      </h2>

      <ul className="list-disc pl-6 mb-4 space-y-1">
        <li>Processing orders and providing services</li>
        <li>Customer support and communication</li>
        <li>Billing and payment processing</li>
        <li>Shipping and delivery coordination</li>
        <li>Improving our services and website experience</li>
        <li>Preventing fraud and unauthorized transactions</li>
      </ul>

      <h2 className="text-lg font-medium mt-6 mb-2 text-gray-900">
        Cookies & Tracking Technologies
      </h2>
      <p className="mb-4">
        Our website may use cookies and similar tracking technologies to 
        enhance user experience and improve functionality. You may disable 
        cookies through your browser settings if preferred.
      </p>

      <h2 className="text-lg font-medium mt-6 mb-2 text-gray-900">
        Sharing of Information
      </h2>
      <p className="mb-4">
        We do not sell or rent your personal information to third parties. 
        Information may only be shared with trusted service providers 
        (such as payment gateways or courier partners) strictly for 
        order fulfillment purposes.
      </p>

      <h2 className="text-lg font-medium mt-6 mb-2 text-gray-900">
        Data Protection
      </h2>
      <p className="mb-4">
        We implement reasonable security measures to protect your personal 
        information from unauthorized access or misuse. However, no method 
        of online transmission is completely secure.
      </p>

      <h2 className="text-lg font-medium mt-6 mb-2 text-gray-900">
        Your Rights
      </h2>
      <p className="mb-4">
        You may request access, correction, or deletion of your personal data 
        by contacting us via email.
      </p>

      <h2 className="text-lg font-medium mt-6 mb-2 text-gray-900">
        Contact Us
      </h2>
      <p className="mb-4">
        If you have any questions regarding this Privacy Policy, 
        please contact us at:
        <br />
        <strong>Email:</strong> info@infravibetech.com
      </p>

      <h2 className="text-lg font-medium mt-6 mb-2 text-gray-900">
        Policy Updates
      </h2>
      <p className="mb-4">
        We may update this Privacy Policy from time to time. 
        Continued use of our website indicates acceptance of any changes.
      </p>

      <p className="mt-8 text-xs text-gray-500">
        Last Updated: {new Date().toLocaleDateString()}
      </p>

    </div>
  );
}
