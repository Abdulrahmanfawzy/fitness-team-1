import FilterBar from "./Search/FilterBar";
import TopTrainer from "./TopTrainer/TopTrainer";
import TrainingCart from "./Tranier/TrainingCart";
import FilterProvider from "@/context/FilterProvider";
const BrowseTrainer = () => {
  return (
    <>
      <FilterProvider>
        <FilterBar />
        <TrainingCart />
      </FilterProvider>

      <TopTrainer />
    </>
  );
};

export default BrowseTrainer;
