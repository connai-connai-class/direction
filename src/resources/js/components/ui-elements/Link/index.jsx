import { Link as InertiaLink } from "@inertiajs/react";

export default function Link({ href, text = "", children, className = "" }) {
  return (
    <InertiaLink
      href={href}
      className={
        "underline text-sm text-gray-600 hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 " +
        className
      }
    >
      {text ? text : children}
    </InertiaLink>
  );
}
