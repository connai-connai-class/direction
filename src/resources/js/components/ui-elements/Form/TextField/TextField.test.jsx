import { render } from "@testing-library/react";
import { describe, expect, test, vi } from "vitest";
import TextField from "./";
import userEvent from "@testing-library/user-event";

describe("TextField Test", () => {
  test("render TextField", async () => {
    const mockOnChange = vi.fn();
    const { getByLabelText, getByRole } = render(
      <TextField label="氏名" value="" onChange={mockOnChange} />
    );

    expect(getByLabelText("氏名"));

    const input = getByRole("textbox");
    const value = "テスト太郎";
    await userEvent.type(input, value);
    expect(input.value).toBe("");
    expect(mockOnChange).toHaveBeenCalledTimes(value.length);
  });
});
