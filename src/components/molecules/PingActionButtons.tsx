import { Button } from "@mui/material";

type Props = {
  isPinging: boolean;
  canClear: boolean;
  onStart: () => void;
  onStop: () => void;
  onClear: () => void;
};

const PingActionButtons: React.FC<Props> = ({
  isPinging,
  canClear,
  onStart,
  onStop,
  onClear,
}) => (
  <div className="flex gap-2">
    <Button
      variant="contained"
      color="primary"
      onClick={onStart}
      disabled={isPinging}
    >
      Start
    </Button>
    <Button
      variant="outlined"
      color="secondary"
      onClick={onStop}
      disabled={!isPinging}
    >
      Stop
    </Button>
    <Button
      variant="outlined"
      color="error"
      onClick={onClear}
      disabled={!canClear}
    >
      Clear
    </Button>
  </div>
);

export default PingActionButtons;
