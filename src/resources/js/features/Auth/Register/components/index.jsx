import { useForm } from "@inertiajs/react";
import RegisterForm from "./Form";

export default function Register({ authority }) {
  const { data, setData, post, processing, errors } = useForm({
    name: "",
    email: "",
    password: "",
    password_confirmation: "",
    authority,
  });

  const onSubmit = (e) => {
    e.preventDefault();
    post(route("register"));
  };

  const params = {
    onSubmit,
    data,
    errors,
    setData,
    processing,
    authority,
  };

  return <RegisterForm {...params} />;
}
