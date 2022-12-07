import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Project } from "../../models/class/Project";
import { getProject } from "../../services/projectService";
import { AdditionForm } from "../../shared/components/AdditionFormComponent";
import { EditForm } from "../../shared/components/EditForm";
import { Loader } from "../../shared/components/Loader";

export interface ManageProjectProps {}

export const ManageProject = (props: ManageProjectProps) => {
  const [project, setProject] = useState<Project>();
  const [loading, setLoading] = useState<boolean>(true);

  const { projectId } = useParams<{ projectId: string }>();

  useEffect(() => {
    async function loadProject(projectId: string) {
      setLoading(true);
      const res = await getProject(projectId);
      setProject(res);
      setLoading(false);
    }
    if (projectId === undefined) return;
    loadProject(projectId);
  }, []);

  return loading ? (
    <Loader loading={loading} />
  ) : (
    <div>
      <h1>Manage Project</h1>
      <h3>{project!.name}</h3>
      <p>{project!.description}</p>
      <EditForm originalProject={project!} setOriginalProject={setProject} />
      <AdditionForm />
    </div>
  );
};
