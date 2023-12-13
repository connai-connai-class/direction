export function fetchProjects({ user }) {
  return new Promise((resolve) => {
    resolve();
  }).then(() => {
    return [
      {
        project_uid: Math.random().toString(36),
        title: "project",
      },
      {
        project_uid: Math.random().toString(36),
        title: "project2",
      },
    ];
  });
}
