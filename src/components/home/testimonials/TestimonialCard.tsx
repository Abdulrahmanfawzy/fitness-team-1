import { Star } from "lucide-react";
import type { Testimonial } from "@/lib/constants/home/testimonials.constants";

type TestimonialCardProps = { testimonial: Testimonial };

export default function TestimonialCard({ testimonial }: TestimonialCardProps) {
  return (
    <article className="flex flex-col gap-4 rounded-2xl border border-border bg-raised p-6">
      <div className="flex gap-1">
        {Array.from({ length: testimonial.rating }).map((_, i) => (
          <Star key={i} size={18} className="fill-primary text-primary" />
        ))}
      </div>
      <p className="flex-1 text-lg text-left leading-6 text-foreground/80">
        {testimonial.text}
      </p>
      <div className="flex items-center gap-3">
        <img
          src={testimonial.image}
          alt={testimonial.name}
          className="h-12 w-12 rounded-full object-cover"
        />
        <span className="text-sm font-semibold text-white">
          {testimonial.name}
        </span>
      </div>
    </article>
  );
}
