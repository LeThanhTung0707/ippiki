"use client";

import { Card, CardContent } from "@mui/material";
import { useRef, useState } from "react";
import {
  PingInputGroup,
  PingResult,
  PingActionButtons,
  LatencyChart,
} from "../molecules";

const PingForm = () => {
  const [url, setUrl] = useState("");
  const [latencies, setLatencies] = useState<{ ms: number; time: string }[]>(
    []
  );
  const [error, setError] = useState<string | null>(null);
  const [isPinging, setIsPinging] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const doPing = async () => {
    try {
      const start = performance.now();
      await fetch(url, { method: "HEAD", mode: "no-cors" });
      const end = performance.now();
      const result = Number((end - start).toFixed(2));
      const timestamp = new Date().toLocaleTimeString();
      setLatencies((prev) => [...prev, { ms: result, time: timestamp }]);
      setError(null);
    } catch {
      setError("Ping failed. URL might not allow HEAD/no-cors requests.");
    }
  };

  const startPinging = () => {
    if (!url) return;
    setIsPinging(true);
    doPing();
    intervalRef.current = setInterval(() => doPing(), 1000);
  };

  const stopPinging = () => {
    setIsPinging(false);
    if (intervalRef.current) clearInterval(intervalRef.current);
  };

  const clearResults = () => {
    setLatencies([]);
    setError(null);
  };

  return (
    <Card>
      <CardContent className="p-4 flex flex-col gap-4">
        <PingInputGroup url={url} setUrl={setUrl} />
        <PingActionButtons
          isPinging={isPinging}
          canClear={latencies.length > 0}
          onStart={startPinging}
          onStop={stopPinging}
          onClear={clearResults}
        />
        <LatencyChart
          data={latencies.map((l) => ({ name: l.time, ms: l.ms }))}
        />
        <PingResult
          latencies={latencies.map((l) => ({ name: l.time, ms: l.ms }))}
          error={error}
        />
      </CardContent>
    </Card>
  );
};

export default PingForm;
