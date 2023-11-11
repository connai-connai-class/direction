import { Button as MuiButton } from "@mui/material";

export default function Button({
  title = "button",
  color = "primary",
  type = "button",
  onClick = () => false,
  ...props
}) {
  return (
    <div onClick={onClick}>
      <MuiButton variant="contained" color={color} type={type} {...props}>
        {title}
      </MuiButton>
    </div>
  );
}
