
"use client";

import dynamic from "next/dynamic";
import HeroSliderSkeleton from "@/components/home/hero-slider-skeleton";

const HeroSlider = dynamic(
  () => import("@/components/home/hero-slider"),
  {
    ssr: false,
    loading: () => <HeroSliderSkeleton />,
  }
);

export default function HeroSliderWrapper() {
  return <HeroSlider />;
}
