import FooterBrand from "./FooterBrand";
import FooterLinksColumn from "./FooterLinksColumn";
import FooterSpecialties from "./FooterSpecialties";
import FooterContact from "./FooterContact";
import FooterBottom from "./FooterBottom";
import {
  FOOTER_QUICK_LINKS,
  FOOTER_SPECIALTIES,
} from "@/lib/constants/footer/footer.constants";

export default function Footer() {
  return (
    <footer className="border-t border-border-subtle bg-bg-primary">
      <div className="mx-auto max-w-7xl px-6 py-12">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <FooterBrand />
          <FooterLinksColumn title="Quick Links" links={FOOTER_QUICK_LINKS} />
          <FooterSpecialties title="Specialties" items={FOOTER_SPECIALTIES} />
          <FooterContact />
        </div>
        <FooterBottom />
      </div>
    </footer>
  );
}
