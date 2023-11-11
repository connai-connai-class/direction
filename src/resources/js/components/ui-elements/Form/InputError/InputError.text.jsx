import { render } from "@testing-library/react";
import { describe, expect, test } from "vitest";
import InputError from "./";

describe("InputError Test", () => {
  test("render InputError", async () => {
    const { getByText } = render(<InputError message="error message" />);
    expect(getByText("error message"));
  });
});
