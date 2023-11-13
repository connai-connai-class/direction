import { fireEvent, render, screen } from "@testing-library/react";
import { beforeEach, describe, expect, test, vi } from "vitest";
import Login from "./";
import userEvent from "@testing-library/user-event";

describe("Login form Test", () => {
  beforeEach(() => {
    global.route = vi.fn();
    global.post = vi.fn();
    render(<Login />);
  });

  test("Should show login form", async () => {
    expect(screen.queryByText("email")).toBeDefined();
    expect(screen.queryByText("password")).toBeDefined();
    expect(screen.queryByText(/remember me/i)).toBeDefined();
    expect(screen.queryByText(/Login/i)).toBeDefined();
    expect(screen.queryByText(/Forgot your password?/i)).toBeDefined();
  });

  test("Should not check remember me checkbox at the start", () => {
    const remember = screen.queryByRole("checkbox");
    expect(remember.checked).toBe(false);
  });

  test("Should input email", async () => {
    const value = "test@test.com";
    const email = screen.getByTestId("email");
    await userEvent.type(email, value);
    expect(email.value).toBe(value);
  });

  test("Should input password", async () => {
    const value = "password";
    const password = screen.getByTestId("password");
    await userEvent.type(password, value);
    expect(password.value).toBe(value);
  });

  test("Should click remember checkbox", async () => {
    const remember = screen.queryByRole("checkbox");
    fireEvent.click(remember);
    expect(remember.checked).toBe(true);
  });
});
