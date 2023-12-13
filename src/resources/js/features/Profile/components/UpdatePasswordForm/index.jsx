import { useRef } from "react";
import { useForm } from "@inertiajs/react";
import Form from "./Form";

export default function UpdatePassword({ className = "", header = "" }) {
  const passwordInput = useRef();
  const currentPasswordInput = useRef();

  const { reset, put, ...formState } = useForm({
    current_password: "",
    password: "",
    password_confirmation: "",
  });

  const updatePassword = (e) => {
    e.preventDefault();

    put(route("password.update"), {
      preserveScroll: true,
      onSuccess: () => reset(),
      onError: (errors) => {
        if (errors.password) {
          reset("password", "password_confirmation");
          passwordInput.current.focus();
        }

        if (errors.current_password) {
          reset("current_password");
          currentPasswordInput.current.focus();
        }
      },
    });
  };

  return (
    <section className={className}>
      {header}
      <Form onSubmit={updatePassword} {...formState} />
    </section>
  );
}
