import { Link } from "@ui-elements";

export default function MustVerifyMsg({ status }) {
  return (
    <div>
      <p className="text-sm mt-2 text-gray-800">
        Your email address is unverified.
        <Link
          href={route("verification.send")}
          method="post"
          as="button"
          className="underline text-sm text-gray-600 hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Click here to re-send the verification email.
        </Link>
      </p>

      {status === "verification-link-sent" && (
        <div className="mt-2 font-medium text-sm text-green-600">
          A new verification link has been sent to your email address.
        </div>
      )}
    </div>
  );
}
