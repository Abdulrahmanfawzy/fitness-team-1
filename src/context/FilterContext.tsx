import { createContext, useContext } from "react";

export type FilterContextType = {
  enabled: boolean;
  durationId: number;
  specializationId: number;
  setDurationId: (id: number) => void;
  setSpecializationId: (id: number) => void;
  setEnabled: (enabled: boolean) => void;
};
export const FilterContext = createContext<FilterContextType | undefined>(
  undefined,
);

export const useFilterContext = () => {
  const context = useContext(FilterContext);
  return context;
};
