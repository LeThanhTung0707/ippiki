import { Button } from "@mui/material";
import { InputField } from "../atoms";
import SearchIcon from "@mui/icons-material/Search";
type DNSFormProps = {
  domain: string;
  setDomain: (val: string) => void;
  onSubmit: () => void;
  isLoading: boolean;
};

const DNSForm: React.FC<DNSFormProps> = ({
  domain,
  setDomain,
  onSubmit,
  isLoading,
}) => {
  return (
    <div className="space-y-4 flex gap-4">
      <InputField label="Domain" value={domain} onChange={setDomain} />
      <Button
        className="!px-8"
        variant="contained"
        color="primary"
        onClick={onSubmit}
        startIcon={<SearchIcon />}
        disabled={isLoading}
      >
        {isLoading ? "Loading..." : "Lookup"}
      </Button>
    </div>
  );
};

export default DNSForm;
