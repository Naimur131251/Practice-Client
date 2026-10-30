
"use client";

import * as React from "react";
import Autoplay from "embla-carousel-autoplay";
import Link from "next/link";
import {
  ArrowUpRight,
  Aperture,
} from "lucide-react";
import type { CarouselApi } from "@/components/ui/carousel";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const slides = [
  {
    eyebrow: "YOUR CREATIVE SPACE AWAITS",
    title: "Where Your",
    highlight: "Vision Comes",
    ending: "to Life.",
    description:
      "Discover extraordinary studios built for photographers, filmmakers, creators, and dreamers.",
    image:
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=2200&q=85",
    category: "Creative Workspaces",
  },
  {
    eyebrow: "MADE FOR YOUR NEXT BIG IDEA",
    title: "Find Your",
    highlight: "Perfect",
    ending: "Frame.",
    description:
      "Find inspiring photography studios and professional creative spaces for your next big project.",
    image:
      "https://images.unsplash.com/photo-1492619375914-88005aa9e8fb?auto=format&fit=crop&w=2200&q=85",
    category: "Photography Studios",
  },
  {
    eyebrow: "TURN YOUR SPACE INTO OPPORTUNITY",
    title: "Your Space.",
    highlight: "Their Next",
    ending: "Masterpiece.",
    description:
      "Share your studio with creators, showcase your space, and turn your creative environment into opportunity.",
    image:
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=2200&q=85",
    category: "Host With StudioSpace",
  },
];

export default function HeroSlider() {
  const [api, setApi] = React.useState<CarouselApi>();
  const [activeIndex, setActiveIndex] = React.useState(0);
  const [autoplayPlugin] = React.useState(() =>
    Autoplay({
      delay: 5000,
      stopOnInteraction: false,
      stopOnMouseEnter: true,
    })
  );

  React.useEffect(() => {
    if (!api) return;

    const updateSlide = () => {
      setActiveIndex(api.selectedScrollSnap());
    };

    updateSlide();
    api.on("select", updateSlide);
    api.on("reInit", updateSlide);

    return () => {
      api.off("select", updateSlide);
      api.off("reInit", updateSlide);
    };
  }, [api]);

  return (
    <section
      aria-label="Discover StudioSpace"
      className="relative overflow-hidden bg-studio-bg"
    >
      <Carousel
        setApi={setApi}
        opts={{
          loop: true,
          align: "start",
        }}
        plugins={[autoplayPlugin]}
        className="w-full"
      >
        <CarouselContent className="ml-0">
          {slides.map((slide) => (
            <CarouselItem key={slide.category} className="pl-0">
              <div className="relative min-h-162.5 overflow-hidden sm:min-h-175 lg:min-h-185">
                {/* Background image */}
                <div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{
                    backgroundImage: `url("${slide.image}")`,
                  }}
                  role="img"
                  aria-label={slide.category}
                />

                {/* Dark overlay */}
                <div className="absolute inset-0 bg-linear-to-r from-studio-bg via-studio-bg/85 to-studio-bg/25" />
                <div className="absolute inset-0 bg-linear-to-t from-studio-bg via-transparent to-studio-bg/20" />

                {/* Orange glow */}
                <div className="pointer-events-none absolute -left-32 top-1/4 size-96 rounded-full bg-studio-orange/10 blur-[120px]" />

                {/* Content */}
                <div className="relative mx-auto flex min-h-162.5 max-w-7xl items-center px-5 pb-28 pt-16 sm:min-h-175 sm:px-8 lg:min-h-185 lg:px-12">
                  <div className="max-w-3xl">
                    <div className="mb-7 flex items-center gap-3">
                      <span className="flex size-10 items-center justify-center rounded-xl border border-studio-orange/30 bg-studio-orange/10 text-studio-orange">
                        <Aperture size={21} />
                      </span>

                      <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-studio-orange sm:text-xs sm:tracking-[0.24em]">
                        {slide.eyebrow}
                      </span>
                    </div>

                    <h1 className="text-5xl font-bold leading-[1.06] tracking-tight text-studio-text sm:text-6xl md:text-7xl lg:text-[88px]">
                      {slide.title}
                      <br />
                      <span className="text-studio-orange">
                        {slide.highlight}
                      </span>
                      <br />
                      {slide.ending}
                    </h1>

                    <p className="mt-7 max-w-xl text-base leading-7 text-studio-muted sm:text-lg sm:leading-8">
                      {slide.description}
                    </p>

                    <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                      <Link
                        href="/studios"
                        className="inline-flex min-h-14 items-center justify-center gap-3 rounded-xl bg-studio-orange px-6 py-4 text-sm font-bold text-studio-bg shadow-xl shadow-studio-orange/15 transition-all hover:-translate-y-0.5 hover:bg-studio-orange-hover"
                      >
                        Explore Studios
                        <ArrowUpRight size={19} />
                      </Link>

                      <Link
                        href="/studios"
                        className="inline-flex min-h-14 items-center justify-center rounded-xl border border-white/15 bg-white/5 px-6 py-4 text-sm font-semibold text-studio-text backdrop-blur-md transition-colors hover:border-studio-orange/50 hover:bg-studio-orange/10"
                      >
                        Host Your Space
                        <ArrowUpRight
                          size={18}
                          className="ml-2 text-studio-orange"
                        />
                      </Link>
                    </div>

                    <div className="mt-12 flex flex-wrap gap-x-6 gap-y-3 border-t border-white/10 pt-6">
                      <span className="flex items-center gap-2 text-sm text-studio-muted">
                        <span className="size-2 rounded-full bg-studio-orange" />
                        Spaces for every vision
                      </span>

                      <span className="flex items-center gap-2 text-sm text-studio-muted">
                        <span className="size-2 rounded-full bg-studio-orange" />
                        Made for creators
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>

        {/* Controls */}
        <div className="absolute bottom-7 left-5 z-20 flex items-center gap-3 sm:bottom-9 sm:left-8 lg:left-[max(calc((100vw-80rem)/2+3rem),3rem)]">
          <CarouselPrevious className="static size-11 translate-y-0 rounded-full border-white/15 bg-studio-surface/80 text-studio-text hover:border-studio-orange hover:bg-studio-orange hover:text-studio-bg" />

          {/* Custom pagination */}
          <div className="flex items-center gap-2 px-1">
            {slides.map((slide, index) => (
              <button
                key={slide.category}
                type="button"
                aria-label={`Go to slide ${index + 1}`}
                aria-current={activeIndex === index ? "true" : undefined}
                onClick={() => api?.scrollTo(index)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  activeIndex === index
                    ? "w-7 bg-studio-orange"
                    : "w-2 bg-studio-muted/60 hover:bg-studio-text"
                }`}
              />
            ))}
          </div>

          <CarouselNext className="static size-11 translate-y-0 rounded-full border-white/15 bg-studio-surface/80 text-studio-text hover:border-studio-orange hover:bg-studio-orange hover:text-studio-bg" />

          <span className="ml-1 text-xs font-medium tabular-nums text-studio-muted">
            {String(activeIndex + 1).padStart(2, "0")} / 03
          </span>
        </div>

        {/* Slide category */}
        <div className="absolute bottom-10 right-8 z-10 hidden items-center gap-3 text-studio-text md:flex lg:right-[max(calc((100vw-80rem)/2+3rem),3rem)]">
          <span className="text-2xl font-bold">
            {String(activeIndex + 1).padStart(2, "0")}
          </span>
          <span className="h-px w-10 bg-studio-orange" />
          <span className="text-xs text-studio-muted">
            {slides[activeIndex].category}
          </span>
        </div>
      </Carousel>
    </section>
  );
}
