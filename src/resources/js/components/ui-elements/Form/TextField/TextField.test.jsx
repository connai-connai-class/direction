import { render } from "@testing-library/react";
import { describe, expect, test, vi } from "vitest";
import TextField from "./";
import userEvent from "@testing-library/user-event";

describe("TextField Test", () => {
  test("render TextField", async () => {
    const mockOnChange = vi.fn();
    const { getByLabelText, getByPlaceholderText, getByRole } = render(
      <TextField
        label="氏名"
        dataTestid="test-code"
        placeholder="placeholder"
        value=""
        onChange={mockOnChange}
      />
    );

    expect(getByLabelText("氏名"));
    expect(getByPlaceholderText("placeholder"));

    const input = getByRole("textbox");
    const value = "テスト太郎";
    await userEvent.type(input, value);
    expect(input.value).toBe("");
    expect(mockOnChange).toHaveBeenCalledTimes(value.length);

    expect(input.dataset.testid).toBe("test-code");
  });
});
