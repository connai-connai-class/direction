import { fireEvent, render, screen } from "@testing-library/react";
import { beforeEach, describe, expect, test, vi } from "vitest";
import Register from "./";
import userEvent from "@testing-library/user-event";

describe("Register form Test", () => {
  beforeEach(() => {
    global.route = vi.spyOn();
    global.post = vi.fn();
    render(<Register />);
  });

  test("Should show register form", async () => {
    expect(screen.queryByText("name")).toBeDefined();
    expect(screen.queryByText("email")).toBeDefined();
    expect(screen.queryByText("password")).toBeDefined();
    expect(screen.queryByText("Confirm Password")).toBeDefined();
    expect(screen.queryByText("register")).toBeDefined();
    expect(screen.queryByText(/Already registered?/i)).toBeDefined();
  });

  test("Should input name", async () => {
    const value = "user name";
    const name = screen.getByRole("textbox", { name: "name" });
    await userEvent.type(name, value);
    expect(name.value).toBe(value);
  });

  test("Should input email", async () => {
    const value = "test@test.com";
    const email = screen.getByRole("textbox", { name: "email" });
    await userEvent.type(email, value);
    expect(email.value).toBe(value);
  });

  test("Should input password", async () => {
    const value = "password";
    const password = screen.getByTestId("password");
    await userEvent.type(password, value);
    expect(password.value).toBe(value);
  });

  test("Should input password confirmation", async () => {
    const value = "password";
    const password_confirm = screen.getByTestId("password_confirmation");
    await userEvent.type(password_confirm, value);
    expect(password_confirm.value).toBe(value);
  });
});
