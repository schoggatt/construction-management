import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.scss";
import { Project } from "./models/class/Project";

function App() {
  const [count, setCount] = useState(0);

  const projects: Project[] = [
    new Project(1, "Project: CLASSIFIED", "xXxXC-aAdQ12"),
    new Project(2, "Project: GIGACHAD", "Chadmin"),
    new Project(3, "Project: TERRENCE", "Terrel Quigglesbottom"),
  ];

  function renderProject(project: Project) {
    return (
      <li key={project.id}>
        <h2>{project.name}</h2>
        <p>{project.description}</p>
      </li>
    );
  }

  return (
    <div className="App">
      <h1>Projects</h1>
      <ul>{projects.map((project) => renderProject(project))}</ul>
    </div>
  );
}

export default App;
