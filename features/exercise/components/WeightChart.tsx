import React from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { name: "Sat", uv: 18 },
  { name: "Sun", uv: 20 },
  { name: "Mon", uv: 23 },
  { name: "Tue", uv: 20 },
  { name: "Thu", uv: 18 },
  { name: "Wed", uv: 35 },
  { name: "Fri", uv: 41 },
];

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white/90 backdrop-blur-md px-3 py-2 rounded shadow-lg border border-gray-200 text-sm">
        <p className="text-gray-600">{label}</p>
        <p className="font-semibold text-primary">{payload[0].value}</p>
      </div>
    );
  }
  return null;
};

const WeightChart = () => {
  return (
    <div className="w-full">
      <h4 className="text-primary font-semibold mb-2">PR Record</h4>
      <ResponsiveContainer width="100%" height={250}>
        <AreaChart data={data} margin={{ top: 10, right: 20, left: -10, bottom: 0 }}>
          {/* soft gridlines */}
          <CartesianGrid strokeDasharray="4 8" vertical={false} stroke="#e2e8f0" />

          {/* subtle axis */}
          <XAxis
            dataKey="name"
            axisLine={false}
            tickLine={false}
            tick={{ fill: "#6b7280", fontSize: 12 }}
          />
          <YAxis
            axisLine={false}
            tickLine={false}
            tick={{ fill: "#6b7280", fontSize: 12 }}
            width={30}
          />

          <Tooltip content={<CustomTooltip />} />

          {/* gradient fill */}
          <defs>
            <linearGradient id="uvGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#568F87" stopOpacity={0.4} />
              <stop offset="100%" stopColor="#568F87" stopOpacity={0} />
            </linearGradient>
          </defs>

          <Area
            type="monotone"
            dataKey="uv"
            stroke="#568F87"
            strokeWidth={2.5}
            fill="url(#uvGradient)"
            dot={false}
            activeDot={{ r: 6, fill: "#568F87", stroke: "#ffffff", strokeWidth: 2 }}
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default WeightChart;
