import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { beforeEach, describe, expect, test } from "vitest";
import Dropdown from "./";

describe("Dropdown Test", () => {
  beforeEach(() => {
    render(
      <Dropdown>
        <Dropdown.Trigger>
          <span className="inline-flex rounded-md">
            <button
              type="button"
              className="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-gray-500 bg-white hover:text-gray-700 focus:outline-none transition ease-in-out duration-150"
            >
              trigger
            </button>
          </span>
        </Dropdown.Trigger>

        <Dropdown.Content>
          <Dropdown.Link href={""}>Profile</Dropdown.Link>
          <Dropdown.Link href={""} as="button">
            Log Out
          </Dropdown.Link>
        </Dropdown.Content>
      </Dropdown>
    );
  });

  test("Should render Dropbox", async () => {
    const button = screen.getByRole("button");
    expect(button).toBeDefined();
  });

  test("Should clicked dropbox", async () => {
    const dropdown = screen.getByRole("button");
    await userEvent.click(dropdown);
    const Profile = screen.getByText("Profile");
    expect(Profile).toBeDefined();
  });
});
