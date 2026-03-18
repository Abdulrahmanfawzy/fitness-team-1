import React, { useState } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Funnel } from "lucide-react";
import { durations, types } from "@/lib/constants/PageTraning";
import Button from "@/components/common/Button";

const FilterElemnts = () => {
  const [selectedFilter, setSelectedFilter] = useState("Any");
  const [selectedType, setSelectedType] = useState("");
  const [open, setOpen] = useState(false);
  return (
    <DropdownMenu open={open} onOpenChange={setOpen}>
      <DropdownMenuTrigger className="flex items-center gap-2 px-3 py-2 rounded-md cursor-pointer bg-[#B6B6B533]">
        <Funnel size={16} />
        <p>Filter</p>
      </DropdownMenuTrigger>

        <DropdownMenuContent
        align="end"
        side="bottom"
        onInteractOutside={() => setOpen(false)}
        avoidCollisions={false}
        className="
          fixed  -left-23 w-screen
          sm:relative  sm:w-[400px]
          md:w-[500px] md:left-19 w-screen sm:max-w-[500px]
          bg-[#0f0f0f] border-[#222] p-0 rounded-none sm:rounded-md
        "
        style={{ position: undefined }}
      >
        <div className="flex items-center justify-between px-6 py-4 border-b border-[#222]">
          <div className="w-10 md:w-12"></div>

          <span className="font-bold text-lg">Filter</span>

          <span
            className="text-accent cursor-pointer text-sm font-medium w-10 md:w-12 text-right"
            onClick={() => setOpen(false)}
          >
            Close
          </span>
        </div>

        {/* Duration */}
        <div className="px-6 py-4 flex flex-col">
          <span className="  font-semibold my-[24px]">Duration</span>

          {durations.slice(0, 1).map((duration) => (
            <div
              key={duration.value}
              onClick={() => setSelectedFilter(duration.value)}
              className={`flex items-center justify-between px-2 py-4 cursor-pointer transition-all mb-4 ${
                selectedFilter === duration.value
                  ? "text-whiter bg-primary"
                  : "text-accent-foreground hover:text-accent"
              }`}
            >
              <span>{duration.label}</span>
              {selectedFilter === duration.value && (
                <span>{duration.value} ✓</span>
              )}
            </div>
          ))}

          {durations.slice(1, 5).map((duration) => (
            <div
              key={duration.value}
              onClick={() => setSelectedFilter(duration.value)}
              className={`flex items-center justify-between px-2 py-4 cursor-pointer transition-all border  border-[#333]${
                selectedFilter === duration.value
                  ? "text-whiter bg-primary"
                  : "text-accent-foreground hover:text-accent"
              }`}
            >
              <span>{duration.label}</span>
              {selectedFilter === duration.value && (
                <span>{duration.value} ✓</span>
              )}
            </div>
          ))}
        </div>

        {/* typ */}
        <div className="border-t border-[#222] px-6 py-4">
          <p className="text-accent-foreground font-semibold">Type</p>
          <div className="flex gap-3 my-4">
            {types.map((type) => (
              <button
                key={type.id}
                onClick={() => setSelectedType(type.type)}
                className={`px-6 py-2 cursor-pointer border transition-all duration-300 ${
                  selectedType === type.type
                    ? "bg-primary border-primary text-accent-foreground"
                    : "bg-transparent border-[#333] text-accent-foreground hover:border-accent hover:text-accent"
                }`}
              >
                {type.type}
              </button>
            ))}
          </div>
        </div>

        <div className="px-6 pb-6">
          <Button text="Show Results" onClick={() => setOpen(false)} />
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default FilterElemnts;
