import { render } from "@testing-library/react";
import { describe, expect, test } from "vitest";
import InputLabel from "./";

describe("InputLabel Test", () => {
  test("render InputLabel", async () => {
    const { getByText } = render(<InputLabel label="氏名" />);
    expect(getByText("氏名"));
  });
});
