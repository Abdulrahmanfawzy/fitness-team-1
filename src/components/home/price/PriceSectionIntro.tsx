import SectionHighlight from "@/components/common/SectionHighlight";
import HeaderH2 from "../HeaderH2";
import HeaderP from "../HeaderP";

export default function PriceSectionIntro() {
  return (
    <div className="flex flex-col items-center gap-3">
      <SectionHighlight text="Pricing" />
      <HeaderH2 text="Simple, " highlight="Transparent Pricing" />
      <HeaderP textAlign="center" className="text-zinc-400 max-w-lg">
        Choose the plan that fits your goals. No hidden fees, no contracts.
        Cancel anytime.
      </HeaderP>
    </div>
  );
}
