import Logo from "@/components/common/Logo";
import {
  FaFacebookF,
  FaInstagram,
  FaTiktok,
  FaXTwitter,
} from "react-icons/fa6";
import SocialButton from "./SocialButton";
import {
  FOOTER_DESCRIPTION,
  FOOTER_SOCIAL_ITEMS,
} from "@/lib/constants/footer/footer.constants";

const iconByName = {
  Instagram: <FaInstagram size={18} />,
  TikTok: <FaTiktok size={18} />,
  Facebook: <FaFacebookF size={18} />,
  X: <FaXTwitter size={18} />,
};

export default function FooterBrand() {
  return (
    <div>
      <Logo />
      <p className="mt-5 max-w-xs type-body-m text-text-secondary">
        {FOOTER_DESCRIPTION}
      </p>
      <div className="mt-5 flex items-center gap-3">
        {FOOTER_SOCIAL_ITEMS.map((item) => (
          <SocialButton key={item.name} ariaLabel={item.name} href={item.href}>
            {iconByName[item.name]}
          </SocialButton>
        ))}
      </div>
    </div>
  );
}
