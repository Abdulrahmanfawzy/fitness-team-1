import { Check, Package, ArrowUpRight } from "lucide-react";
import ProgressBar from "../../components/common/UserProfile/ProgressBar";
import { useNavigate } from "react-router-dom";
import { usePackages } from "@/hooks/useProfileData";
import Spinner from "@/components/common/Spinner";

export default function MyPackages() {
  const navigate = useNavigate();
  const { data: packages = [], isLoading } = usePackages();
  const pack = packages.find((p) => p.status === "Active") ?? packages[0];

  if (isLoading) return <Spinner />;
  if (!pack)
    return (
      <p className="text-muted-foreground px-10">No active package found.</p>
    );

  return (
    <div className="flex flex-col gap-5 mx-4 sm:mx-10">
      <h2 className="text-2xl sm:text-3xl font-bold text-white">My Packages</h2>
      <div className="border border-border rounded-2xl overflow-hidden">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 p-6 border-b border-border">
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
              <Package size={20} className="text-primary" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-bold text-2xl text-white">
                  {pack.name}
                </span>
                <span
                  className={`text-sm font-semibold px-2.5 py-0.5 rounded-full ${pack.status === "Active" ? "bg-green-500/15 text-green-400" : "bg-gray-500/15 text-gray-400"}`}>
                  {pack.status}
                </span>
              </div>
              <span className="text-sm text-muted-foreground mt-0.5 block">
                {pack.expires_at
                  ? `Expires on ${pack.expires_at}`
                  : "No expiry date"}
              </span>
            </div>
          </div>
          <button
            onClick={() => navigate("/packages")}
            className="flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-primary text-white text-sm font-semibold hover:bg-primary/90 hover:-translate-y-0.5 shadow-lg shadow-primary/25 transition-all duration-200 cursor-pointer w-full sm:w-auto">
            Upgrade Package
            <ArrowUpRight size={15} />
          </button>
        </div>
        <div className="p-6 border-b border-border">
          <ProgressBar
            current={pack.sessions_used}
            total={pack.sessions_total}
          />
        </div>
        <div className="p-6">
          <span className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">
            Session Usage
          </span>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-4">
            {[
              `${pack.sessions_used} sessions used`,
              `${pack.sessions_total - pack.sessions_used} sessions remaining`,
              `${pack.sessions_total} total sessions`,
            ].map((feature) => (
              <div
                key={feature}
                className="flex items-center gap-2.5 text-sm text-white">
                <div className="w-8 h-8 rounded-full bg-primary/15 flex items-center justify-center shrink-0">
                  <Check size={16} className="text-primary" />
                </div>
                {feature}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
