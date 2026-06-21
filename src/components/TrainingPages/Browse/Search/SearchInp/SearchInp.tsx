import { useCallback, useState } from "react";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import SearchDropDown from "./SearchDropDown";
import { useSearchParams } from "react-router-dom";

const SearchInp = () => {
  const [open, setOpen] = useState(false);
  const [searchParams, setParams] = useSearchParams();
  const [search, setSearch] = useState(searchParams.get("search") || "");

  const handleSearch = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const value = e.target.value;
      setSearch(value);
      setParams(
        value ? new URLSearchParams({ search: value }) : new URLSearchParams(),
      );
    },
    [setParams],
  );

  return (
    <div className="relative w-full mx-auto sm:mx-0 sm:p-0 sm:w-184.25">
      <div className="flex items-center gap-3 z-50 relative">
        <div className="relative flex-1">
          <div className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">
            <Search size={20} />
          </div>
          <Input
            placeholder="Search workouts"
            className="pl-10 h-[50px] w-full bg-raised border-border text-foreground placeholder:text-muted-foreground rounded-md focus:border-primary transition-all"
            value={search}
            onChange={handleSearch}
            onFocus={() => setOpen(true)}
          />
        </div>
        {open && (
          <span
            className="text-foreground cursor-pointer hover:text-primary font-medium"
            onClick={() => {
              setOpen(false);
              setParams(new URLSearchParams());
              setSearch("");
            }}>
            Cancel
          </span>
        )}
      </div>
      {open && !search && (
        <>
          <div className="fixed inset-0 z-40" onClick={() => setOpen(false)} />
          <SearchDropDown
            onSelect={(item) => {
              setSearch(item);
              setOpen(false);
              setParams(new URLSearchParams({ search: item }));
            }}
          />
        </>
      )}
    </div>
  );
};

export default SearchInp;
