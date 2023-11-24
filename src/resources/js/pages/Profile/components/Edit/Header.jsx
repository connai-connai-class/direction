export function UpdateProfileHeader() {
  return (
    <header>
      <h2 className="text-lg font-medium text-gray-900">Profile Information</h2>

      <p className="mt-1 text-sm text-gray-600">
        Update your account&apos;s profile information and email address.
      </p>
    </header>
  );
}

export function UpdatePasswordHeader() {
  return (
    <header>
      <h2 className="text-lg font-medium text-gray-900">Update Password</h2>

      <p className="mt-1 text-sm text-gray-600">
        Ensure your account is using a long, random password to stay secure.
      </p>
    </header>
  );
}

export function DeleteUserHeader() {
  return (
    <header>
      <h2 className="text-lg font-medium text-gray-900">Delete Account</h2>

      <p className="mt-1 text-sm text-gray-600">
        Once your account is deleted, all of its resources and data will be
        permanently deleted. Before deleting your account, please download any
        data or information that you wish to retain.
      </p>
    </header>
  );
}
