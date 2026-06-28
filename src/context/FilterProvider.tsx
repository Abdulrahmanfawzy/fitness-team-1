import React, { useState } from "react";
import { FilterContext } from "./FilterContext";
const FilterProvider = ({ children }: { children: React.ReactNode }) => {
  const [enabled, setEnabled] = useState(false);
  const [durationId, setDurationId] = useState(1);
  const [specializationId, setSpecializationId] = useState<number>(0);
  return (
    <FilterContext.Provider
      value={{
        enabled,
        durationId,
        specializationId,
        setDurationId,
        setSpecializationId,
        setEnabled,
      }}>
      {children}
    </FilterContext.Provider>
  );
};
export default FilterProvider;
