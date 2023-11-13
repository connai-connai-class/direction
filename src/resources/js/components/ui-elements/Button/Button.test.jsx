import { render, screen } from "@testing-library/react";
import { describe, expect, test, vi } from "vitest";
import Button from "./";
import userEvent from "@testing-library/user-event";

describe("Button Test", () => {
  test("Should show button", async () => {
    render(<Button title="click button" />);
    expect(screen.getByText("click button"));

    const button = screen.getByRole("button");
    expect(button.getAttribute("disabled")).toBeNull();
  });

  test("Should click button", async () => {
    const mockOnChange = vi.fn();
    render(<Button title="click button" onClick={mockOnChange} />);
    const button = screen.getByRole("button");
    await userEvent.click(button);
    expect(mockOnChange).toHaveBeenCalledTimes(1);
  });

  test("Should disabled", async () => {
    const mockOnChange = vi.fn();
    render(<Button title="click button" onClick={mockOnChange} disabled />);
    const button = screen.getByRole("button");
    expect(button.getAttribute("disabled")).toBe("");
  });
});
