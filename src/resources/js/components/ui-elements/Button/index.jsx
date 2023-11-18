import { Button as MuiButton } from "@mui/material";

export default function Button({
  title = "",
  color = "primary",
  type = "button",
  variant = "contained",
  onClick = () => false,
  children,
  ...props
}) {
  return (
    <MuiButton
      variant={variant}
      color={color}
      type={type}
      onClick={onClick}
      {...props}
    >
      {title ? title : children}
    </MuiButton>
  );
}
