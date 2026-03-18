import { Link } from "react-router-dom";
import type { FooterLinkItem } from "@/lib/constants/footer/footer.constants";

type FooterLinksColumnProps = {
  title: string;
  links: FooterLinkItem[];
};

export default function FooterLinksColumn({
  title,
  links,
}: FooterLinksColumnProps) {
  return (
    <div>
      <h3 className="type-title-s weight-semibold">{title}</h3>
      <ul className="mt-4 space-y-3">
        {links.map((item) => (
          <li key={item.name}>
            <Link
              className="type-body-m text-text-secondary hover:text-text-primary"
              to={item.href}
            >
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
