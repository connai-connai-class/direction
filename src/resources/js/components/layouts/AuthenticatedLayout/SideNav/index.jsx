import { Resizable } from "re-resizable";
import { Divider } from "@mui/material";
import { Logo, Link } from "@ui-elements";
import { fetchProjects } from "./api";
import { useMemo, useState } from "react";

export default function SideNav({ headHeight, user }) {
  // TODO:: relation project in user
  const [projects, setProjects] = useState([]);
  useMemo(() => {
    fetchProjects(user).then((res) => {
      setProjects(res);
    });
  }, [user]);

  return (
    <>
      <Resizable
        className="px-6"
        defaultSize={{
          width: 220,
          height: "100%",
        }}
        minWidth={100}
        maxWidth={500}
        enable={{
          top: false,
          right: true,
          bottom: false,
          left: false,
          topRight: false,
          bottomRight: false,
          bottomLeft: false,
          topLeft: false,
        }}
      >
        <div className={"w-full" + headHeight}>
          <div className="shrink-0 flex justify-center items-center w-full h-full">
            <Link href="/">
              <Logo className="block h-9 w-auto fill-current text-gray-800" />
            </Link>
          </div>
        </div>
        <Divider />
        <div className="mt-4">
          <Link href="/dashboard">
            <div className="flex gap-2 items-center">
              <div className="text-lg">Home</div>
            </div>
          </Link>
        </div>
        {projects.map((project) => (
          <div className="mt-4" key={project.project_uid}>
            <Link href={`/project/${project.project_uid}`}>
              <div className="flex gap-2 items-center">
                <div className="text-lg">{project.title}</div>
              </div>
            </Link>
          </div>
        ))}
      </Resizable>
    </>
  );
}
