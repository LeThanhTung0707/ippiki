"use client";

import { MyIpPage } from "@/components/templates";
import { GeoInfo } from "@/types";
import { useEffect, useState } from "react";

export default function Home() {
  const [ipv4, setIPv4] = useState<string | null>(null);
  const [ipv6, setIPv6] = useState<string | null>(null);
  const [geo, setGeo] = useState<GeoInfo | null>(null);

  const fetchGeo = async (ip: string): Promise<GeoInfo> => {
    const res = await fetch("/api", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ip }),
    });
    return await res.json();
  };
  useEffect(() => {
    fetch("https://ipv4.lafibre.info/ip.php")
      .then((res) => res.text())
      .then(async (data) => {
        setIPv4(data);
        const geoData = await fetchGeo(data);
        console.log(geoData);
        setGeo(geoData);
      })
      .catch(() => setIPv4("Không thể lấy IPv4"));

    fetch("https://ipv6.lafibre.info/ip.php")
      .then((res) => res.text())
      .then((data) => setIPv6(data))
      .catch(() => setIPv6("Không thể lấy IPv6"));
  }, []);
  const title = "What Is My IP Address";
  const subtitle =
    "Instantly find your public IP address and discover your connection type (IPv4 or IPv6) with ease. Learn how your IP is used for online communication, geo-location, and network troubleshooting. Quick, reliable, and free to use on CheckIP App.";
  return (
    <div style={{ padding: "1rem", fontFamily: "sans-serif" }}>
      <MyIpPage
        title={title}
        subtitle={subtitle}
        ipv4={ipv4 ?? "Đang lấy..."}
        ipv6={ipv6 ?? "Đang lấy..."}
        geo={
          geo ?? {
            ip: "Đang lấy...",
            city: "Đang lấy...",
            region: "Đang lấy...",
            country: "Đang lấy...",
            org: "Đang lấy...",
            loc: "Đang lấy...",
            timezone: "Đang lấy...",
            postal: "Đang lấy...",
          }
        }
      />
    </div>
  );
}
