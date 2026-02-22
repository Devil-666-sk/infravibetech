"use client";

import { useRouter } from "next/navigation";
import { X } from "lucide-react";

export default function ReturnRefundPolicy() {
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
        Return & Refund Policy
      </h1>

      <p className="mb-4">
        This Return & Refund Policy applies to products purchased from 
        <strong> InfraVibe Tech</strong>. By placing an order, you agree to 
        the terms stated below.
      </p>

      <h2 className="text-lg font-medium mt-6 mb-2 text-gray-900">
        Eligibility for Return
      </h2>
      <p className="mb-4">
        Returns are accepted only in case of physically damaged products 
        received at the time of delivery. The issue must be reported 
        within 48 hours of delivery via email.
      </p>

      <h2 className="text-lg font-medium mt-6 mb-2 text-gray-900">
        Mandatory Unboxing Video Proof
      </h2>
      <p className="mb-4">
        To claim a return or refund, the customer must provide a clear and 
        uninterrupted unboxing video showing the package being opened from 
        the sealed condition. The video must clearly display:
      </p>

      <ul className="list-disc pl-6 mb-4 space-y-1">
        <li>Outer packaging condition</li>
        <li>Shipping label details</li>
        <li>Product condition at the time of opening</li>
      </ul>

      <p className="mb-4">
        Claims without proper unboxing video proof will not be eligible 
        for return or refund consideration.
      </p>

      <h2 className="text-lg font-medium mt-6 mb-2 text-gray-900">
        Non-Returnable Items
      </h2>
      <ul className="list-disc pl-6 mb-4 space-y-1">
        <li>Products damaged after successful delivery</li>
        <li>Used, activated, or altered products</li>
        <li>Customized orders</li>
        <li>Digital or service-based work once initiated</li>
      </ul>

      <h2 className="text-lg font-medium mt-6 mb-2 text-gray-900">
        Inspection & Approval
      </h2>
      <p className="mb-4">
        Once the returned product is received, it will be inspected for 
        eligibility. InfraVibe Tech reserves the right to approve or 
        reject the return request based on inspection findings.
      </p>

      <h2 className="text-lg font-medium mt-6 mb-2 text-gray-900">
        Refund Process
      </h2>
      <p className="mb-4">
        If approved, the refund will be processed within 5–7 business days 
        through the original payment method. Processing time may vary 
        depending on the payment provider or bank.
      </p>

      <h2 className="text-lg font-medium mt-6 mb-2 text-gray-900">
        Contact for Return Requests
      </h2>
      <p className="mb-4">
        All return or refund requests must be submitted via email at:
        <br />
        <strong>info@infravibetech.com</strong>
      </p>

      <h2 className="text-lg font-medium mt-6 mb-2 text-gray-900">
        Important Note
      </h2>
      <p className="mb-4">
        InfraVibe Tech reserves the right to reject any return request 
        that does not meet the above conditions. This policy is designed 
        to protect both customers and the company from fraudulent claims.
      </p>

      <p className="mt-8 text-xs text-gray-500">
        Last Updated: {new Date().toLocaleDateString()}
      </p>

    </div>
  );
}
