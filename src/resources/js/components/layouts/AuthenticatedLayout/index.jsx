import Nav from "./Nav";
import SideNav from "./SideNav";

export default function Authenticated({ user, header, children }) {
  const headHeight = "max-h-16 h-16";

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="flex min-h-screen">
        <div className="bg-white shadow">
          <SideNav user={user} headHeight={headHeight} />
        </div>
        <div className="grow">
          <Nav user={user} headHeight={headHeight} />
          {header && (
            <header className="bg-white shadow">
              <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
                {header}
              </div>
            </header>
          )}

          <main>{children}</main>
        </div>
      </div>
    </div>
  );
}
