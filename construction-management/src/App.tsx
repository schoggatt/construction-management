import { useEffect, useRef, useState } from "react";
import "./App.scss";
import { Project } from "./models/class/Project";
import { AgGridReact } from "ag-grid-react"; // the AG Grid React Component
import { AdditionForm } from "./shared/components/AdditionFormComponent";
import { NavigationBar } from "./shared/components/NavigationBar";
import { Home } from "./views/Home";
import { Route, Routes, Link, useRoutes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [projects, setProjects] = useState<Project[]>([]);

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
        //   path: "stocks/search",
        //   element: <SearchStocksComponent />,
        // },
      ],
    },
    {
      path: "?",
      element: <h1>This page does not exist but Waifu.pics does...</h1>,
    },
  ]);

  let data: Project[] = [
    new Project(1, "Project: CLASSIFIED", "xXxXC-aAdQ12"),
    new Project(2, "Project: GIGACHAD", "Chadmin"),
    new Project(3, "Project: TERRENCE", "Terrel Quigglesbottom"),
  ];

  useEffect(() => {
    setProjects(data);
  }, []);

  function removeProject(id: number) {
    const p = projects.filter((p) => p.id !== id);
    setProjects(p);
  }

  function reloadProjects() {
    setProjects(data);
  }

  function renderProject(project: Project) {
    return (
      <li key={project.id}>
        <h2>{project.name}</h2>
        <p>{project.description}</p>
        <button onClick={(x) => removeProject(project.id)}>Remove</button>
      </li>
    );
  }

  return (
    <div className="App">
      {routes}
      <h1>Projects</h1>
      <ul style={{ listStyle: "none" }}>
        {projects.map((p) => renderProject(p))}
      </ul>
      <button onClick={(p) => reloadProjects()}>Reload</button>
      <AdditionForm projects={projects} />
    </div>
  );
}

export default App;
