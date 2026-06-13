import PricePackages from "./PricePackages";
import PriceSectionIntro from "./PriceSectionIntro";

export default function PriceSection() {
  return (
    <section className="relative w-full overflow-hidden bg-[#0d0d0d] px-4 py-16 md:py-24">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-[#0a0a0a] to-transparent" />

      <div className="pointer-events-none absolute inset-0 flex items-start justify-center pt-10">
        <div className="h-100 w-150 rounded-full bg-primary/8 blur-[100px]" />
      </div>

      <div className="relative container mx-auto flex flex-col items-center text-center">
        <PriceSectionIntro />
        <PricePackages />
      </div>
    </section>
  );
}
