import React from "react";
import noproject from "../assets/no-projects.png";
import Button from "./Button";

function NoProject({ onAddNewProject }: { onAddNewProject: () => void }) {
  return (
    <div className="m-24 w-2/3 text-center">
      <img src={noproject} className="w-16 h-16 object-contain mx-auto" />
      <h2 className="text-xl font-bold my-4 text-stone-500">
        No Project Selected
      </h2>
      <p className="text-stone-500 font-medium mb-4">
        Select a project or create new
      </p>
      <p className="mt-8">
        <Button onClick={onAddNewProject}>+ Add Project</Button>
      </p>
    </div>
  );
}

export default NoProject;
