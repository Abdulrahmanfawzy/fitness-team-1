import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import SectionHighlight from "@/components/common/SectionHighlight";
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
    <section className="w-full bg-[#0a0a0a] px-4 py-12 md:py-20">
      <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
        <SectionHighlight text={CTA_SECTION.badge} />
        <h2 className="mt-6 text-3xl sm:text-5xl font-bold leading-tight text-white md:text-6xl">
          {CTA_SECTION.title}{" "}
          <span className="text-primary">{CTA_SECTION.titleHighlight}</span>
        </h2>
        <p className="mt-4 sm:mt-6 text-base sm:text-lg text-zinc-400 px-2">
          {CTA_SECTION.description}
        </p>
        <div className="mt-6 sm:mt-8 w-full max-w-xs sm:max-w-md grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
          <Button
            className="mt-0 rounded-lg"
            text={CTA_SECTION.buttonPrimary.text}
            onClick={handlePrimary}
            icon={<ArrowRight size={18} />}
            width="w-full"
          />
          <Button
            className="mt-0 rounded-lg"
            text={CTA_SECTION.buttonSecondary.text}
            onClick={() => navigate(CTA_SECTION.buttonSecondary.action)}
            variant="outline"
            width="w-full"
          />
        </div>
        <div className="mt-6 sm:mt-8 flex flex-col gap-2 text-sm text-zinc-400 sm:flex-row sm:justify-center sm:gap-4">
          {CTA_SECTION.features.map((feature, index) => (
            <div key={index} className="flex items-center justify-center gap-2">
              <span>✓</span>
              <span>{feature}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
