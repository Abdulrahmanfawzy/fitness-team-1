import { useEffect, useState, useCallback, useRef } from "react";
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
  const prev = useCallback(() => setCur((p) => (p - 1 + total) % total), []);

  // Touch support
  const touchStartX = useRef<number | null>(null);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const diff = touchStartX.current - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 40) {
      if (diff > 0) {
        next();
      } else {          
        prev();
      }
    }
    touchStartX.current = null;
  };

  useEffect(() => {
    const t = setInterval(next, 4000);
    return () => clearInterval(t);
  }, [next]);

  return (
    <div className="w-full flex flex-col items-center py-5 overflow-hidden">
      <div className="container mx-auto">
        <div
          className="relative h-75 sm:h-100 lg:h-112.5 flex justify-center items-center"
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}>
          {images.map((img, i) => (
            <div
              key={img.id || i}
              onClick={() => setCur(i)}
              className="absolute flex items-center justify-center cursor-pointer"
              style={slide(i, cur)}>
              <div className="relative w-70 sm:w-125 lg:w-203 h-62.5 sm:h-87.5 lg:h-100 rounded-[30px] overflow-hidden shadow-2xl bg-background">
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
            className="p-3 rounded-full bg-raised border border-border text-muted-foreground hover:text-white transition-colors">
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
                    : "w-2 h-2 bg-muted-foreground hover:bg-foreground",
                )}
              />
            ))}
          </div>
          <button
            onClick={next}
            className="p-3 rounded-full bg-raised border border-border text-muted-foreground hover:text-white transition-colors">
            <ChevronRight size={20} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Carousels;
