import { popularSearches } from "@/lib/constants/PageTraning";

const SearchDropDown = ({ onSelect }: { onSelect: (item: string) => void }) => {
  return (
    <div className="absolute top-15 left-0 w-full bg-background border border-border rounded-md shadow-2xl z-50 overflow-hidden">
      <div className="px-4 py-6 flex flex-col gap-8">
        <div className="flex flex-col">
          <span className="text-muted-foreground font-semibold text-xs uppercase tracking-widest px-1 pb-2 border-b border-border">
            Popular
          </span>
          <div className="flex flex-col mt-3">
            {popularSearches.map((item) => (
              <div
                key={item}
                onClick={() => onSelect(item)}
                className="text-foreground font-bold py-3 px-2 cursor-pointer hover:bg-raised hover:text-primary rounded-md transition-all">
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchDropDown;
