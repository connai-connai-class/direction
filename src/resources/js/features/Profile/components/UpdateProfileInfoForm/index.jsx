import { useForm } from "@inertiajs/react";
import Form from "./Form";

export default function UpdateProfileInformation({
  className = "",
  header = "",
  user = {},
  mustVerifyEmail = "",
  status = "",
}) {
  const { patch, data, errors, setData, processing, recentlySuccessful } =
    useForm({
      name: user.name,
      email: user.email,
    });

  const onSubmit = (e) => {
    e.preventDefault();
    patch(route("profile.update"));
  };

  const params = {
    data,
    errors,
    setData,
    processing,
    recentlySuccessful,
    mustVerifyEmail,
    status,
  };

  return (
    <section className={className}>
      {header}
      <Form {...params} onSubmit={onSubmit} />
    </section>
  );
}
