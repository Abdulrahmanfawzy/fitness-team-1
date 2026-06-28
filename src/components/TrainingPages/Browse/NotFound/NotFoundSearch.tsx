import img from "../../../../assets/TrainingPage/notFound.gif";
import { Button } from "@/components/ui/button";
import { useSearchParams } from "react-router-dom";

const NotFoundSearch = () => {
  const [, setParam] = useSearchParams();

  const handleReload = () => {
    setParam(new URLSearchParams());
    window.location.reload();
  };

  return (
    <div>
      <img src={img} alt="" className="w-[868px]" />
      <p className="text-[40px] fw-bold">No Results</p>
      <p>piease refine your search and try again</p>
      <Button
        onClick={handleReload}
        className="px-10 py-6 mt-4 w-80 text-[18px] fw-medium text-primary  border border-white  hover:text-white hover:border-none bg-transparent  cursor-pointer  transition-all"
      >
        Try Again
      </Button>
    </div>
  );
};

export default NotFoundSearch;
