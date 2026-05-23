import ComparisonTable from "@/components/common/package/ComparisonTable";
import PackageCard from "@/components/common/PackageCard";
import { useContext } from "react";
import { useQuery } from "@tanstack/react-query";
import { AuthContext } from "@/context/AuthContext";
import { IoShieldCheckmarkSharp } from "react-icons/io5";
import { MdVerified } from "react-icons/md";
import type { PackageType, RawPackageFromAPI } from "@/lib/types/package-types";

const PackagePage = () => {
  const auth = useContext(AuthContext);
  const token =
    auth?.token || "4|yrxEfrnyslP7HK55ge7r2pt8to0gCq3lzz6YhMee993dbc51";

  const { data } = useQuery({
    queryKey: ["packages"],
    queryFn: async () => {
      const headers = { Authorization: `Bearer ${token}` };
      const response = await fetch(`${import.meta.env.VITE_API_URL}/packages`, {
        headers,
      });
      const responseData = await response.json();
      const packages = responseData.data || [];
      return packages.map((pkg: RawPackageFromAPI) => ({
        id: pkg.id,
        title: pkg.title + " Pack",
        price: "EGP " + pkg.price,
        sessions: pkg.sessions + " SESSIONS",
        features: pkg.features.map((f: string) =>
          f.replace(/_/g, " ").replace(/\b\w/g, (c) => c.toUpperCase()),
        ),
      })) as (PackageType & { id: number })[];
    },
    retry: false,
  });

  const packages: PackageType[] = data || [];

  return (
    <div className="min-h-screen bg-[#0f0f0f] text-white py-20 px-4 font-sans">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold mb-4">Training packages</h1>
        <p className="text-zinc-400">
          Choose a training plan that matches your goals and schedule
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {packages.map((pkg) => (
          <PackageCard
            key={pkg.id}
            title={pkg.title}
            price={pkg.price}
            sessions={pkg.sessions}
            features={pkg.features}
            isRecommended={pkg.id == 2}
          />
        ))}
      </div>

      <ComparisonTable />

      <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto mt-12">
        <div className="flex items-start gap-4 p-6 bg-zinc-800/50 border border-zinc-800 rounded-xl">
          <IoShieldCheckmarkSharp
            className="text-green-500 shrink-0"
            size={35}
          />
          <div>
            <h4 className="font-bold text-sm uppercase">
              30-Day Money-Back Guarantee
            </h4>
            <p className="text-xs text-zinc-500 mt-1">
              Not satisfied with your first month? Get a full refund. No
              questions asked.
            </p>
          </div>
        </div>
        <div className="flex items-start gap-4 p-6 bg-zinc-800/50 border border-zinc-800 rounded-xl">
          <MdVerified className="text-green-500 shrink-0" size={40} />
          <div>
            <h4 className="font-bold text-sm uppercase">
              All Trainers Certified
            </h4>
            <p className="text-xs text-zinc-500 mt-1">
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
