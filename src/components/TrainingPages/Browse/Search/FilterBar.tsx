import { Button } from "@/components/ui/button";
import { X } from "lucide-react";
import FilterElemnts from "./Filter/FilterElemnts";
import SearchInp from "./SearchInp/SearchInp";
import { useFilterContext } from "@/context/FilterContext";
import { useGetFilterValues } from "@/hooks/useGetTerainers";

const FilterBar = () => {
  const {
    specializationId,
    setdurationIdr,
    setSpecializationId,
    enabled,
    setEnabled,
  } = useFilterContext()!;

  const handelClear = () => {
    setdurationIdr(0);
    setSpecializationId(0);
    setEnabled(false);
  };
  const { data: specializations } = useGetFilterValues();

  const specializationValue = specializations?.find(
    (item) => item.id === specializationId,
  )?.name;
  return (
    <div className=" lg:h-[380px] ">
      <div className="container mx-auto text-white px-4 ">
        <div className="mb-8 sm:mb-12 lg:mb-16">
          <p className="font-bold text-2xl sm:text-3xl lg:text-4xl">
            Browse Trainers
          </p>

          <p className=" sm:text-lg lg:text-xl mt-2">
            Find the perfect trainer by browsing through our list of experts
          </p>
        </div>

        {/* Search */}
        <div className="flex flex-wrap mx-auto  justify-between mt-[46px] mb-3 lg:">
          <SearchInp />

          {/* Filter */}
          <div className="my-10 lg:my-0 md:ml-auto lg:ml-0">
            <FilterElemnts />
          </div>
        </div>

        {/* Clear */}

        <div className="flex flex-wrap justify-between items-center gap-3">
          <div className="flex flex-wrap gap-2">
            {enabled && specializationId > 0 && (
              <Button
                className="bg-[#B6B6B54D] min-w-[170px] flex items-center gap-2 px-3 cursor-pointer"
                onClick={() => setEnabled(false)}
              >
                <span className="w-2 h-2 rounded-full bg-red-600 shrink-0 inline-block" />
                <p> {specializationValue}</p>
                <X size={16} />
              </Button>
            )}
          </div>
          {enabled  && (
            <p className="cursor-pointer" onClick={handelClear}>
              Clear Filter
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default FilterBar;
