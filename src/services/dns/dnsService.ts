import { DNSResponse } from "@/types";

export async function fetchDNS(domain: string): Promise<DNSResponse> {
  const res = await fetch(`/api/dns-lookup?domain=${domain}`);
  if (!res.ok) {
    const errorData = await res.json();
    throw new Error(errorData?.error || "Failed to fetch DNS data");
  }
  return res.json();
}
