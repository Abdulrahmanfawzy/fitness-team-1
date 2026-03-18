import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { contactSchema } from "@/lib/schemas/contactSchema";
import type z from "zod";

const SUBJECTS = [
  "General Inquiry",
  "Booking Issue",
  "Trainer Request",
  "Refund / Cancellation",
  "Technical Support",
  "Other",
];

export type ContactFormData = z.infer<typeof contactSchema>;
export const ContactForm: React.FC = () => {

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    mode: "onSubmit",          // 👈 يظهر errors بعد submit بس
    reValidateMode: "onChange" // 👈 بعد ما يظهر error يبدأ يتصلح live
  });

  const onSubmit = async (data: ContactFormData) => {
    console.log("Form Data:", data);
    await new Promise((r) => setTimeout(r, 1600));

    setSent(true);
    reset();
  };

  const [sent, setSent] = useState(false);

  if (sent) {
    return (
      <div className="flex flex-col items-center justify-center py-10 gap-3 animate-fadeIn">
        <div className="w-12 h-12 rounded-full bg-green-500/20 border border-green-500/40 flex items-center justify-center text-green-400 text-xl">
          ✓
        </div>
        <p className="text-white font-semibold text-base">Message Sent!</p>
        <p className="text-gray-500 text-sm text-center">
          We'll get back to you within 24 hours.
        </p>
        <button
          onClick={() => { setSent(false); }}
          className="mt-2 text-xs text-red-400 hover:text-red-300 transition-colors underline underline-offset-2"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="flex flex-col gap-3 ">
        {/* Name + Email row */}
        <div className="grid grid-cols-2 gap-3">

          <div className="flex flex-col gap-1.5">
            <label className="text-[11px] uppercase tracking-widest text-gray-500 font-semibold">Name</label>
            <input
              {...register("name")}
              placeholder="Samy Ahmed"
              className="w-full px-3 py-2.5 rounded-lg bg-[#1a1a1a] border border-[#2e2e2e]
              focus:border-red-500/60 focus:outline-none text-sm text-gray-200
              placeholder:text-gray-700 transition-colors"
            />
            {errors.name && (
              <p className="text-red-500 text-sm">{errors.name.message}</p>
            )}
          </div>

          <div className="flex flex-col gap-1.5">
            <label className="text-[11px] uppercase tracking-widest text-gray-500 font-semibold">Email</label>
            <input
              {...register("email")}
              type="email"
              placeholder="samy@example.com"
              className="w-full px-3 py-2.5 rounded-lg bg-[#1a1a1a] border border-[#2e2e2e]
              focus:border-red-500/60 focus:outline-none text-sm text-gray-200
              placeholder:text-gray-700 transition-colors"
            />
            {errors.email && (
              <p className="text-red-500 text-sm">{errors.email.message}</p>
            )}
          </div>
        </div>

        {/* Subject */}
        <div className="flex flex-col gap-1.5">
          <label className="text-[11px] uppercase tracking-widest text-gray-500 font-semibold">Subject</label>
          <select
            name="subject"
            className="w-full px-3 py-2.5 rounded-lg bg-[#1a1a1a] border border-[#2e2e2e]
            focus:border-red-500/60 focus:outline-none text-sm transition-colors
            text-gray-700 [&:not(:placeholder-shown)]:text-gray-200"
          >
            <option value="" disabled>Select a topic</option>
            {SUBJECTS.map((s) => (
              <option key={s} value={s} className="bg-[#1a1a1a] text-gray-200">{s}</option>
            ))}
          </select>
        </div>

        {/* Message */}
        <div className="flex flex-col gap-1.5">
          <label className="text-[11px] uppercase tracking-widest text-gray-500 font-semibold">Message</label>
          <textarea
            {...register("message")}
            placeholder="How can we help you...?"
            rows={4}
            className="w-full px-3 py-2.5 rounded-lg bg-[#1a1a1a] border border-[#2e2e2e]
            focus:border-red-500/60 focus:outline-none text-sm text-gray-200
            placeholder:text-gray-700 transition-colors resize-none"
          />
          {errors.message && (
            <p className="text-red-500 text-sm">{errors.message.message}</p>
          )}
        </div>

        {/* Submit */}
        <button
          disabled={isSubmitting}
          className={`w-full py-3 rounded-lg font-semibold text-sm text-white transition-all
            ${isSubmitting ? "bg-red-800/60" : "bg-red-500 hover:bg-red-600"}`}
        >
          {isSubmitting ? "Sending..." : "Send Message"}
        </button>
      </div>
    </form >
  );
};
