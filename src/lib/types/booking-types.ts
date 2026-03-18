export type PaymentMethod = "card" | "paypal" | "vodafone";

export interface BookingDetails {
    trainer: string;
    package: string;
    date: string;
    time: string;
    email: string;
    userName: string;
}

export interface PaymentState {
    selectedMethod: PaymentMethod | null;
    isProcessing: boolean;
    isConfirmed: boolean;
    error: string | null;
}
