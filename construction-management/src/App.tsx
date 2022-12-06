import { useEffect, useState } from "react";
import "./App.scss";
import { Project } from "./models/class/Project";
import { AdditionForm } from "./shared/components/AdditionFormComponent";
import { NavigationBar } from "./shared/components/NavigationBar";
import { Home } from "./views/Home";
import { useRoutes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { deleteProject, getProjects } from "./services/projectService";
import { Loader } from "./shared/components/Loader";

function App() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  const routes = useRoutes([
    {
      path: "/",
      element: <NavigationBar />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        // {
        //   path: "/search",
        //   element: < />,
        // },
      ],
    },
    {
      path: "?",
      element: <h1>This page does not exist but Waifu.pics does...</h1>,
    },
  ]);

  useEffect(() => {
    setLoading(true);
    loadProjects();
  }, []);

  async function removeProject(id: number) {
    const p = projects.filter((p) => p.id !== id);
    const res = await deleteProject(id);
    if (res) setProjects(p);
  }

  async function loadProjects() {
    const res = await getProjects();
    setProjects(res);
    setLoading(false);
  }

  function renderProject(project: Project) {
    return (
      <li key={project.id}>
        <h2>{project.name}</h2>
        <p>{project.description}</p>
        <button onClick={() => removeProject(project.id)}>Remove</button>
      </li>
    );
  }

  return (
    <div className="App">
      {routes}
      <h1>Projects</h1>
      <Loader loading={loading} />
      <ul style={{ listStyle: "none" }}>
        {projects.map((p) => renderProject(p))}
      </ul>
      <button onClick={(p) => loadProjects()}>Reload</button>
      <AdditionForm projects={projects} />
    </div>
  );
}

export default App;
