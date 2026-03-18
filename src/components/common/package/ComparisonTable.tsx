import { IoMdCheckmark } from "react-icons/io";

const ComparisonTable = () => {
  const rows = [
    { name: "session", single: "1", monthly: "8", premium: "Unlimited" },
    {
      name: "TRAINER",
      single: "Any",
      monthly: "Dedicated",
      premium: "Dedicated",
    },
    { name: "DURATION", single: "60", monthly: "60", premium: "60" },
    {
      name: "NUTRITION PLAN",
      single: "-",
      monthly: <IoMdCheckmark />,
      premium: <IoMdCheckmark />,
    },
    {
      name: "PROGRESS TRACKING",
      single: "-",
      monthly: <IoMdCheckmark />,
      premium: <IoMdCheckmark />,
    },
    {
      name: "PRIORITY BOOKING",
      single: "-",
      monthly: "-",
      premium: <IoMdCheckmark />,
    },
    {
      name: "24/7 ACCESS",
      single: "-",
      monthly: "-",
      premium: <IoMdCheckmark />,
    },
  ];

  return (
    <div className="mt-20 w-full max-w-[1200px] mx-auto border border-zinc-800 rounded-xl bg-[#110e0e] overflow-hidden">
      <div className="p-7 text-center border-b border-zinc-800">
        <h2 className="text-2xl font-bold text-white tracking-widest uppercase">
          Compare Features
        </h2>
      </div>
      <table className="w-full text-left border-collapse">
        <thead>
          <tr className="text-white uppercase text-md tracking-widest">
            <th className="p-6">Feature</th>
            <th className="p-6 text-center">Single</th>
            <th className="p-6 text-center">Monthly</th>
            <th className="p-6 text-center">Premium</th>
          </tr>
        </thead>
        <tbody className="text-zinc-50 text-sm">
          {rows.map((row, idx) => (
            <tr key={idx} className="border-t border-zinc-800/50">
              <td className="p-6 uppercase text-zinc-400 font-medium">
                {row.name}
              </td>
              <td className="p-6 text-center">
                <div className="flex justify-center items-center ">
                  {row.single}
                </div>
              </td>

              <td className="p-6 text-center">
                <div
                  className={`flex justify-center items-center ${typeof row.monthly !== "string" || row.monthly === "✔" ? "text-red-500" : ""}`}
                >
                  {row.monthly}
                </div>
              </td>

              <td className="p-6 text-center">
                <div
                  className={`flex justify-center items-center ${typeof row.premium !== "string" || row.monthly === "✔" ? "text-red-500" : ""}`}
                >
                  {row.premium}
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ComparisonTable;
