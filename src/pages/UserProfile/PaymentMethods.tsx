export default function PaymentMethods() {
  return (
    <div className="flex flex-col gap-6 px-4 sm:px-10">
      <div>
        <h2 className="text-2xl sm:text-3xl font-bold text-white">
          Payment Methods
        </h2>
        <p className="text-sm text-(--gray-color) mt-1">
          Manage your saved cards and payment options
        </p>
      </div>

      <div className="border border-dashed border-(--gray-color)/40 rounded-2xl p-10 flex flex-col items-center justify-center gap-3 text-center">
        <p className="text-white font-semibold">
          No payment methods saved yet.
        </p>
        <p className="text-sm text-(--gray-color)">
          Card management will be available soon.
        </p>
      </div>
    </div>
  );
}
