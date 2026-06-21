import { ContactForm } from "@/components/contact/ContactForm";
import { ContactInfoCard } from "@/components/contact/ContactInfoCard";
import { FaqItem } from "@/components/contact/FaqItem";
import { FAQS, INFO_CARDS } from "@/lib/constants/contactData";

const ContactUs = () => {
  return (
    <div className="min-h-screen bg-background flex flex-col items-center px-4 py-20">
      <div className="w-full max-w-4xl flex flex-col gap-5">
        <div className="bg-raised rounded-2xl p-3.5 border border-border shadow-2xl">
          <div className="bg-base rounded-xl p-5 border border-border">
            <div className="my-8">
              <h1 className="text-white font-black text-xl tracking-tight uppercase">
                Get In Touch
              </h1>
              <p className="text-muted-foreground text-xs uppercase tracking-widest mt-1">
                Questions? Issues? We're here to help.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="md:col-span-2">
                <ContactForm />
              </div>
              <div className="flex flex-col gap-2.5">
                {INFO_CARDS.map((card) => (
                  <ContactInfoCard key={card.label} {...card} />
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-3 pt-5">
          <h2 className="text-white font-bold text-base text-center tracking-tight">
            Frequently Asked
          </h2>
          <div className="flex flex-col gap-2">
            {FAQS.map((faq) => (
              <FaqItem
                key={faq.question}
                question={faq.question}
                answer={faq.answer}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
