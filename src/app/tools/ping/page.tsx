import { PingPage } from "@/components/templates";

const Ping = () => {
  const title = "Ping";
  const subtitle =
    " Measure approximate response time to a URL using HTTP HEAD request.";
  return <PingPage title={title} subtitle={subtitle} />;
};
export default Ping;
