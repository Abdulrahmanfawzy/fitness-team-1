import { Mail, MapPin, Phone, Send } from "lucide-react";
import { FOOTER_CONTACT_ITEMS } from "@/lib/constants/footer/footer.constants";

const iconByKind = {
  location: <MapPin size={16} />,
  email: <Mail size={16} />,
  phone: <Phone size={16} />,
};

export default function FooterContact() {
  return (
    <div>
      <h3 className="type-title-s weight-semibold">Contact</h3>
      <ul className="mt-4 space-y-3 text-text-secondary">
        {FOOTER_CONTACT_ITEMS.map((item) => (
          <li key={item.kind} className="flex items-center gap-2 type-body-m">
            {iconByKind[item.kind]} {item.value}
          </li>
        ))}
      </ul>

      <form
        className="mt-5 flex items-center gap-2"
        onSubmit={(event) => event.preventDefault()}
      >
        <input
          className="h-10 w-full rounded-lg border border-border-subtle bg-surface-card px-3 text-sm text-text-primary placeholder:text-text-secondary focus:outline-none"
          placeholder="Enter your email"
          type="email"
        />
        <button
          aria-label="Send"
          className="btn-cta inline-flex h-10 w-10 items-center justify-center rounded-lg"
          type="submit"
        >
          <Send size={16} />
        </button>
      </form>
    </div>
  );
}
