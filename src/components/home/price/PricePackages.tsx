import PackageCard from "@/components/common/PackageCard";
import { useNavigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import client from "@/lib/api/client";
import type { RawPackageFromAPI } from "@/lib/types/package-types";
import { ArrowRight } from "lucide-react";

export default function PricePackages() {
  const navigate = useNavigate();

  const { data: packages = [] } = useQuery({
    queryKey: ["packages"],
    queryFn: async () => {
      const { data } = await client.get("/packages");
      const list: RawPackageFromAPI[] = data.data || [];
      return list.map((pkg) => ({
        id: pkg.id,
        title: pkg.title,
        price: pkg.price, 
        sessions: String(pkg.sessions),
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
        {packages.map((pkg, index) => (
          <PackageCard
            key={pkg.id}
            trainerPackageId={pkg.id}
            title={pkg.title}
            price={pkg.price}
            sessions={pkg.sessions}
            features={pkg.features}
            isRecommended={index === 1}
            onSelectPackage={() => navigate("/trainers")}
          />
        ))}
      </div>

      <button
        type="button"
        className="mt-8 flex items-center gap-1.5 text-sm font-semibold text-zinc-400 hover:text-primary transition-colors cursor-pointer group"
        onClick={() => navigate("/packages")}>
        Compare all package features
        <ArrowRight
          size={15}
          className="group-hover:translate-x-0.5 transition-transform"
        />
      </button>
    </>
  );
}
