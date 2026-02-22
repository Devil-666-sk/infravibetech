"use client";

import { useRouter } from "next/navigation";
import { X } from "lucide-react";

export default function TermsAndConditions() {
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
        Terms & Conditions
      </h1>

      <p className="mb-4">
        These Terms & Conditions govern the use of services and products offered by 
        <strong> InfraVibe Tech</strong>. By accessing our website or making a purchase, 
        you agree to comply with these terms in accordance with the applicable laws of India.
      </p>

      <p className="mb-4">
        InfraVibe Tech operates from Bhankharpur, Punjab – 140201, India. 
        GSTIN: 03GTXPK5286G1Z1.
      </p>

      <h2 className="text-lg font-medium mt-6 mb-2 text-gray-900">
        Our Services
      </h2>
      <p className="mb-4">
        We provide digital services (website development, SEO, social media marketing, 
        branding) and technical services (laptop/PC repair, sales, rental, AMC support). 
        Service timelines depend on project scope, client approvals, and required inputs.
      </p>

      <h2 className="text-lg font-medium mt-6 mb-2 text-gray-900">
        Orders & Payments
      </h2>
      <p className="mb-4">
        All orders are subject to product availability and confirmation. 
        Prices are listed in INR and may change without prior notice. 
        Payment must be completed as per the invoice terms agreed at the time of purchase. 
        For digital projects, advance payment may be required before work begins.
      </p>

      <h2 className="text-lg font-medium mt-6 mb-2 text-gray-900">
        Product Warranty
      </h2>
      <p className="mb-4">
        Warranty for hardware products is provided strictly as per the 
        manufacturer’s policy. Refurbished products may carry limited 
        seller warranty only if explicitly mentioned at the time of sale.
      </p>

      <h2 className="text-lg font-medium mt-6 mb-2 text-gray-900">
        Intellectual Property
      </h2>
      <p className="mb-4">
        All website content, logos, branding elements, and service materials 
        are the intellectual property of InfraVibe Tech. Unauthorized use, 
        reproduction, or distribution is strictly prohibited.
      </p>

      <h2 className="text-lg font-medium mt-6 mb-2 text-gray-900">
        Limitation of Liability
      </h2>
      <p className="mb-4">
        InfraVibe Tech shall not be liable for any indirect, incidental, 
        or consequential damages arising from the use of our products or services. 
        Our total liability is limited to the amount paid for the specific 
        product or service purchased.
      </p>

      <h2 className="text-lg font-medium mt-6 mb-2 text-gray-900">
        Dispute Resolution
      </h2>
      <p className="mb-4">
        Any disputes arising out of transactions or services shall be 
        subject to the jurisdiction of courts located in Punjab, India.
      </p>

      <h2 className="text-lg font-medium mt-6 mb-2 text-gray-900">
        Updates to Terms
      </h2>
      <p className="mb-4">
        We reserve the right to modify these Terms & Conditions at any time. 
        Continued use of our website or services indicates acceptance of 
        the updated terms.
      </p>

      <h2 className="text-lg font-medium mt-6 mb-2 text-gray-900">
        Contact Information
      </h2>
      <p className="mb-4">
        For any queries regarding these Terms & Conditions, please contact us at:
        <br />
        <strong>info@infravibetech.com</strong>
      </p>

      <p className="mt-8 text-xs text-gray-500">
        Last Updated: {new Date().toLocaleDateString()}
      </p>

    </div>
  );
}
