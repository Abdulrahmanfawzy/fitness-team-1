<<<<<<< HEAD
=======
>>>>>>> 43b3cfd72bb0e7ea9f3e3bbd8615f471dbfaed93
import { RouterProvider } from "react-router-dom";
import TrainerInfo from "./components/trainer-profile/TrainerInfo";
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
