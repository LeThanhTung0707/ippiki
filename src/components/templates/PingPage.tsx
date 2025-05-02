import { SectionTitle } from "../atoms";
import { PingForm } from "../organisms";
interface Props {
  title: string;
  subtitle: string;
}
const PingPage: React.FC<Props> = ({ title, subtitle }) => {
  return (
    <div className="max-w-5xl mx-auto mt-10 p-4">
      <SectionTitle title={title} subtitle={subtitle} />
      <PingForm />
    </div>
  );
};

export default PingPage;
