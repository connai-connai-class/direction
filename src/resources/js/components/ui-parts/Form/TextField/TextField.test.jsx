import { render } from "@testing-library/react";
import { describe, expect, test, vi } from "vitest";
import userEvent from "@testing-library/user-event";
import TextField from "./";

describe("TextField Test", () => {
  test("render TextField", async () => {
    const mockOnChange = vi.fn();
    const { getByText, getByPlaceholderText, getByRole } = render(
      <TextField
        label="氏名"
        dataTestid="test-code"
        placeholder="placeholder"
        value=""
        onChange={mockOnChange}
      />
    );

    expect(getByText("氏名"));
    expect(getByPlaceholderText("placeholder"));

    const input = getByRole("textbox");
    const value = "テスト太郎";

    await userEvent.type(input, value);
    expect(input.value).toBe("");
    expect(mockOnChange).toHaveBeenCalledTimes(value.length);
  });

  test("error TextField", () => {
    const error = "error message";
    const { getByText } = render(
      <TextField label="氏名" value="" error={error} />
    );
    expect(getByText(error));
  });
});
