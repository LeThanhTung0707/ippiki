import { useQuery } from "@tanstack/react-query";
import { fetchDNS } from "./dnsService";

export function useDNSLookup(domain: string, enabled: boolean = false) {
  return useQuery({
    queryKey: ["dns", domain],
    queryFn: () => fetchDNS(domain),
    enabled,
    staleTime: 1000 * 60,
    retry: 1,
  });
}
