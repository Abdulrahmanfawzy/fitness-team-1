import ComparisonTable from "@/components/common/package/ComparisonTable";
import PackageCard from "@/components/common/PackageCard";
import { useState } from "react";
import { IoShieldCheckmarkSharp } from "react-icons/io5";
import { MdVerified } from "react-icons/md";

const PackagePage = () => {
  const [selectedPackage, setSelectedPackage] = useState("Monthly Pack");
  const packages = [
    {
      title: "Single Pack",
      price: "150",
      sessions: "1 SESSION",
      features: [
        "Try any Trainer",
        "No Commitment",
        "Full Session Access",
        "Post-Workout Plan",
      ],
    },
    {
      title: "Monthly Pack",
      price: "1000",
      sessions: "15 SESSIONS",
      features: [
        "Dedicated Trainer",
        "Nutrition Plan Included",
        "Progress Tracking",
        "Priority Scheduling",
      ],
    },
    {
      title: "Premium Pack",
      price: "3000",
      sessions: "50 SESSIONS",
      features: [
        "Dedicated Trainer",
        "Full Coaching Program",
        "24/7 Trainer Access",
        "Custom Meal Plans",
      ],
    },
  ];
  return (
    <div className="min-h-screen bg-[#0f0f0f] text-white py-20 px-4 font-sans">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold mb-4">Training packages</h1>
        <p className="text-zinc-400">
          Choose a training plan that matches your goals and schedule
        </p>
      </div>

      <div className="flex flex-wrap justify-center gap-6 max-w-7xl mx-auto">
        {packages.map((pkg) => (
          <PackageCard
            key={pkg.title}
            title={pkg.title}
            price={pkg.price}
            sessions={pkg.sessions}
            features={pkg.features}
            isRecommended={selectedPackage === pkg.title}
            onClick={() => setSelectedPackage(pkg.title)}
          />
        ))}
      </div>

      <ComparisonTable />

      <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto mt-12">
        <div className="flex items-start gap-4 p-6 bg-zinc-800/50 border border-zinc-800 rounded-xl">
          <IoShieldCheckmarkSharp className="text-green-500" size={35} />

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
          <MdVerified className="text-green-500" size={40} />

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
