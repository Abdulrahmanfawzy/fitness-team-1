import type { WhyEliteSyncFeature } from "@/lib/constants/home/whyEliteSync.constants";

type WhyEliteSyncFeatureCardProps = {
  feature: WhyEliteSyncFeature;
};

export default function WhyEliteSyncFeatureCard({
  feature,
}: WhyEliteSyncFeatureCardProps) {
  const Icon = feature.icon;

  return (
    <article className="flex items-start gap-3">
      <div className="mt-1 flex p-4 shrink-0 items-center justify-center rounded-xl border border-primary/35 bg-primary/12 text-primary">
        <Icon size={40} />
      </div>

      <div>
        <h3 className="text-xl font-semibold leading-tight text-white">
          {feature.title}
        </h3>
        <p className="mt-1 text-xs leading-7 text-zinc-400">
          {feature.description}
        </p>
      </div>
    </article>
  );
}
