import { Stack } from "@mui/material";
import { alpha, useTheme } from "@mui/material/styles";
import { Iconify, Button } from "@ui-elements";

export default function SocialLogin() {
  const theme = useTheme();

  const icons = [
    {
      key: "google",
      icon: "eva:google-fill",
      color: "#DF3E30",
    },
    {
      key: "facebook",
      icon: "eva:facebook-fill",
      color: "#1877F2",
    },
    {
      key: "twitter",
      icon: "eva:twitter-fill",
      color: "#1C9CEA",
    },
  ];

  return (
    <Stack direction="row" spacing={2}>
      {icons.map((icon) => (
        <Button
          key={icon.key}
          fullWidth
          size="large"
          color="inherit"
          variant="outlined"
          sx={{ borderColor: alpha(theme.palette.grey[500], 0.16) }}
        >
          <Iconify icon={icon.icon} color={icon.color} />
        </Button>
      ))}
    </Stack>
  );
}
