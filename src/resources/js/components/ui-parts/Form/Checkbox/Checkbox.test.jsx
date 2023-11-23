import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, test, vi } from "vitest";
import Checkbox from "./";

describe("Checkbox Test", () => {
  test("render Checkbox", () => {
    const { getByRole } = render(<Checkbox />);
    const input = getByRole("checkbox");
    expect(input).toBeDefined();
    expect(input.checked).toBe(false);
  });

  test("Should checked Checkbox ", () => {
    const { getByRole } = render(<Checkbox checked />);
    const input = getByRole("checkbox");
    expect(input.checked).toBe(true);
  });

  test("Should click Checkbox", async () => {
    const mockOnChange = vi.fn();
    const { getByRole } = render(<Checkbox onChange={mockOnChange} />);
    const input = getByRole("checkbox");
    await userEvent.click(input);
    expect(mockOnChange).toHaveBeenCalled();
  });

  test("Should click label", async () => {
    const mockOnChange = vi.fn();
    const { getByText } = render(
      <Checkbox onChange={mockOnChange} label="checkboxLabel" />
    );
    const label = getByText("checkboxLabel");
    await userEvent.click(label);
    expect(mockOnChange).toHaveBeenCalled();
  });
});
