import { Login } from "@features";
import { GuestLayout } from "@layouts";
import { Head } from "@inertiajs/react";

export default function LoginPage({ ...props }) {
  return (
    <>
      <GuestLayout>
        <Head title="Log in" />
        <Login {...props} />
      </GuestLayout>
    </>
  );
}
