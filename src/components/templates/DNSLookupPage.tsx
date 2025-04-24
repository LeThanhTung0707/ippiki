"use client";

import DNSForm from "@/components/molecules/DNSForm";
import DNSResult from "@/components/organisms/DNSResult";
import { DNSResponse } from "@/types/dns";
import { SectionTitle } from "../atoms";

interface Props {
  handleLookup: () => void;
  domain: string;
  setDomain: React.Dispatch<React.SetStateAction<string>>;
  result: DNSResponse | undefined;
  title: string;
  subtitle: string;
  isLoading: boolean;
}

const DNSLookupPage: React.FC<Props> = ({
  handleLookup,
  domain,
  setDomain,
  result,
  title,
  subtitle,
  isLoading,
}) => {
  return (
    <div className="w-full">
      <SectionTitle title={title} subtitle={subtitle} />
      <div className="max-w-3xl mx-auto p-4 space-y-6">
        <DNSForm
          domain={domain}
          setDomain={setDomain}
          onSubmit={handleLookup}
          isLoading={isLoading}
        />
        <DNSResult data={result} />
      </div>
    </div>
  );
};

export default DNSLookupPage;
