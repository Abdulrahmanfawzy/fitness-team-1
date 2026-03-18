import headerBg from "@/assets/home/headerbg.png";
import HeaderH1 from "./HeaderH1";
import HeaderP from "./HeaderP";
import HeaderActions from "./HeaderActions";
import HeaderStatus from "./HeaderStatus";
import SectionHighlight from "../common/SectionHighlight";

export default function Header() {
  return (
    <div
      className="relative flex min-h-screen items-center justify-center overflow-hidden  bg-center text-4xl font-bold text-white"
      style={{ backgroundImage: `url(${headerBg})` }}
    >
      <div className="absolute inset-0 bg-bg-primary/80" />
      <div className="z-10 flex w-full max-w-4xl flex-col items-start px-2 py-5">
        <SectionHighlight text="+50 Certified Elite Trainers" />
        <HeaderH1 />
        <HeaderP />
        <HeaderActions />
        <HeaderStatus />
      </div>
    </div>
  );
}
