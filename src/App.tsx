import { RouterProvider } from "react-router-dom";
import { router } from "./routes/router";
import AuthProvider from "./context/AuthProvider";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BookingAuthProvider } from "./context/BookingAuthProvider";

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <BookingAuthProvider>
          <RouterProvider router={router} />
        </BookingAuthProvider>
      </AuthProvider>
    </QueryClientProvider>
  );
};

export default App;
