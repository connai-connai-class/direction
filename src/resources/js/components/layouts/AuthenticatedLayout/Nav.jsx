import { useState } from "react";
import { DropdownIcon } from "@icons";
import { Dropdown, NavLink, ResponsiveNavLink } from "@ui-parts";

export default function Nav({ headHeight, user }) {
  const [showingNavigationDropdown, setShowingNavigationDropdown] =
    useState(false);
  return (
    <nav className={"bg-white border-b border-gray-100 " + headHeight}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <div className="hidden space-x-8 sm:-my-px sm:ms-10 sm:flex">
              <NavLink
                href={route("dashboard")}
                active={route().current("dashboard")}
              >
                Dashboard
              </NavLink>
            </div>
          </div>

          <div className="hidden sm:flex sm:items-center sm:ms-6">
            <div className="ms-3 relative">
              <Dropdown>
                <Dropdown.Trigger>
                  <span className="inline-flex rounded-md">
                    <button
                      type="button"
                      className="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-gray-500 bg-white hover:text-gray-700 focus:outline-none transition ease-in-out duration-150"
                    >
                      {user.name}
                      <DropdownIcon />
                    </button>
                  </span>
                </Dropdown.Trigger>

                <Dropdown.Content>
                  <Dropdown.Link href={route("profile.edit")}>
                    Profile
                  </Dropdown.Link>
                  <Dropdown.Link
                    href={route("logout")}
                    method="post"
                    as="button"
                  >
                    Log Out
                  </Dropdown.Link>
                </Dropdown.Content>
              </Dropdown>
            </div>
          </div>

          <div className="-me-2 flex items-center sm:hidden">
            <button
              onClick={() =>
                setShowingNavigationDropdown((previousState) => !previousState)
              }
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out"
            >
              <svg
                className="h-6 w-6"
                stroke="currentColor"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  className={
                    !showingNavigationDropdown ? "inline-flex" : "hidden"
                  }
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
                <path
                  className={
                    showingNavigationDropdown ? "inline-flex" : "hidden"
                  }
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      <div
        className={
          (showingNavigationDropdown ? "block" : "hidden") + " sm:hidden"
        }
      >
        <div className="pt-2 pb-3 space-y-1">
          <ResponsiveNavLink
            href={route("dashboard")}
            active={route().current("dashboard")}
          >
            Dashboard
          </ResponsiveNavLink>
        </div>

        <div className="pt-4 pb-1 border-t border-gray-200">
          <div className="px-4">
            <div className="font-medium text-base text-gray-800">
              {user.name}
            </div>
            <div className="font-medium text-sm text-gray-500">
              {user.email}
            </div>
          </div>

          <div className="mt-3 space-y-1">
            <ResponsiveNavLink href={route("profile.edit")}>
              Profile
            </ResponsiveNavLink>
            <ResponsiveNavLink method="post" href={route("logout")} as="button">
              Log Out
            </ResponsiveNavLink>
          </div>
        </div>
      </div>
    </nav>
  );
}
