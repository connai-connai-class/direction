import { Box, TextField as MuiTextField } from "@mui/material";

export default function TextField({
  label = "",
  value = "",
  type = "text",
  error = "",
  name = "",
  placeholder = "",
  onChange = () => false,
  dataTestid = "",
  ...props
}) {
  return (
    <Box>
      <MuiTextField
        variant="outlined"
        fullWidth
        name={name}
        label={label}
        value={value}
        type={type}
        error={error ? true : false}
        onChange={e => onChange(e.target.value)}
        placeholder={placeholder}
        inputProps={{ "data-testid": dataTestid }}
        {...props}
      />
    </Box>
  );
}
