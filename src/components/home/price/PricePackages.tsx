import PackageCard from "@/components/common/PackageCard";
import { useNavigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import client from "@/lib/api/client";
import type { RawPackageFromAPI } from "@/lib/types/package-types";

export default function PricePackages() {
  const navigate = useNavigate();

  const { data: packages = [] } = useQuery({
    queryKey: ["packages"],
    queryFn: async () => {
      const { data } = await client.get("/packages");
      const list = data.data || [];
      return list.map((pkg: RawPackageFromAPI) => ({
        id: pkg.id,
        title: pkg.title + " Pack",
        price: "EGP " + pkg.price,
        sessions: pkg.sessions + " SESSIONS",
        features: pkg.features.map((f: string) =>
          f.replace(/_/g, " ").replace(/\b\w/g, (c) => c.toUpperCase()),
        ),
      }));
    },
    retry: false,
  });

  return (
    <>
      <div className="mt-10 grid w-full max-w-6xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {packages.map((pkg) => (
          <PackageCard
            key={pkg.id}
            title={pkg.title}
            price={pkg.price}
            sessions={pkg.sessions}
            features={pkg.features}
            isRecommended={pkg.id === 2}
          />
        ))}
      </div>

      <button
        type="button"
        className="mt-8 text-lg font-semibold text-primary transition-colors hover:text-primary/80 cursor-pointer"
        onClick={() => navigate("/packages")}>
        Compare all package features {">"}
      </button>
    </>
  );
}
