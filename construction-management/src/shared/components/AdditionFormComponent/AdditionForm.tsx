import { useEffect, useState } from "react";
import { Project } from "../../../models/class/Project";
import { INewProject } from "../../../models/interface/INewProject";
import Input from "../../Input/Input";

export interface AdditionFormProps {
  projects: Project[];
}

const newProject: INewProject = {
  name: "",
  description: "",
};

export const AdditionForm = (props: AdditionFormProps) => {
  const [project, setProject] = useState(newProject);
  const [projects, setProjects] = useState<Project[]>([]);

  let data: Project[] = [
    new Project(1, "Project: CLASSIFIED", "xXxXC-aAdQ12"),
    new Project(2, "Project: GIGACHAD", "Chadmin"),
    new Project(3, "Project: TERRENCE", "Terrel Quigglesbottom"),
  ];

  useEffect(() => {
    setProjects(props.projects);
  }, []);

  function onSubmit(e: any) {
    e.preventDefault();
    setProjects([...projects, { ...project, id: projects.length + 1 }]);
    setProject(newProject);
  }

  function onChange(e: any) {
    setProject({ ...project, [e.target.id]: e.target.value });
  }

  return (
    <form onSubmit={(e) => onSubmit(e)}>
      <h2>Add Project</h2>
      <Input
        id={"name"}
        label={"Name"}
        type={"text"}
        value={project.name}
        onChange={(e) => onChange(e)}
      />
      <Input
        id={"description"}
        label={"Description"}
        type={"text"}
        value={project.description}
        onChange={(e) => onChange(e)}
      />
      <button type="submit">Add</button>
    </form>
  );
};
