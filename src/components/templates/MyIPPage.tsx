import { SectionTitle } from "../atoms";
import { MapGG } from "../molecules";
import { IPDetailsCard } from "../organisms";
export type GeoInfo = {
  ip: string;
  city?: string;
  region?: string;
  country?: string;
  org?: string;
  loc: string;
  timezone: string;
  postal: string;
};
interface Props {
  title: string;
  subtitle: string;
  ipv4: string;
  ipv6: string;
  geo: GeoInfo;
}
const MyIpPage: React.FC<Props> = ({ title, subtitle, ipv4, ipv6, geo }) => {
  return (
    <div className="w-full">
      <SectionTitle title={title} subtitle={subtitle} />
      <div className="flex gap-4">
        <div className="w-1/2">
          <IPDetailsCard ipv4={ipv4} ipv6={ipv6} geo={geo} />
        </div>

        <div className="w-1/2">
          {geo?.loc && (
            <div className="h-full">
              <MapGG loc={geo.loc} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
export default MyIpPage;
