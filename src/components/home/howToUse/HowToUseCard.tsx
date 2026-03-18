import type { HowToUseStep } from "@/lib/constants/home/howToUse.constants";

type HowToUseCardProps = {
  step: HowToUseStep;
};

export default function HowToUseCard({ step }: HowToUseCardProps) {
  const Icon = step.icon;

  return (
    <article className="relative rounded-md border border-white/10 bg-card px-4 py-5 md:px-5 md:py-6 text-center">
      <div className="relative inline-flex p-2 items-center justify-center rounded-lg border border-cta-primary/30 bg-cta-primary/12 text-cta-primary">
        <Icon size={30} />
        <span className="absolute -right-2 -top-2 inline-flex h-5 min-w-5 items-center justify-center rounded-full bg-cta-primary px-1 text-[10px] font-bold text-white">
          {step.id}
        </span>
      </div>

      <h3 className="mt-4 type-title-m weight-semibold text-text-primary">
        {step.title}
      </h3>
      <p className="mt-3 type-body-s leading-6 text-text-secondary">
        {step.description}
      </p>
    </article>
  );
}
