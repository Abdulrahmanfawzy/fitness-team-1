import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import { popularSearches, recentSearches } from "@/lib/constants/PageTraning";

const SearchInp = () => {
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState("");

  return (
    <div className="relative w-full mx-auto  px-4 sm:mx-0  sm:p-0 sm:w-[737px]">
      <div className="flex items-center gap-3 z-50 relative">
        <div className="relative flex-1">
          <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
            <Search size={20} />
          </div>
          <Input
            placeholder="Search workouts"
            className="pl-10 h-[50px] w-full bg-[#1a1a1a] border-[#333] text-white placeholder:text-gray-500 rounded-md focus:border-[#ff5c5c] transition-all"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            onFocus={() => setOpen(true)}
          />
        </div>

        {open && (
          <span
            className="text-white cursor-pointer hover:text-[#ff5c5c] font-medium"
            onClick={() => {
              setOpen(false);
              setSearch("");
            }}
          >
            Cancel
          </span>
        )}
      </div>

      {open && (
        <>
          <div className="fixed inset-0 z-40" onClick={() => setOpen(false)} />

          <div className="absolute top-[60px] left-0 w-full bg-[#0f0f0f] border border-[#222] rounded-md shadow-2xl z-50 overflow-hidden">
            <div className="px-4 py-6 flex flex-col gap-8">
              <div className="flex flex-col">
                <span className="text-gray-500 font-semibold text-xs uppercase tracking-widest px-1 pb-2 border-b border-[#222]">
                  Recent Searches
                </span>
                <div className="flex flex-col mt-3">
                  {recentSearches.map((item) => (
                    <div
                      key={item}
                      onClick={() => {
                        setSearch(item);
                        setOpen(false);
                      }}
                      className="text-white font-bold py-3 px-2 cursor-pointer hover:bg-[#1a1a1a] hover:text-[#ff5c5c] rounded-md transition-all"
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex flex-col">
                <span className="text-gray-500 font-semibold text-xs uppercase tracking-widest px-1 pb-2 border-b border-[#222]">
                  Popular
                </span>
                <div className="flex flex-col mt-3">
                  {popularSearches.map((item) => (
                    <div
                      key={item}
                      onClick={() => {
                        setSearch(item);
                        setOpen(false);
                      }}
                      className="text-white font-bold py-3 px-2 cursor-pointer hover:bg-[#1a1a1a] hover:text-[#ff5c5c] rounded-md transition-all"
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default SearchInp;
