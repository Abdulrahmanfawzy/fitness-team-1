
import TrainerInfo from "./components/trainer-profile/TrainerInfo";

// import TrainerInfo from ""
const App = () => {
  return <>
<TrainerInfo></TrainerInfo>
  </>

};

import { RouterProvider } from "react-router-dom";
import { router } from "./routes/router";
>>>>>>> 07aaa3fe34c2601a852824cdfb4efb77dedd73bc

const App = () => {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};
export default App;
