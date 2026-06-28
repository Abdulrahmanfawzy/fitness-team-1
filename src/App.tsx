import { RouterProvider } from "react-router-dom";
import { router } from "./routes/router";
import AuthProvider from "./context/AuthProvider";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BookingAuthProvider } from "./context/BookingAuthProvider";
import { BookingProvider } from "./context/BookingProvider";
import { ErrorBoundary } from "./components/common/ErrorBoundary";
import { Toaster } from "sonner";

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <BookingAuthProvider>
          <ErrorBoundary>
            <BookingProvider>
              <RouterProvider router={router} />
              <Toaster position="top-right" richColors />
            </BookingProvider>
          </ErrorBoundary>
        </BookingAuthProvider>
      </AuthProvider>
    </QueryClientProvider>
  );
};

export default App;
