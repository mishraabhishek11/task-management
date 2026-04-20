import { useState } from "react";
import NoProject from "./component/NoProject";
import SideBar from "./component/sidebar";
import NewProject from "./component/NewProject";
import ProjectDetail from "./component/ProjectDetail";

function App() {
  const [pojectStatus, setProjectStatus] = useState({
    selectedProjectID: undefined,
    projects: [],
    tasks: [],
  });

  const handleAddNewProject = () => {
    setProjectStatus((prev) => {
      return { ...prev, selectedProjectID: -1 };
    });
  };

  const handleCreateProject = ({ title, desc, duedate }) => {
    setProjectStatus((prev) => {
      return {
        ...prev,
        selectedProjectID: undefined,
        projects: [
          ...prev.projects,
          {
            id: (Math.random() * 10000000000).toFixed(0),
            title,
            desc,
            duedate,
          },
        ],
      };
    });
  };

  const handleCancelCreateProject = () => {
    setProjectStatus((prev) => {
      return {
        ...prev,
        selectedProjectID: undefined,
      };
    });
  };

  const handleSelectProject = ({ id }) => {
    setProjectStatus((prev) => {
      return {
        ...prev,
        selectedProjectID: id,
      };
    });
  };

  const handleDeleteProject = () => {
    setProjectStatus((prev) => {
      return {
        ...prev,
        selectedProjectID: undefined,
        projects: [
          ...prev.projects.filter((p) => p.id !== prev.selectedProjectID),
        ],
      };
    });
  };

  const handleCreateTask = (task) => {
    setProjectStatus((prev) => {
      return {
        ...prev,
        tasks: [
          ...prev.tasks,
          {
            id: (Math.random() * 10000000000).toFixed(0),
            task,
            projectID: prev.selectedProjectID,
          },
        ],
      };
    });
  };

  const handleDeleteTask = (id) => {
    console.log(id, pojectStatus);

    setProjectStatus((prev) => {
      return {
        ...prev,
        tasks: [...prev.tasks.filter((t) => t.id !== id)],
      };
    });
  };

  const selectedProject = pojectStatus.projects.find(
    (p) => p.id === pojectStatus.selectedProjectID,
  );

  return (
    <main className="h-screen my-0 flex gap-8">
      <SideBar
        onAddNewProject={handleAddNewProject}
        projects={pojectStatus.projects}
        onSelectProject={handleSelectProject}
        selectedProjectID={pojectStatus.selectedProjectID}
      />

      {pojectStatus.selectedProjectID ? (
        pojectStatus.selectedProjectID === -1 ? (
          <NewProject
            onCreateProject={handleCreateProject}
            onCancelProject={handleCancelCreateProject}
          />
        ) : (
          <ProjectDetail
            onDeleteProject={handleDeleteProject}
            project={selectedProject}
            onAddTask={handleCreateTask}
            onDeleteTask={handleDeleteTask}
            tasks={pojectStatus.tasks}
          />
        )
      ) : (
        <NoProject onAddNewProject={handleAddNewProject} />
      )}
    </main>
  );
}

export default App;
