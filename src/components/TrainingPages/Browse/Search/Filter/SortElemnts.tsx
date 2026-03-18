import Button from "@/components/common/Button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { sortOptions } from "@/lib/constants/PageTraning";
import { ArrowUpDown } from "lucide-react";
import { useState } from "react";

const SortElemnts = () => {
  const [selectedSort, setSelectedSort] = useState("most-popular");
  const [open, setOpen] = useState(false);

  return (
    <DropdownMenu open={open} onOpenChange={setOpen}>
      <DropdownMenuTrigger className="flex items-center gap-2 px-3 py-2 rounded-md cursor-pointer bg-[#B6B6B533]">
        <ArrowUpDown size={16} />
        <p>Sort</p>
      </DropdownMenuTrigger>

      <DropdownMenuContent
        align="end"
        side="bottom"
        avoidCollisions={false}
        onInteractOutside={() => setOpen(false)}
        className="
          fixed  -left-50 w-screen
          sm:relative sm:left-auto sm:right-auto sm:w-[400px]
          md:w-[500px] sm:max-w-[500px]
          bg-[#0f0f0f] border-[#222] p-0 rounded-none sm:rounded-md
        "
        style={{ position: undefined }}
      >
        <div className="flex items-center justify-between px-6 py-4 border-b border-[#222]">
          <span className="text-accent-foreground font-bold text-lg">Sort</span>
          <span
            className="text-accent cursor-pointer text-sm font-medium"
            onClick={() => setOpen(false)}
          >
            Close
          </span>
        </div>

        <div className="px-6 py-4 flex flex-col">
          {sortOptions.map((option) => (
            <div
              key={option.value}
              onClick={() => setSelectedSort(option.value)}
              className={`flex items-center justify-between px-2 py-4 cursor-pointer transition-all ${
                option.id !== sortOptions.length ? "border-b border-[#222]" : ""
              } ${
                selectedSort === option.value
                  ? "text-accent"
                  : "text-accent-foreground hover:text-accent"
              }`}
            >
              <span>{option.label}</span>
              {selectedSort === option.value && <span>✓</span>}
            </div>
          ))}
        </div>
        <div className="px-6 pb-6">
          <Button text=" Close" onClick={() => setOpen(false)} />
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default SortElemnts;
