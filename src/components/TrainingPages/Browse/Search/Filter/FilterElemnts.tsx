import React, { useCallback, useState } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Funnel } from "lucide-react";
import Button from "@/components/common/Button";
import { useFilterContext } from "@/context/FilterContext";
import { useGetFilterValues } from "@/hooks/useGetTrainers";

const FilterElemnts = () => {
  const [open, setOpen] = useState(false);
  const { specializationId, setSpecializationId, setEnabled } =
    useFilterContext()!;

  const handelFilter = useCallback(() => {
    setEnabled(true);
    setOpen(false);
  }, [setEnabled]);

  const { data } = useGetFilterValues();
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
          md:w-[500px] md:left-0 w-screen sm:max-w-[500px]
          bg-[#0f0f0f] border-[#222] p-0 rounded-none sm:rounded-md
        "
        style={{ position: undefined }}>
        <div className="flex items-center justify-between px-6 py-4 border-b border-[#222]">
          <div className="w-10 md:w-12"></div>

          <span className="font-bold text-lg">Filter</span>

          <span
            className="text-accent cursor-pointer text-sm font-medium w-10 md:w-12 text-right"
            onClick={() => setOpen(false)}>
            Close
          </span>
        </div>

        {/* specializations */}
        <div className="px-6 py-4 flex flex-col">
          <span className="  font-semibold my-[24px]">Specializations</span>

          {data?.map((specialization) => (
            <div
              key={specialization.name}
              onClick={() => setSpecializationId(specialization.id)}
              className={`flex items-center justify-between px-2 py-4 cursor-pointer transition-all border  border-[#333]${
                specializationId === specialization.id
                  ? "text-whiter bg-primary"
                  : "text-accent-foreground hover:text-accent"
              }`}>
              <span>{specialization.name}</span>
              {specializationId === specialization.id && (
                <span>{specialization.name} ✓</span>
              )}
            </div>
          ))}
        </div>

        <div className="px-6 pb-6">
          <Button text="Show Results" onClick={handelFilter} />
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default FilterElemnts;
