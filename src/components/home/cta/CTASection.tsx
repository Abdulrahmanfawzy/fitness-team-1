import { ArrowRight, CheckCircle2 } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Button from "@/components/common/Button";
import { CTA_SECTION } from "@/lib/constants/home/cta.constants";
import { useAuth } from "@/hooks/useAuth";
import { useBookingAuth } from "@/context/useBookingAuth";

export default function CTASection() {
  const navigate = useNavigate();
  const { isLoggedIn } = useAuth();
  const { openSheet } = useBookingAuth();

  const handlePrimary = () => {
    if (isLoggedIn) navigate(CTA_SECTION.buttonPrimary.action);
    else openSheet();
  };

  return (
    <section className="relative w-full overflow-hidden bg-[#0a0a0a] px-4 py-16 md:py-28">
      {/* Ambient glow */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
        <div className="h-125 w-175 rounded-full bg-primary/10 blur-[120px]" />
      </div>

      {/* Diagonal accent line */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -left-10 top-0 h-px w-[40%] rotate-20 bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
        <div className="absolute -right-10 bottom-0 h-px w-[40%] rotate-20 bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      </div>

      <div className="relative mx-auto flex max-w-3xl flex-col items-center text-center gap-6">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5">
          <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
          <span className="text-xs font-semibold uppercase tracking-widest text-primary">
            {CTA_SECTION.badge}
          </span>
        </div>

        {/* Heading */}
        <h2 className="text-4xl font-bold leading-[1.1] tracking-tight text-white sm:text-5xl md:text-6xl">
          {CTA_SECTION.title}{" "}
          <span className="relative inline-block text-primary">
            {CTA_SECTION.titleHighlight}
            <span className="absolute -bottom-1 left-0 h-0.75 w-full rounded-full bg-primary/50" />
          </span>
        </h2>

        {/* Description */}
        <p className="max-w-xl text-base text-zinc-400 sm:text-lg leading-relaxed">
          {CTA_SECTION.description}
        </p>

        {/* Buttons */}
        <div className="flex w-full max-w-sm flex-col gap-3 sm:max-w-none sm:flex-row sm:justify-center">
          <Button
            className="mt-0 rounded-xl px-3"
            text={CTA_SECTION.buttonPrimary.text}
            onClick={handlePrimary}
            icon={<ArrowRight size={18} />}
            width="w-full sm:w-auto"
          />
          <Button
            className="mt-0 rounded-xl px-3"
            text={CTA_SECTION.buttonSecondary.text}
            onClick={() => navigate(CTA_SECTION.buttonSecondary.action)}
            variant="outline"
            width="w-full sm:w-auto"
          />
        </div>

        {/* Feature pills */}
        <div className="flex flex-wrap justify-center gap-3 pt-2">
          {CTA_SECTION.features.map((feature) => (
            <div
              key={feature}
              className="flex items-center gap-1.5 rounded-full bg-white/5 border border-white/10 px-3 py-1.5">
              <CheckCircle2 size={13} className="text-primary shrink-0" />
              <span className="text-xs text-zinc-400">{feature}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
