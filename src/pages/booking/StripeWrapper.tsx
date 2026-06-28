import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import type { ReactNode } from "react";

const key = import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY;

const stripePromise = key ? loadStripe(key) : null;

interface Props {
  children: ReactNode;
}

const StripeWrapper = ({ children }: Props) => {
  return <Elements stripe={stripePromise}>{children}</Elements>;
};

export default StripeWrapper;
