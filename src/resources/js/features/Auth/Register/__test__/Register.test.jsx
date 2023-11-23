import { beforeEach, describe, expect, test, vi } from "vitest";
import { render, screen, cleanup } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Register from "../";
import Form from "../components/Form";

describe("Register form Test", () => {
  beforeEach(() => {
    render(<Register />);
  });

  test("Should show register form", async () => {
    expect(screen.getByText("name"));
    expect(screen.getByText("email"));
    expect(screen.getByText("password"));
    expect(screen.getByText("Confirm Password"));
    expect(screen.getByText("Register"));
    expect(screen.getByText(/Already registered?/i));
  });

  test("Should input name and initial value is null", async () => {
    const value = "user name";
    const name = screen.getByRole("textbox", { name: "name" });
    expect(name.value).toBe("");
    await userEvent.type(name, value);
    expect(name.value).toBe(value);
  });

  test("Should input email and initial value is null", async () => {
    const value = "test@test.com";
    const email = screen.getByRole("textbox", { name: "email" });
    expect(email.value).toBe("");
    await userEvent.type(email, value);
    expect(email.value).toBe(value);
  });

  test("Should input password and initial value is null", async () => {
    const value = "password";
    const password = screen.getByTestId("password");
    expect(password.value).toBe("");
    await userEvent.type(password, value);
    expect(password.value).toBe(value);
  });

  test("Should input password confirmation and initial value is null", async () => {
    const value = "password";
    const password_confirm = screen.getByTestId("password_confirmation");
    expect(password_confirm.value).toBe("");
    await userEvent.type(password_confirm, value);
    expect(password_confirm.value).toBe(value);
  });

  test("Should show error message", async () => {
    const params = {
      data: {},
      errors: {
        name: "name error error",
        email: "email error error",
        password: "password error error",
      },
      setData: vi.fn(),
      onSubmit: vi.fn(),
      processing: false,
    };

    cleanup();
    render(<Form {...params} />);

    expect(screen.getByText("name error error")).toBeDefined();
    expect(screen.getByText("email error error")).toBeDefined();
    expect(screen.getByText("password error error")).toBeDefined();
  });

  test("Should post register form", async () => {
    const onSubmit = vi.fn();
    const params = {
      data: {},
      errors: {},
      setData: vi.fn(),
      processing: false,
      onSubmit,
    };

    cleanup();
    render(<Form {...params} />);

    const button = screen.getByRole("button");
    await userEvent.click(button);
    expect(onSubmit).toHaveBeenCalled();
  });

  test("Should not post register form", async () => {
    const onSubmit = vi.fn();
    const params = {
      data: {},
      errors: {},
      setData: vi.fn(),
      processing: true,
      onSubmit,
    };

    cleanup();
    render(<Form {...params} />);

    const button = screen.getByRole("button");
    const user = userEvent.setup({ pointerEventsCheck: 0 });
    await user.click(button);
    expect(onSubmit).not.toHaveBeenCalled();
  });
});
