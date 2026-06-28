import sectionImage from "@/assets/home/section.png";
import HeaderP from "../HeaderP";
import WhyEliteSyncFeatureCard from "./WhyEliteSyncFeatureCard";
import { WHY_ELITE_SYNC_FEATURES } from "@/lib/constants/home/whyEliteSync.constants";

export default function WhyEliteSyncSection() {
  return (
    <section className="w-full bg-darkGrey-color px-4 py-14 md:py-20">
      <div className="mx-auto grid w-full max-w-6xl gap-8 rounded-2xl md:grid-cols-[1.5fr_1fr] md:gap-7 md:p-8 lg:p-9">
        <div className="flex flex-col">
          <span className="inline-flex w-fit items-center rounded-xl border border-primary/70 bg-primary/15 px-3 py-1 text-sm font-semibold uppercase tracking-wide text-primary">
            Why EliteSync
          </span>

          <h3 className="mt-5 max-w-130 text-[36px] font-bold leading-[1.03] tracking-tight text-white md:text-[52px]">
            The Platform Built for
            <span className="text-primary"> Serious Results</span>
          </h3>

          <HeaderP className="mt-6 max-w-140 text-zinc-400 md:text-sm">
            We&apos;ve engineered every detail of EliteSync to remove friction
            from your fitness journey - from finding the right trainer to
            tracking your progress over time.
          </HeaderP>

          <div className="mt-8 grid grid-cols-1 gap-x-8 gap-y-7 sm:grid-cols-2">
            {WHY_ELITE_SYNC_FEATURES.map((feature) => (
              <WhyEliteSyncFeatureCard key={feature.title} feature={feature} />
            ))}
          </div>
        </div>

        <div className="relative  overflow-hidden rounded-2xl border border-white/10 bg-card ">
          <img
            src={sectionImage}
            alt="Trainer helping a client during deadlift session"
            className="h-full w-full scale-105 object-cover"
            loading="lazy"
          />

          <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-black/45 via-black/20 to-transparent" />
        </div>
      </div>
    </section>
  );
}
