import { ToolsPage } from "@/components/templates";
import JsonIcon from "@mui/icons-material/DataObject";
import JwtIcon from "@mui/icons-material/VpnKey";
import Base64Icon from "@mui/icons-material/SyncAlt";
import HashIcon from "@mui/icons-material/Fingerprint";
import UuidIcon from "@mui/icons-material/Tag";
import RegexIcon from "@mui/icons-material/Code";
import IpIcon from "@mui/icons-material/Public";
import DnsIcon from "@mui/icons-material/Dns";
import PingIcon from "@mui/icons-material/WifiTethering";
import WhoisIcon from "@mui/icons-material/Info";
import LocationIcon from "@mui/icons-material/LocationOn";
import SslIcon from "@mui/icons-material/Security";
import HeaderIcon from "@mui/icons-material/Http";
import RedirectIcon from "@mui/icons-material/Redo";
import CronIcon from "@mui/icons-material/Schedule";
import TimeIcon from "@mui/icons-material/AccessTime";
import BuildIcon from "@mui/icons-material/Build";
import LanguageIcon from "@mui/icons-material/Language";
import LockIcon from "@mui/icons-material/Lock";
import MiscellaneousServicesIcon from "@mui/icons-material/MiscellaneousServices";
import { SvgIconComponent } from "@mui/icons-material";
type Tool = {
  name: string;
  description: string;
  path: string;
};

export type ToolGroup = {
  category: string;
  tools: Tool[];
};
const categoryIcons: { [key: string]: SvgIconComponent } = {
  "Dev Tools": BuildIcon,
  "IP & Network Tools": LanguageIcon,
  "Security & Encoding Tools": LockIcon,
  "Miscellaneous Tools": MiscellaneousServicesIcon,
};
const toolIcons: { [key: string]: SvgIconComponent } = {
  "JSON Formatter": JsonIcon,
  "JWT Decoder": JwtIcon,
  "Base64 Encode/Decode": Base64Icon,
  "Hash Generator": HashIcon,
  "UUID Generator": UuidIcon,
  "Regex Tester": RegexIcon,
  "Check IP": IpIcon,
  "DNS Lookup": DnsIcon,
  Ping: PingIcon,
  "WHOIS Lookup": WhoisIcon,
  "IP Geolocation": LocationIcon,
  "SSL Checker": SslIcon,
  "HTTP Header Viewer": HeaderIcon,
  "Redirect Checker": RedirectIcon,
  "Cron Parser": CronIcon,
  "Time Converter": TimeIcon,
};

const groupedTools: ToolGroup[] = [
  {
    category: "Dev Tools",
    tools: [
      {
        name: "JSON Formatter",
        description: "Beautify and validate JSON data",
        path: "/tools/json-formatter",
      },
      {
        name: "JWT Decoder",
        description: "Decode JWT token and inspect payload",
        path: "/tools/jwt-decoder",
      },
      {
        name: "Base64 Encode/Decode",
        description: "Convert strings to/from base64",
        path: "/tools/base64",
      },
      {
        name: "Hash Generator",
        description: "Generate SHA256, MD5, and other hashes",
        path: "/tools/hash-generator",
      },
      {
        name: "UUID Generator",
        description: "Create UUID version 4 identifiers",
        path: "/tools/uuid-generator",
      },
      {
        name: "Regex Tester",
        description: "Test and debug regular expressions",
        path: "/tools/regex-tester",
      },
    ],
  },
  {
    category: "IP & Network Tools",
    tools: [
      {
        name: "Check IP",
        description: "Fetch your public IP address",
        path: "/tools/ip-check",
      },
      {
        name: "DNS Lookup",
        description: "Query DNS records of a domain",
        path: "/tools/dns-lookup",
      },
      {
        name: "Ping",
        description: "Simulate ping to any domain",
        path: "/tools/ping",
      },
      {
        name: "WHOIS Lookup",
        description: "Get domain WHOIS information",
        path: "/tools/whois",
      },
      {
        name: "IP Geolocation",
        description: "Locate IP addresses on the map",
        path: "/tools/ip-geolocation",
      },
    ],
  },
  {
    category: "Security & Encoding Tools",
    tools: [
      {
        name: "SSL Checker",
        description: "Check website SSL certificate details",
        path: "/tools/ssl-checker",
      },
      {
        name: "HTTP Header Viewer",
        description: "Inspect HTTP response headers",
        path: "/tools/http-headers",
      },
      {
        name: "Redirect Checker",
        description: "Trace redirect paths of a URL",
        path: "/tools/redirect-checker",
      },
    ],
  },
  {
    category: "Miscellaneous Tools",
    tools: [
      {
        name: "Cron Parser",
        description: "Convert cron syntax into readable format",
        path: "/tools/cron-parser",
      },
      {
        name: "Time Converter",
        description: "Convert between timezones and timestamps",
        path: "/tools/time-converter",
      },
    ],
  },
];
const Tools: React.FC = () => {
  const title = "Dev Toolbox";
  const subtitle =
    "Test, debug, and convert faster with powerful web-based tools.";
  return (
    <ToolsPage
      title={title}
      subtitle={subtitle}
      groupedTools={groupedTools}
      toolIcons={toolIcons}
      categoryIcons={categoryIcons}
    />
  );
};
export default Tools;
