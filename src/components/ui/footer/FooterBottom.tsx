import {
  FOOTER_COPYRIGHT,
  FOOTER_POLICY_LINKS,
} from "@/lib/constants/footer/footer.constants";

export default function FooterBottom() {
  return (
    <div className="mt-10 border-t border-border-subtle pt-6">
      <div className="flex flex-col gap-4 text-text-secondary sm:flex-row sm:items-center sm:justify-between">
        <p className="type-body-m">&copy; {FOOTER_COPYRIGHT}</p>
        <div className="flex items-center gap-6">
          {FOOTER_POLICY_LINKS.map((item) => (
            <a
              key={item.name}
              className="type-body-m hover:text-text-primary"
              href={item.href}
            >
              {item.name}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
