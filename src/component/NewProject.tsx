import React, { useRef } from "react";
import Input from "./Input";
import Modal from "./Modal";

function NewProject({
  onCreateProject,
  onCancelProject,
}: {
  onCreateProject: ({
    title,
    desc,
    duedate,
  }: {
    title: string;
    desc: string;
    duedate: string;
  }) => void;
  onCancelProject: () => void;
}) {
  const titleRef = useRef<HTMLInputElement | null>(null);
  const descRef = useRef<HTMLInputElement | null>(null);
  const dueDateRef = useRef<HTMLInputElement | null>(null);
  const modalRef = useRef<{ open: () => void }>();

  const handleCreateProject = () => {
    if (
      modalRef &&
      modalRef.current &&
      (`${titleRef.current?.value ?? ""}` === "" ||
        `${descRef.current?.value ?? ""}` === "" ||
        `${dueDateRef.current?.value ?? ""}` === "")
    ) {
      modalRef.current.open();
      return;
    }
    onCreateProject({
      title: `${titleRef.current?.value ?? ""}`,
      desc: `${descRef.current?.value ?? ""}`,
      duedate: `${dueDateRef.current?.value ?? ""}`,
    });
  };

  return (
    <>
      <Modal ref={modalRef}>
        <h2 className="text-xl font-bold my-4 text-red-500">Invalid input</h2>
        <p className="text-stone-500 font-medium mb-4">Please check values</p>
      </Modal>
      <div className="w-[45rem] py-16">
        <menu className="flex items-center justify-end gap-4 my-4">
          <li>
            <button
              onClick={onCancelProject}
              className="text-stone-700 hover:text-stone-950"
            >
              Cancel
            </button>
          </li>
          <li>
            <button
              onClick={handleCreateProject}
              className="px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:text-stone-950"
            >
              Save
            </button>
          </li>
        </menu>
        <div>
          <Input title="Title" type="text" ref={titleRef} />
          <Input title="Desc" textarea ref={descRef} />
          <Input title="Due Date" type="date" ref={dueDateRef} />
        </div>
      </div>
    </>
  );
}

export default NewProject;
