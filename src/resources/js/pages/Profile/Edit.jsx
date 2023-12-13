import { Head } from "@inertiajs/react";
import { AuthenticatedLayout } from "@layouts";
import { Card } from "@ui-elements";
import {
  UpdateProfileForm,
  UpdatePasswordForm,
  DeleteUserForm,
} from "@features/Profile";
import {
  DeleteUserHeader,
  UpdatePasswordHeader,
  UpdateProfileHeader,
} from "./components";

export default function Edit({ auth, mustVerifyEmail, status }) {
  return (
    <AuthenticatedLayout
      user={auth.user}
      header={
        <h2 className="font-semibold text-xl text-gray-800 leading-tight">
          Profile
        </h2>
      }
    >
      <Head title="Profile" />

      <div className="py-12">
        <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 space-y-6">
          <Card>
            <UpdateProfileForm
              className="max-w-xl"
              header={<UpdateProfileHeader />}
              user={auth.user}
              mustVerifyEmail={mustVerifyEmail}
              status={status}
            />
          </Card>

          <Card>
            <UpdatePasswordForm
              className="max-w-xl"
              header={<UpdatePasswordHeader />}
            />
          </Card>

          <Card>
            <DeleteUserForm
              className="max-w-xl"
              header={<DeleteUserHeader />}
            />
          </Card>
        </div>
      </div>
    </AuthenticatedLayout>
  );
}
