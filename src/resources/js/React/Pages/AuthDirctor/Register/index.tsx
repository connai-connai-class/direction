import { useEffect, FormEventHandler } from "react";
import { Head, Link, useForm } from "@inertiajs/react";
import { GuestLayout } from "@layouts";
import { InputError, InputLabel, PrimaryButton } from "@ui-elements";
import RegisterData from "./type";
import inputs from "./inputs";

export default function Register() {
  const { data, setData, post, processing, errors, reset } = useForm({
    name: "",
    email: "",
    password: "",
    password_confirmation: "",
  });

  useEffect(() => {
    reset("password", "password_confirmation");
  }, []);

  const onSubmit: FormEventHandler = (e) => {
    e.preventDefault();
    post(route("register"));
  };

  return (
    <GuestLayout>
      <Head title="Director Sign up" />

      <form onSubmit={onSubmit}>
        {inputs.map((input) => (
          <div key={input.key} className="mt-4">
            <InputLabel htmlFor={input.key} value={input.label} />

            <input.element
              id={input.key}
              name={input.key}
              value={data[input.key as keyof RegisterData]}
              className="mt-1 block w-full"
              autoComplete={input.key}
              isFocused={input.required || false}
              onChange={(e) =>
                setData(input.key as keyof RegisterData, e.target.value)
              }
              required={input.required || false}
            />

            <InputError message={errors.name} className="mt-2" />
          </div>
        ))}

        <div className="flex items-center justify-end mt-4">
          <Link
            href={route("login")}
            className="underline text-sm text-gray-600 hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Already registered?
          </Link>

          <PrimaryButton className="ml-4" disabled={processing}>
            Register
          </PrimaryButton>
        </div>
      </form>
    </GuestLayout>
  );
}
