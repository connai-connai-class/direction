import { useForm } from "@inertiajs/react";
import LoginForm from "./Form";

export default function Login() {
  const { data, setData, post, processing, errors } = useForm({
    email: "",
    password: "",
    remember: false,
  });

  const onSubmit = e => {
    e.preventDefault();
    post(route("login"));
  };

  const params = {
    onSubmit,
    data,
    errors,
    setData,
    processing,
  };

  return <LoginForm {...params} />;
}
