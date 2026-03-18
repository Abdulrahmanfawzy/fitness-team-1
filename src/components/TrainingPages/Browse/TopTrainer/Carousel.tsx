import { useEffect, useState, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { images } from "@/lib/constants/PageTraning";
import { cn } from "@/lib/utils";

const total = images.length;

const slide = (i: number, cur: number) => {
  let o = (((i - cur) % total) + total) % total;
  if (o > Math.floor(total / 2)) o -= total;
  const a = Math.abs(o);
  return {
    zIndex: 30 - a * 10,
    transform: `translateX(${o * 25}%) scale(${1 - a * 0.2})`,
    transition: "all 0.6s cubic-bezier(0.25, 1, 0.5, 1)",
  };
};

const Carousels = () => {
  const [cur, setCur] = useState(0);
  const next = useCallback(() => setCur((p) => (p + 1) % total), []);
  const prev = () => setCur((p) => (p - 1 + total) % total);

  useEffect(() => {
    const t = setInterval(next, 4000);
    return () => clearInterval(t);
  }, [next]);

  return (
    <div className="w-full flex flex-col items-center py-5 overflow-hidden">
      <div className="container mx-auto">
        <div className="relative h-[300px] sm:h-[400px] lg:h-[450px] flex justify-center items-center">
          {images.map((img, i) => (
            <div
              key={img.id || i}
              onClick={() => setCur(i)}
              className="absolute flex items-center justify-center cursor-pointer"
              style={slide(i, cur)}
            >
              <div className="relative w-[280px] sm:w-[500px] lg:w-[812px] h-[250px] sm:h-[350px] lg:h-[400px] rounded-[30px] overflow-hidden shadow-2xl bg-[#121212]">
                <img
                  src={img.img}
                  alt=""
                  className="w-full h-full object-cover select-none"
                  style={{ objectPosition: "center 20%" }}
                />
                <div
                  className={cn(
                    "absolute inset-0 bg-black transition-opacity duration-500 pointer-events-none",
                    cur === i ? "opacity-0" : "opacity-[0.65]",
                  )}
                />
              </div>
            </div>
          ))}
        </div>

        <div className="flex items-center justify-center gap-4 mt-12 mb-10">
          <button
            onClick={prev}
            className="p-3 rounded-full bg-[#1a1a1a] border border-[#333] text-gray-400 hover:text-white transition-colors"
          >
            <ChevronLeft size={20} />
          </button>

          <div className="flex gap-3 items-center">
            {images.map((_, i) => (
              <button
                key={i}
                onClick={() => setCur(i)}
                className={cn(
                  "rounded-full transition-all duration-300",
                  i === cur
                    ? "w-3 h-3 bg-accent shadow-[0_0_10px_white]"
                    : "w-2 h-2 bg-[#999999] hover:bg-gray-400",
                )}
              />
            ))}
          </div>

          <button
            onClick={next}
            className="p-3 rounded-full bg-[#1a1a1a] border border-[#333] text-gray-400 hover:text-white transition-colors"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Carousels;
