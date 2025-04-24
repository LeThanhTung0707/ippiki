"use client";
import { DNSLookupPage } from "@/components/templates";
import { useToast } from "@/lib";
import { useDNSLookup } from "@/services";
import { useEffect, useState } from "react";

const DNSLookup = () => {
  const [domain, setDomain] = useState("");
  const [enabled, setEnabled] = useState(false);
  const toast = useToast();

  const { data, error, isLoading, refetch } = useDNSLookup(domain, enabled);

  useEffect(() => {
    if (error) {
      toast.error((error as Error)?.message || "Something went wrong");
    }
  }, [error, toast]);

  const handleLookup = () => {
    if (!domain) return;
    setEnabled(true);
    refetch();
    setEnabled(false);
  };
  const title = "DNS Lookup";
  const subtitle =
    "Quickly check all DNS records of any domain, including A, AAAA, CNAME, MX, NS, TXT, and more. Use our DNS Lookup tool to troubleshoot domain issues, verify configurations, and ensure your website is properly set up.";
  return (
    <DNSLookupPage
      isLoading={isLoading}
      title={title}
      subtitle={subtitle}
      handleLookup={handleLookup}
      domain={domain}
      setDomain={setDomain}
      result={data}
    />
  );
};
export default DNSLookup;
