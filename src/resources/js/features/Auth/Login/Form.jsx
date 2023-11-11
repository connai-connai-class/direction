import { Button, Link } from "@ui-elements";
import { TextField, Checkbox } from "@ui-parts";

export default function Login({ onSubmit, data, errors, setData, processing }) {
  const fields = ["email", "password"];
  return (
    <>
      <form onSubmit={onSubmit} noValidate>
        {fields.map(field => (
          <div className="mt-4" key={field}>
            <TextField
              type={field}
              name={field}
              label={field}
              value={data[field]}
              error={errors[field]}
              onChange={v => setData(field, v)}
            />
          </div>
        ))}

        <div className="block mt-4">
          <Checkbox
            name="remember"
            checked={data.remember}
            label="Remember me"
            onChange={v => setData("remember", v)}
          />
        </div>

        <div className="flex items-center justify-end mt-4">
          <Link href={route("password.request")} text="Forgot your password?" />

          <div className="ms-4">
            <Button title="Login" disabled={processing} type="submit">
              Log in
            </Button>
          </div>
        </div>
      </form>
    </>
  );
}
