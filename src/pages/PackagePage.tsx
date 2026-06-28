import ComparisonTable from "@/components/common/package/ComparisonTable";
import PackageCard from "@/components/common/PackageCard";
import { useQuery } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { IoShieldCheckmarkSharp } from "react-icons/io5";
import { MdVerified } from "react-icons/md";
import type { PackageType, RawPackageFromAPI } from "@/lib/types/package-types";
import client from "@/lib/api/client";

const PackagePage = () => {
  const navigate = useNavigate();

  const { data } = useQuery({
    queryKey: ["public-packages"],
    queryFn: async () => {
      const { data } = await client.get("/packages");
      const packages = data.data || [];
      return packages.map((pkg: RawPackageFromAPI) => ({
        id: pkg.id,
        title: pkg.title,
        price: pkg.price,
        sessions: String(pkg.sessions),
        features: pkg.features.map((f: string) =>
          f.replace(/_/g, " ").replace(/\b\w/g, (c) => c.toUpperCase()),
        ),
      })) as (PackageType & { id: number })[];
    },
    retry: false,
  });

  const packages: PackageType[] = data || [];

  return (
    <div className="min-h-screen bg-background text-white py-20 px-4 overflow-x-hidden">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold mb-4">Training Packages</h1>
        <p className="text-muted-foreground">
          Choose a training plan that matches your goals and schedule
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {packages.map((pkg, index) => (
          <PackageCard
            key={pkg.id}
            trainerPackageId={pkg.id}
            title={pkg.title}
            price={pkg.price}
            sessions={pkg.sessions}
            features={pkg.features}
            isRecommended={index === 1}
            onSelectPackage={(packageId: number) =>
              navigate("/trainers", { state: { packageId } })
            }
          />
        ))}
      </div>

      <ComparisonTable />

      <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto mt-12">
        <div className="flex items-start gap-4 p-6 bg-raised border border-border rounded-xl">
          <IoShieldCheckmarkSharp className="text-success shrink-0" size={35} />
          <div>
            <h4 className="font-bold text-sm uppercase">
              30-Day Money-Back Guarantee
            </h4>
            <p className="text-xs text-muted-foreground mt-1">
              Not satisfied with your first month? Get a full refund. No
              questions asked.
            </p>
          </div>
        </div>
        <div className="flex items-start gap-4 p-6 bg-raised border border-border rounded-xl">
          <MdVerified className="text-success shrink-0" size={40} />
          <div>
            <h4 className="font-bold text-sm uppercase">
              All Trainers Certified
            </h4>
            <p className="text-xs text-muted-foreground mt-1">
              Every coach holds elite certifications and has proven experience
              in transforming lives.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PackagePage;
