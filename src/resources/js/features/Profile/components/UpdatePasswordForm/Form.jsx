import { Transition } from "@headlessui/react";
import { Button } from "@ui-elements";
import { TextField } from "@ui-parts";

export default function Form({
  onSubmit,
  data,
  errors,
  setData,
  processing,
  recentlySuccessful,
}) {
  const fields = [
    {
      id: "current_password",
      label: "Current password",
      type: "password",
      className: "",
      autoComplete: "current-password",
    },
    {
      id: "password",
      label: "New password",
      type: "password",
      className: "",
    },
    {
      id: "password_confirmationpassword",
      label: "Confirm password",
      type: "password",
      className: "",
    },
  ];
  return (
    <form onSubmit={onSubmit} className="mt-6 space-y-6" noValidate>
      {fields.map((field) => (
        <div key={field.id}>
          <TextField
            id={field.id}
            dataTestid={field.id}
            name={field.id}
            label={field.label}
            error={errors[field.id]}
            value={data[field.id]}
            onChange={(v) => setData(field.id, v)}
            type={field.type}
            className="mt-1 block w-full"
            autoComplete={field.autoComplete}
          />
        </div>
      ))}

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
