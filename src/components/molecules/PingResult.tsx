const PingResult: React.FC<{
  latencies: { name: string; ms: number }[];
  error: string | null;
}> = ({ latencies, error }) => (
  <>
    {latencies.length > 0 && (
      <div className="mt-2 space-y-2">
        <h4 className="font-semibold">Latency History:</h4>
        <ul className="list-disc list-inside text-sm text-green-700">
          {latencies.map((entry, idx) => (
            <li key={idx}>
              #{idx + 1} – {entry.ms} ms at {entry.name}
            </li>
          ))}
        </ul>
      </div>
    )}
    {error && <p className="text-red-500 font-medium">{error}</p>}
  </>
);

export default PingResult;
