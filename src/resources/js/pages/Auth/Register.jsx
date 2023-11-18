import { Head } from "@inertiajs/react";
import { Typography, Divider, Box } from "@mui/material";
import { AuthLayout } from "@layouts";
import { Register, SocialLogin } from "@features";

export default function RegisterPage({ appName, ...props }) {
  return (
    <>
      <Head title="Register" />

      <AuthLayout>
        <Typography variant="h4">Sign up to {appName}</Typography>

        <Box sx={{ mt: 2 }}>
          <SocialLogin />
        </Box>

        <Divider sx={{ my: 3 }}>
          <Typography variant="body2" sx={{ color: "text.secondary" }}>
            OR
          </Typography>
        </Divider>
        <Register {...props} />
      </AuthLayout>
    </>
  );
}
