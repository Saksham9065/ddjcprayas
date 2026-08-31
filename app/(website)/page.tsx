"use client";

import React from "react";
import Hero from "@/components/home/Hero";
import HowItWorksWithStats from "@/components/home/HowItWorksWithStats";
import Stories from "@/components/home/Stories";
import FriendsOfDDJC from "@/components/home/FriendsOfDDJC";

export default function HomePage() {
  return (
    <div className="bg-white ddjc-home">
      <Hero />
      <HowItWorksWithStats />
      <Stories />
      <FriendsOfDDJC />
    </div>
  );
}
