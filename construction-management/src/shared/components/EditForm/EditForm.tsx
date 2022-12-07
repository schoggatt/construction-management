import { useState } from "react";
import { Project } from "../../../models/class/Project";
import { updateProject } from "../../../services/projectService";
import Input from "../Input/Input";

export interface EditFormProps {
  originalProject: Project;
  setOriginalProject: React.Dispatch<React.SetStateAction<Project | undefined>>;
}

export interface Errors {
  name?: string;
  description?: string;
}

export const EditForm = (props: EditFormProps) => {
  const [project, setProject] = useState<Project>(props.originalProject);
  const [errors, setErrors] = useState<Errors>({});

  function validate() {
    const _errors: Errors = {};
    if (!project.name) _errors.name = "Name is required";
    if (!project.description) _errors.description = "Description is required";
    setErrors(_errors);
    return _errors;
  }

  async function onEdit(e: any) {
    try {
      e.preventDefault();
      const formIsValid = Object.keys(validate()).length === 0; // it's valid if validate returns an empty object
      if (!formIsValid) return; // return early if the form is invalid
      await updateProject(project, project.id.toString());
      props.setOriginalProject(project);
      setProject(project);
    } catch (e) {
      console.log(e);
    }
  }

  function onChange(e: any) {
    setProject({ ...project, [e.target.id]: e.target.value });
  }

  return (
    <>
      <form onSubmit={(e) => onEdit(e)}>
        <h2>Edit Project</h2>
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
        <button type="submit">Edit</button>
      </form>
    </>
  );
};
