import { useEffect, useState } from "react";
import { Project } from "../../../models/class/Project";
import { INewProject } from "../../../models/interface/INewProject";
import {
  createProject,
  getProject,
  getProjects,
} from "../../../services/projectService";
import Input from "../Input/Input";
import { Loader } from "../Loader";

export interface AdditionFormProps {}

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
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    async function loadProjects() {
      setLoading(true);
      const res = await getProjects();
      setProjects(res);
      setLoading(false);
    }
    loadProjects();
  }, []);

  function validate() {
    const _errors: Errors = {};
    if (!project.name) _errors.name = "Name is required";
    if (!project.description) _errors.description = "Description is required";
    setErrors(_errors);
    return _errors;
  }

  async function onSubmit(e: any) {
    try {
      e.preventDefault();
      setLoading(true);
      const formIsValid = Object.keys(validate()).length === 0; // it's valid if validate returns an empty object
      if (!formIsValid) return; // return early if the form is invalid
      await createProject({ ...project, id: projects.length + 1 });
      setProjects([...projects, { ...project, id: projects.length + 1 }]);
      setProject(newProject);
      setLoading(false);
    } catch (e) {
      console.log(e);
      setLoading(false);
    }
  }

  function onChange(e: any) {
    setProject({ ...project, [e.target.id]: e.target.value });
  }

  return (
    <>
      <Loader loading={loading} />
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
    </>
  );
};
