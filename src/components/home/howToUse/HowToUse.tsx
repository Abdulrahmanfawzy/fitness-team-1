import SectionHighlight from "@/components/common/SectionHighlight";
import HeaderP from "../HeaderP";
import HowToUseCard from "./HowToUseCard";
import { HOW_TO_USE_STEPS } from "@/lib/constants/home/howToUse.constants";

export default function HowToUse() {
  return (
    <section className="mx-auto flex w-full max-w-6xl flex-col items-center justify-center px-3 py-12 md:py-16">
      <SectionHighlight text="How it Works" />
      <h2 className="mt-4 text-center text-h1 font-bold">
        Three Steps to Your Best Self
      </h2>
      <HeaderP textAlign="center" className="mt-4 text-muted-foreground">
        We've made the booking process frictionless so you can focus on what
        matters — your training.
      </HeaderP>

      <div className="mt-10 grid w-full grid-cols-1 gap-4 md:grid-cols-3">
        {HOW_TO_USE_STEPS.map((step) => (
          <HowToUseCard key={step.id} step={step} />
        ))}
      </div>
    </section>
  );
}
