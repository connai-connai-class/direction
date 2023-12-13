import { beforeEach, describe, expect, test, vi } from "vitest";
import { render, screen, cleanup } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Login from "../";
import Form from "../components/Form";

describe("Login form Test", () => {
  beforeEach(() => {
    render(<Login />);
  });

  test("Should show login form", async () => {
    expect(screen.getByText("email")).toBeDefined();
    expect(screen.getByText("password")).toBeDefined();
    expect(screen.getByText(/remember me/i)).toBeDefined();
    expect(screen.getByText(/Log in/i)).toBeDefined();
    expect(screen.getByText(/Forgot your password?/i)).toBeDefined();
  });

  test("Should not check remember me checkbox at the start", () => {
    const remember = screen.queryByRole("checkbox");
    expect(remember.checked).toBe(false);
  });

  test("Should click remember checkbox", async () => {
    const remember = screen.queryByRole("checkbox");
    await userEvent.click(remember);
    expect(remember.checked).toBe(true);
  });

  test("Should input email ans initial value is null", async () => {
    const value = "test@test.com";
    const email = screen.getByTestId("email");
    expect(email.value).toBe("");
    await userEvent.type(email, value);
    expect(email.value).toBe(value);
  });

  test("Should input password initial value is null", async () => {
    const value = "password";
    const password = screen.getByTestId("password");
    expect(password.value).toBe("");
    await userEvent.type(password, value);
    expect(password.value).toBe(value);
  });

  test("Should show error message", async () => {
    const params = {
      data: {},
      errors: {
        email: "email error error",
        password: "password error error",
      },
      setData: vi.fn(),
      onSubmit: vi.fn(),
      processing: false,
    };

    cleanup();
    render(<Form {...params} />);

    expect(screen.getByText("email error error")).toBeDefined();
    expect(screen.getByText("password error error")).toBeDefined();
  });

  test("Should post login form", async () => {
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

  test("Should not post login form", async () => {
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
