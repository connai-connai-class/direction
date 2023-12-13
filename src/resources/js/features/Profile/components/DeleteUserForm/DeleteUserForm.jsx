import { Button } from "@ui-elements";
import { TextField } from "@ui-parts";

export default function Form({
  closeModal,
  deleteUser,
  errors,
  data,
  setData,
  processing,
}) {
  return (
    <form onSubmit={deleteUser} className="p-6">
      <h2 className="text-lg font-medium text-gray-900">
        Are you sure you want to delete your account?
      </h2>

      <p className="mt-1 text-sm text-gray-600">
        Once your account is deleted, all of its resources and data will be
        permanently deleted. Please enter your password to confirm you would
        like to permanently delete your account.
      </p>

      <div className="mt-6">
        <TextField
          type="password"
          dataTestid="password"
          name="password"
          label="password"
          error={errors.password}
          value={data.password}
          onChange={(v) => setData("password", v)}
          className="mt-1 block w-3/4"
          placeholder="Password"
        />
      </div>

      <div className="mt-6 flex justify-end gap-6">
        <Button color="secondary" onClick={closeModal}>
          Cancel
        </Button>

        <Button color="error" className="ms-3" disabled={processing}>
          Delete Account
        </Button>
      </div>
    </form>
  );
}
