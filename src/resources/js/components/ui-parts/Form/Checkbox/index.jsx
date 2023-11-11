import { Box, FormControlLabel } from "@mui/material";
import { Checkbox as AtomCheckbox } from "@ui-elements";

export default function Checkbox({
  checked = false,
  label = "",
  onChange = () => false,
}) {
  return (
    <>
      <Box>
        <FormControlLabel
          control={<AtomCheckbox checked={checked} onChange={onChange} />}
          label={label}
          sx={{ margin: 0 }}
        />
      </Box>
    </>
  );
}
