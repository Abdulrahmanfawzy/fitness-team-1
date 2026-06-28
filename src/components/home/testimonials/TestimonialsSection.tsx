import SectionHighlight from "@/components/common/SectionHighlight";
import HeaderH2 from "../HeaderH2";
import TestimonialCard from "./TestimonialCard";
import { TESTIMONIALS } from "@/lib/constants/home/testimonials.constants";

export default function TestimonialsSection() {
  const sectionBackgroundStyle = {
    backgroundColor: "var(--dark-mode-surfaces-bg-cards-bg-primary, #121212)",
    backgroundBlendMode: "overlay" as const,
    backgroundImage:
      "linear-gradient(180deg, rgba(255, 77, 77, 0.8) 0%, #0A0A0A 100%)",
  };

  return (
    <section
      style={sectionBackgroundStyle}
      className="w-full px-4 py-14 md:py-20"
    >
      <div className="mx-auto flex max-w-6xl flex-col items-center text-center">
        <SectionHighlight text="Testimonials" />

        <HeaderH2 text="Proven Results, " highlight="Trusted Voices" />

        <div className="mt-12 grid w-full grid-cols-1 gap-6 md:grid-cols-3">
          {TESTIMONIALS.map((testimonial) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
}
