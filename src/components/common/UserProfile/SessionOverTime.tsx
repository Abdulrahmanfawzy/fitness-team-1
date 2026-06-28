import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Cell,
} from "recharts";
import { useProgressActivity } from "@/hooks/useProfileData";

const COLORS = {
  completed: "#22c55e",
  upcoming: "#FF4D4D",
  cancelled: "#6b7280",
};

export default function SessionsOverTime() {
  const { data: progress } = useProgressActivity();

  const data = [
    {
      label: "Completed",
      value: progress?.completed_sessions ?? 0,
      color: COLORS.completed,
    },
    {
      label: "Upcoming",
      value: progress?.upcoming_sessions ?? 0,
      color: COLORS.upcoming,
    },
    {
      label: "Cancelled",
      value: progress?.cancelled_sessions ?? 0,
      color: COLORS.cancelled,
    },
  ];

  const total = data.reduce((sum, d) => sum + d.value, 0);

  return (
    <div className="border border-border rounded-xl p-5 sm:p-7">
      <div className="flex items-start justify-between mb-6">
        <div>
          <h2 className="text-lg sm:text-xl font-semibold text-white mb-1">
            Session Breakdown
          </h2>
          <p className="text-xs text-muted-foreground">
            {total} total session{total !== 1 ? "s" : ""}
          </p>
        </div>
        <div className="flex flex-col gap-1.5">
          {data.map((d) => (
            <div key={d.label} className="flex items-center gap-2">
              <span
                className="w-2.5 h-2.5 rounded-full shrink-0"
                style={{ backgroundColor: d.color }}
              />
              <span className="text-xs text-muted-foreground">{d.label}</span>
            </div>
          ))}
        </div>
      </div>

      <ResponsiveContainer width="100%" height={200}>
        <BarChart
          data={data}
          margin={{ top: 0, right: 0, left: -20, bottom: 0 }}
          barSize={48}>
          <XAxis
            dataKey="label"
            axisLine={false}
            tickLine={false}
            tick={{ fill: "#888", fontSize: 13 }}
          />
          <YAxis
            axisLine={false}
            tickLine={false}
            tick={{ fill: "#888", fontSize: 13 }}
            allowDecimals={false}
          />
          <Tooltip
            cursor={{ fill: "rgba(255,255,255,0.04)" }}
            contentStyle={{
              background: "#1a1a1a",
              border: "1px solid #2e2e2e",
              borderRadius: 8,
            }}
            labelStyle={{ color: "#fff" }}
            itemStyle={{ color: "#aaa" }}
            formatter={(value) => [`${value} sessions`, ""]}
          />
          <Bar dataKey="value" radius={[6, 6, 0, 0]}>
            {data.map((d) => (
              <Cell key={d.label} fill={d.color} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
