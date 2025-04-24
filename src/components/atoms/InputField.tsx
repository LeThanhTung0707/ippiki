import { TextField } from "@mui/material";

type InputFieldProps = {
  label: string;
  value: string;
  onChange: (val: string) => void;
};

const InputField: React.FC<InputFieldProps> = ({ label, value, onChange }) => {
  return (
    <TextField
      fullWidth
      label={label}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      variant="outlined"
    />
  );
};

export default InputField;
