import React, { useRef, useState } from "react";
import Button from "../Button";
import Modal from "../Modal";

function NewTask({ onAddTask }: { onAddTask: (task: string) => void }) {
  const [task, setTask] = useState("");
  const modalRef = useRef<{ open: () => void }>();
  const handleAddTask = () => {
    if (modalRef && modalRef.current && task.trim() === "") {
      modalRef.current.open();
      return;
    }

    onAddTask(task);
    setTask("");
  };
  return (
    <>
      <Modal ref={modalRef}>
        <h2 className="text-xl font-bold my-4 text-red-500">Invalid input</h2>
        <p className="text-stone-500 font-medium mb-4">Please check values</p>
      </Modal>
      <div className="flex gap-4 items-center justify-start ">
        <input
          type="text"
          className="w-full p-1 border-b-2 border-stone-300 bg-stone-200 rounded-sm text-stone-600 focus:outline-none focus:border-stone-600"
          value={task}
          onChange={(e) => {
            setTask(e.target.value);
          }}
        />
        <Button onClick={handleAddTask}>Add Task</Button>
      </div>
    </>
  );
}

export default NewTask;
