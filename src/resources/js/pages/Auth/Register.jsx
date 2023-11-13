import { GuestLayout } from "@layouts";
import { Head } from "@inertiajs/react";
import { Register } from "@features";

export default function RegisterPage({ ...props }) {
  return (
    <GuestLayout>
      <Head title="Register" />
      <Register {...props} />
    </GuestLayout>
  );
}
