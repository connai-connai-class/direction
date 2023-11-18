import { Box, Card, Stack } from "@mui/material";
import { alpha, useTheme } from "@mui/material/styles";

import { bgGradient } from "@themes/css";

import { Logo } from "@ui-elements";

// ----------------------------------------------------------------------

export default function LoginView({ children }) {
  const theme = useTheme();

  return (
    <Box
      sx={{
        ...bgGradient({
          color: alpha(theme.palette.background.default, 0.9),
          imgUrl: "/assets/background/overlay_4.jpg",
        }),
        height: "100vh",
      }}
    >
      <Logo
        sx={{
          position: "fixed",
          top: { xs: 16, md: 24 },
          left: { xs: 16, md: 24 },
        }}
      />

      <Stack alignItems="center" justifyContent="center" sx={{ height: 1 }}>
        <Card
          sx={{
            p: 5,
            width: 1,
            maxWidth: 420,
          }}
        >
          {children}
        </Card>
      </Stack>
    </Box>
  );
}
