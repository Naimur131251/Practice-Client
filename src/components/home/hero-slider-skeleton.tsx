
export default function HeroSliderSkeleton() {
  return (
    <section
      aria-label="Loading featured studios"
      aria-busy="true"
      className="relative min-h-162.5 animate-pulse overflow-hidden bg-studio-bg sm:min-h-175 lg:min-h-185"
    >
      {/* Background image placeholder */}
      <div className="absolute inset-0 bg-linear-to-r from-studio-surface via-studio-bg to-studio-elevated/60" />

      {/* Orange ambient glow */}
      <div className="absolute -left-32 top-1/4 size-96 rounded-full bg-studio-orange/5 blur-[120px]" />

      <div className="relative mx-auto flex min-h-162.5 max-w-7xl items-center px-5 pb-24 pt-20 sm:min-h-175 sm:px-8 lg:min-h-185 lg:px-12">
        <div className="w-full max-w-3xl">
          {/* Eyebrow skeleton */}
          <div className="mb-7 flex items-center gap-3">
            <div className="size-10 rounded-xl bg-studio-elevated" />
            <div className="h-3 w-48 rounded-full bg-studio-elevated" />
          </div>

          {/* Headline skeleton */}
          <div className="space-y-4">
            <div className="h-12 w-[85%] rounded-lg bg-studio-elevated sm:h-16 md:h-20" />
            <div className="h-12 w-[72%] rounded-lg bg-studio-orange/20 sm:h-16 md:h-20" />
            <div className="h-12 w-[55%] rounded-lg bg-studio-elevated sm:h-16 md:h-20" />
          </div>

          {/* Description skeleton */}
          <div className="mt-7 max-w-xl space-y-3">
            <div className="h-4 w-full rounded-full bg-studio-elevated" />
            <div className="h-4 w-[88%] rounded-full bg-studio-elevated" />
            <div className="h-4 w-[60%] rounded-full bg-studio-elevated" />
          </div>

          {/* CTA skeleton */}
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <div className="h-14 w-full rounded-xl bg-studio-orange/30 sm:w-48" />
            <div className="h-14 w-full rounded-xl bg-studio-elevated sm:w-48" />
          </div>

          {/* Footer skeleton */}
          <div className="mt-12 flex gap-6 border-t border-studio-elevated pt-6">
            <div className="h-4 w-40 rounded-full bg-studio-elevated" />
            <div className="h-4 w-32 rounded-full bg-studio-elevated" />
          </div>
        </div>
      </div>

      {/* Slider controls skeleton */}
      <div className="absolute bottom-7 left-5 flex items-center gap-4 sm:left-8 lg:left-[max(calc((100vw-80rem)/2+3rem),3rem)]">
        <div className="size-11 rounded-full bg-studio-elevated" />
        <div className="h-2 w-20 rounded-full bg-studio-elevated" />
        <div className="size-11 rounded-full bg-studio-elevated" />
      </div>
    </section>
  );
}
