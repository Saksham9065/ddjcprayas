"use client";

import React from "react";
import Hero from "@/components/home/Hero";
import HowItWorksWithStats from "@/components/home/HowItWorksWithStats";
import Stories from "@/components/home/Stories";
import FriendsOfDDJC from "@/components/home/FriendsOfDDJC";
import AnniversaryPopup from "@/components/home/AnniversaryPopup";

export default function HomePage() {
  return (
    <div className="bg-white ddjc-home">
      <AnniversaryPopup />
      <Hero />
      <HowItWorksWithStats />
      <Stories />
      <FriendsOfDDJC />
    </div>
  );
}
