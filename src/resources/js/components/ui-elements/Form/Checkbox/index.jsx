import { Checkbox as MuiCheckbox } from "@mui/material";

export default function Checkbox({
  checked = false,
  onChange = () => false,
  color = "primary",
}) {
  return (
    <>
      <MuiCheckbox
        checked={checked}
        onChange={e => onChange(e.target.checked)}
        color={color}
      />
    </>
  );
}
