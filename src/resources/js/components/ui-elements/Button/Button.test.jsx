import { render } from "@testing-library/react";
import { describe, expect, test, vi } from "vitest";
import Button from "./";
import userEvent from "@testing-library/user-event";

describe("Button Test", () => {
  test("render Button", async () => {
    const mockOnChange = vi.fn();
    const { getByText, getByRole } = render(
      <Button title="click button" onClick={mockOnChange} />
    );

    expect(getByText("click button"));

    const input = getByRole("button");
    await userEvent.click(input);
    expect(mockOnChange).toHaveBeenCalledTimes(1);
  });
});
