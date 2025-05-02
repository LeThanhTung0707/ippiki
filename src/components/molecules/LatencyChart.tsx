"use client";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";

type Props = {
  data: { name: string; ms: number }[];
};

const LatencyChart: React.FC<Props> = ({ data }) => {
  if (!data.length) return null;

  return (
    <div className="mt-4">
      <h4 className="font-semibold mb-2">Latency History:</h4>
      <ResponsiveContainer width="100%" height={200}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis
            dataKey="name"
            label={{ value: "Time", position: "insideBottom", dy: 10 }}
          />
          <YAxis unit="ms" />
          <Tooltip />
          <Line
            type="monotone"
            dataKey="ms"
            stroke="#8884d8"
            strokeWidth={2}
            dot={false}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default LatencyChart;
