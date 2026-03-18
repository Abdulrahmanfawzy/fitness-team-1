

// import TrainerInfo from ""
const App = () => {
  return <>
<TrainerInfo></TrainerInfo>
  </>

};

import TrainerInfo from "./components/trainer-profile/TrainerInfo";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes/router";

const App = () => {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};
export default App;
