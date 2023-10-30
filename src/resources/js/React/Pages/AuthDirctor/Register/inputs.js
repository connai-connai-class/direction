import { TextField } from "@ui-elements";
const inputs = [
  {
    key: "name",
    label: "Name",
    isFocused: true,
    required: true,
    element: TextField,
  },
  {
    key: "email",
    label: "Email",
    type: "email",
    required: true,
    element: TextField,
  },
  {
    key: "password",
    label: "Password",
    type: "password",
    required: true,
    element: TextField,
  },
  {
    key: "password_confirmation",
    label: "Confirm Password",
    type: "password",
    required: true,
    element: TextField,
  },
];
export default inputs;
