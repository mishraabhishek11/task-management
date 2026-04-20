import React from "react";
import Button from "./Button";
import Task from "./task/Task";

function ProjectDetail({
  project: { id, title, desc, duedate },
  tasks,
  onDeleteProject,
  onAddTask,
  onDeleteTask,
}: {
  project: { id: string; title: string; desc: string; duedate: string };
  tasks: { id: string; task: string; projectID: string }[];
  onDeleteProject: () => void;
  onAddTask: (task: string) => void;
  onDeleteTask: (task: string) => void;
}) {
  const date = new Date(duedate).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "2-digit",
  });
  return (
    <div className="w-full m-16">
      <header className="pb-4 mb-2 border-b-2 border-stone-300">
        <div className="flex justify-between items-center">
          <h1 className="text-3xl font-bold text-stone-700 mb-2">{title}</h1>
          <Button onClick={onDeleteProject}>Delete</Button>
        </div>
        <p className="text-stone-400 font-medium mb-4">{date}</p>
        <p className="text-stone-600 font-medium mt-4 whitespace-pre-wrap">
          {desc}
        </p>
      </header>
      <Task
        onAddTask={onAddTask}
        onDeleteTask={onDeleteTask}
        tasks={tasks.filter((t) => t.projectID === id)}
      />
    </div>
  );
}

export default ProjectDetail;
