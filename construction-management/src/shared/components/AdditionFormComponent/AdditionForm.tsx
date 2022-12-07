import { useEffect, useState } from "react";
import { Project } from "../../../models/class/Project";
import { INewProject } from "../../../models/interface/INewProject";
import ErrorBoundary from "../../error/ErrorFallback/ErrorFallback";
import Input from "../Input/Input";

export interface AdditionFormProps {
  projects: Project[];
}

export interface Errors {
  name?: string;
  description?: string;
}

const newProject: INewProject = {
  name: "",
  description: "",
};

export const AdditionForm = (props: AdditionFormProps) => {
  const [project, setProject] = useState(newProject);
  const [projects, setProjects] = useState<Project[]>([]);
  const [errors, setErrors] = useState<Errors>({});

  let data: Project[] = [
    new Project(1, "Project: CLASSIFIED", "xXxXC-aAdQ12"),
    new Project(2, "Project: GIGACHAD", "Chadmin"),
    new Project(3, "Project: TERRENCE", "Terrel Quigglesbottom"),
  ];

  useEffect(() => {
    setProjects(props.projects);
  }, []);

  function validate() {
    const _errors: Errors = {};
    if (!project.name) _errors.name = "Name is required";
    if (!project.description) _errors.description = "Description is required";
    setErrors(_errors);
    return _errors;
  }

  function onSubmit(e: any) {
    e.preventDefault();
    const formIsValid = Object.keys(validate()).length === 0; // it's valid if validate returns an empty object
    if (!formIsValid) return; // return early if the form is invalid
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
        error={errors.name}
        value={project.name}
        onChange={(e) => onChange(e)}
      />
      <Input
        id={"description"}
        label={"Description"}
        error={errors.description}
        value={project.description}
        onChange={(e) => onChange(e)}
      />
      <button type="submit">Add</button>
    </form>
  );
};
