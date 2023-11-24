import { Link, Button } from "@ui-elements";
import { TextField } from "@ui-parts";

export default function RegisterForm({
  onSubmit,
  data,
  errors,
  setData,
  processing,
  authority,
}) {
  return (
    <form onSubmit={onSubmit} noValidate>
      <div>
        <TextField
          id="name"
          name="name"
          label="Name"
          value={data.name}
          error={errors.name}
          className="mt-1 block w-full"
          autoComplete="name"
          onChange={(v) => setData("name", v)}
          required
        />
      </div>

      <div className="mt-4">
        <TextField
          id="email"
          type="email"
          name="email"
          label="Email"
          value={data.email}
          error={errors.email}
          className="mt-1 block w-full"
          autoComplete="username"
          onChange={(v) => setData("email", v)}
          required
        />
      </div>

      <div className="mt-4">
        <TextField
          id="password"
          dataTestid="password"
          name="password"
          type="password"
          label="Password"
          value={data.password}
          error={errors.password}
          className="mt-1 block w-full"
          autoComplete="new-password"
          onChange={(v) => setData("password", v)}
          required
        />
      </div>

      <div className="mt-4">
        <TextField
          id="password_confirmation"
          dataTestid="password_confirmation"
          type="password"
          name="password_confirmation"
          label="Confirm Password"
          value={data.password_confirmation}
          error={errors.password_confirmation}
          className="mt-1 block w-full"
          autoComplete="new-password"
          onChange={(v) => setData("password_confirmation", v)}
          required
        />
      </div>

      <div className="flex items-center justify-end mt-4 gap-3">
        <Link href={route(`login.${authority}`)} text="Already registered?" />

        <Button
          className="ms-4"
          color="primary"
          disabled={processing}
          title="Register"
          type="submit"
        />
      </div>
    </form>
  );
}
