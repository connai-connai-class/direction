import { Head } from "@inertiajs/react";
import { Typography, Divider } from "@mui/material";
import { Link } from "@ui-elements";
import { Login, SocialLogin } from "@features";
import { AuthLayout } from "@layouts";

export default function LoginPage({ appName, authority }) {
  return (
    <>
      <Head title="Sign in" />
      <AuthLayout>
        <Typography variant="h4">Sign in to {appName}</Typography>

        <Typography variant="body2" sx={{ mt: 2, mb: 5 }}>
          Don’t have an account?
          <Link className="ml-1" href={route(`register.${authority}`)}>
            Get started
          </Link>
        </Typography>
        <SocialLogin />

        <Divider sx={{ my: 3 }}>
          <Typography variant="body2" sx={{ color: "text.secondary" }}>
            OR
          </Typography>
        </Divider>
        <Login authority={authority} />
      </AuthLayout>
    </>
  );
}
