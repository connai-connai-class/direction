import { AuthenticatedLayout } from "@layouts";
import { Head } from "@inertiajs/react";
import { Link } from "@mui/material";

export default function Dashboard({ auth }) {
  console.log(auth.user);
  let message;

  if (auth?.user.director_uid) {
    message = <Link href="/director/profile">director_profile</Link>;
  } else {
    message = <Link href="/creator/profile">creator_profile</Link>;
  }


  return (
    <AuthenticatedLayout user={auth.user}>

      <Head title="Dashboard" />

      <div className="py-12">
        <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
          <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
            <div className="p-6 text-gray-900">You&apos;re logged in!</div>
          </div>
        </div>
      </div>
      {message}
    </AuthenticatedLayout>
  );
}
