import { fireEvent, render } from "@testing-library/react";
import { describe, expect, test, vi } from "vitest";
import Checkbox from "./";

describe("Checkbox Test", () => {
  test("render Checkbox", async () => {
    const { getByRole } = render(<Checkbox />);
    const input = getByRole("checkbox");
    expect(input).toBeDefined();
    expect(input.checked).toBe(false);
  });

  test("Should checked Checkbox ", async () => {
    const { getByRole } = render(<Checkbox checked />);
    const input = getByRole("checkbox");
    expect(input.checked).toBe(true);
  });

  test("Should click", async () => {
    const mockOnChange = vi.fn();
    const { getByRole } = render(<Checkbox onChange={mockOnChange} />);
    const input = getByRole("checkbox");
    fireEvent.click(input);
    expect(mockOnChange).toHaveBeenCalledTimes(1);
  });
});
