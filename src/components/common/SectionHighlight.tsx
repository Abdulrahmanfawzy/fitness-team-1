type SectionHighlightProps = {
  text: string;
};

export default function SectionHighlight({ text }: SectionHighlightProps) {
  return (
    <span className="border border-primary bg-primary/20 text-primary px-4 py-1 rounded-xl  text-sm md:text-lg font-semibold uppercase">
      {text}
    </span>
  );
}
