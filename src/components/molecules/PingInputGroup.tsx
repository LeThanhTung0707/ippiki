import { InputField, LabelText } from "../atoms";

type Props = {
  url: string;
  setUrl: (val: string) => void;
};

const PingInputGroup: React.FC<Props> = ({ url, setUrl }) => (
  <div className="space-y-1 flex gap-4 flex-col">
    <LabelText>Target URL</LabelText>
    <InputField label="Url" value={url} onChange={setUrl} />
  </div>
);
export default PingInputGroup;
