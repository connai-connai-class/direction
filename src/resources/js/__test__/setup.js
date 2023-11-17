import { beforeEach, afterEach, vi } from "vitest";
import { cleanup } from "@testing-library/react";

beforeEach(() => {
  global.route = vi.fn(() => "");
});

afterEach(() => {
  cleanup();
});
