"use client";

import React from "react";
import Hero from "@/components/home/Hero";
import ManyPathways from "@/components/home/ManyPathways";
import HowItWorks from "@/components/home/HowItWorks";
import Stories from "@/components/home/Stories";
import Stats from "@/components/home/Stats";
import YouthHub from "@/components/home/YouthHub";
import KnowYourRights from "@/components/home/KnowYourRights";
import WhatWillYouDo from "@/components/home/WhatWillYouDo";

export default function HomePage() {
  return (
    <div className="bg-white ddjc-home">
      <Hero />
      <ManyPathways />
      <HowItWorks />
      <Stories />
      <Stats />
      <YouthHub />
      <KnowYourRights />
      <WhatWillYouDo />
    </div>
  );
}
