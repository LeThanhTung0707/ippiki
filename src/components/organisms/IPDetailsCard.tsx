import React from "react";
import { InfoRow } from "../molecules";
import { GeoInfo } from "../templates";

type Props = {
  ipv4: string | null;
  ipv6: string | null;
  geo: GeoInfo | null;
};

const IPDetailsCard = ({ ipv4, ipv6, geo }: Props) => {
  const [latitude, longitude] = geo?.loc?.split(",") ?? ["--", "--"];

  return (
    <div className="rounded-lg border shadow w-full mx-auto overflow-hidden bg-white">
      {ipv6 && <InfoRow label="IPv6" value={ipv6 || "--"} />}
      <InfoRow label="IPv4" value={ipv4 || "--"} />
      <InfoRow label="Country" value={geo?.country || "--"} />
      <InfoRow label="Region" value={geo?.region || "--"} />
      <InfoRow label="City" value={geo?.city || "--"} />
      <InfoRow label="Timezone" value={geo?.timezone || "--"} />
      <InfoRow label="Zip code" value={geo?.postal || "--"} />
      <InfoRow label="Latitude" value={latitude} />
      <InfoRow label="Longitude" value={longitude} />
      <InfoRow label="Org" value={geo?.org || "--"} />
    </div>
  );
};

export default IPDetailsCard;
