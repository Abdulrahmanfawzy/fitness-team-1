import React from "react";

interface HeaderH2Props {
  text: string;
  highlight: string;
}

export default function HeaderH2({ text, highlight }: HeaderH2Props) {
  return (
    <h2 className="text-2xl md:text-5xl font-bold leading-tight mt-2">
      {text}
      <span className="text-primary">{highlight}</span>
    </h2>
  );
}
