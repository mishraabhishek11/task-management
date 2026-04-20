import React from "react";
import Button from "./Button";

function SideBar({
  onAddNewProject,
  onSelectProject,
  projects,
  selectedProjectID,
}: {
  onAddNewProject: () => void;
  onSelectProject: ({ id }: { id: string }) => void;
  projects: { id: string; title: string; desc: string; duedate: string }[];
  selectedProjectID: string;
}) {
  return (
    <aside className="w-1/3  bg-stone-900 text-stone-50 px-8 py-16 md:w-72 rounded-r-xl">
      <h2 className="mb-8 uppercase text-stone-200 font-bold md:text-xl">
        Your Projects
      </h2>
      <div>
        <Button onClick={onAddNewProject}>+ Add Project</Button>
      </div>
      <ul className="mt-8">
        {projects.map((project) => {
          return (
            <li key={project.id}>
              <button
                onClick={() => {
                  onSelectProject({ id: project.id });
                }}
                className={`w-full  px-2 py-2 my-1 text-left rounded-md ${project.id === selectedProjectID ? "text-stone-200" : "text-stone-400"} ${project.id === selectedProjectID ? "bg-stone-700" : ""} hover:text-stone-200 hover:bg-stone-700`}
              >
                {project.title}
              </button>
            </li>
          );
        })}
      </ul>
    </aside>
  );
}

export default SideBar;
