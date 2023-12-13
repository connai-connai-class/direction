import { Transition } from "@headlessui/react";
import { Button } from "@ui-elements";
import { TextField } from "@ui-parts";
import MustVerifyMsg from "./MustVerifyMsg";

export default function Form({
  onSubmit,
  data,
  errors,
  setData,
  processing,
  recentlySuccessful,
  mustVerifyEmail,
  user,
  status,
}) {
  const fields = [
    {
      id: "name",
      label: "Label",
      autoComplete: "name",
    },
    {
      id: "email",
      label: "Email",
      autoComplete: "username",
    },
  ];

  return (
    <form onSubmit={onSubmit} className="mt-6 space-y-6" noValidate>
      {fields.map((field) => (
        <div key={field.id}>
          <TextField
            id={field.id}
            name={field.id}
            label={field.label}
            value={data[field.id]}
            error={errors[field.id]}
            className="mt-1 block w-full"
            autoComplete={field.autoComplete}
            onChange={(v) => setData(field.id, v)}
          />
        </div>
      ))}

      {mustVerifyEmail && user.email_verified_at === null && (
        <MustVerifyMsg status={status} />
      )}

      <div className="flex items-center gap-4">
        <Button type="submit" disabled={processing}>
          Save
        </Button>

        <Transition
          show={recentlySuccessful}
          enter="transition ease-in-out"
          enterFrom="opacity-0"
          leave="transition ease-in-out"
          leaveTo="opacity-0"
        >
          <p className="text-sm text-gray-600">Saved.</p>
        </Transition>
      </div>
    </form>
  );
}
