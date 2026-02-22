"use client";

import { useRouter } from "next/navigation";
import { X } from "lucide-react";

export default function OnlineShoppingPolicy() {
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
        Online Shopping Policy
      </h1>

      <p className="mb-4">
        This Online Shopping Policy applies to all product purchases made 
        through <strong>InfraVibe Tech</strong>. By placing an order, 
        you agree to the terms mentioned below.
      </p>

      <h2 className="text-lg font-medium mt-6 mb-2 text-gray-900">
        Product Availability
      </h2>
      <p className="mb-4">
        All products including laptops, accessories, and technical equipment 
        are subject to stock availability. We reserve the right to cancel 
        any order if a product is unavailable.
      </p>

      <h2 className="text-lg font-medium mt-6 mb-2 text-gray-900">
        Order Confirmation
      </h2>
      <p className="mb-4">
        Orders are confirmed only after successful payment verification. 
        You will receive confirmation via phone or email once your order 
        has been approved and processed.
      </p>

      <h2 className="text-lg font-medium mt-6 mb-2 text-gray-900">
        Pricing
      </h2>
      <p className="mb-4">
        All prices are listed in INR. While we make every effort to ensure 
        accurate pricing, we reserve the right to correct pricing errors 
        and cancel orders if necessary.
      </p>

      {/* ✅ Warranty Section Added */}
      <h2 className="text-lg font-medium mt-6 mb-2 text-gray-900">
        Warranty
      </h2>
      <p className="mb-4">
        All products sold by <strong>InfraVibe Tech</strong> are covered under 
        manufacturer warranty as per the respective brand’s terms and conditions. 
        Warranty service, repair, or replacement will be provided directly by the 
        authorized service center of the respective product brand.

        InfraVibe Tech does not provide independent warranty unless explicitly 
        mentioned on the product page. Customers are advised to retain the original 
        invoice for warranty claims.
      </p>

      <h2 className="text-lg font-medium mt-6 mb-2 text-gray-900">
        Shipping & Delivery
      </h2>
      <p className="mb-4">
        Delivery timelines may vary depending on location and courier partner. 
        Estimated delivery time will be communicated at the time of order confirmation.
      </p>

      <h2 className="text-lg font-medium mt-6 mb-2 text-gray-900">
        Order Cancellation
      </h2>
      <p className="mb-4">
        Orders can only be cancelled before dispatch. Once shipped, 
        cancellation is not permitted and the order will fall under our 
        Return & Refund Policy.
      </p>

      <h2 className="text-lg font-medium mt-6 mb-2 text-gray-900">
        Fraud Prevention
      </h2>
      <p className="mb-4">
        InfraVibe Tech reserves the right to cancel or hold any order 
        suspected of fraudulent activity or unauthorized payment usage.
      </p>

      <p className="mt-8 text-xs text-gray-500">
        Last Updated: {new Date().toLocaleDateString()}
      </p>

    </div>
  );
}
