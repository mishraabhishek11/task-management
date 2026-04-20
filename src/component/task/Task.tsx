import React, { useState } from "react";
import NewTask from "./NewTask";
import Button from "../Button";

function Task({
  onAddTask,
  onDeleteTask,
  tasks,
}: {
  onAddTask: (task: string) => void;
  onDeleteTask: (task: string) => void;
  tasks: { id: string; task: string; projectID: string }[];
}) {
  return (
    <section>
      <h2 className="text-2xl font-bold text-stone-700 mb-2">{"Tasks"}</h2>
      <NewTask onAddTask={onAddTask} />
      {tasks && tasks.length < 1 ? (
        <p className="text-stone-500 font-medium my-4">No Tasks</p>
      ) : null}{" "}
      {tasks && tasks.length > 0 ? (
        <ul className="mt-4">
          {tasks.map((t) => {
            return (
              <li
                key={t.id}
                className="px-2 bg-stone-300 rounded-md flex justify-between my-1 py-4 w-full items-center"
              >
                <span>{t.task}</span>
                <Button onClick={() => onDeleteTask(t.id)}>Clear</Button>
              </li>
            );
          })}
        </ul>
      ) : null}
    </section>
  );
}

export default Task;
