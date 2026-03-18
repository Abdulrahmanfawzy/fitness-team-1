import TrainerInfo from "./components/trainer-profile/TrainerInfo";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes/router";

const App = () => {
  return (
    <>
     <TrainerInfo></TrainerInfo>
      <RouterProvider router={router} />
    </>
  );
};
export default App;
