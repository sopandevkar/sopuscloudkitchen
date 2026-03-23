import React from "react";
import PreOrderHero from "@/components/PreOrder/PreOrderHero";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pre-Order Biryani | Sopu's Cloud Kitchen - Hyderabadi Chicken Dum Biryani @ ₹99",
  description: "Pre-book your authentic Hyderabadi Chicken Dum Biryani at just ₹99 with FREE delivery! Limited slots available. Campus delivery for MIT College students and home delivery available.",
};

export default function PreOrderPage() {
  return (
    <main>
      <PreOrderHero />
    </main>
  );
}
