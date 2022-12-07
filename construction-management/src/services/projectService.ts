import { Project } from "../models/class/Project";

const baseURI = "http://localhost:3001";

export async function createProject(project: Project): Promise<Project> {
  const response = await fetch(baseURI + "/projects", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(project),
  });
  if (!response.ok) {
    throw new Error(response.statusText);
  }
  return response.json() as Promise<Project>;
}

export async function getProjects(): Promise<Project[]> {
  const response = await fetch(baseURI + "/projects");
  if (!response.ok) {
    throw new Error(response.statusText);
  }
  return response.json() as Promise<Project[]>;
}

export async function getProject(id: string): Promise<Project> {
  const response = await fetch(baseURI + `/projects/${id}`);
  if (!response.ok) {
    throw new Error(response.statusText);
  }
  return response.json() as Promise<Project>;
}

export async function updateProject(
  project: Project,
  id: string
): Promise<Project> {
  const response = await fetch(baseURI + `/projects/${id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(project),
  });
  if (!response.ok) {
    throw new Error(response.statusText);
  }
  return response.json() as Promise<Project>;
}

export async function deleteProject(id: number): Promise<boolean> {
  const response = await fetch(baseURI + `/projects/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  });
  if (!response.ok) {
    throw new Error(response.statusText);
  }
  return response.json() as Promise<boolean>;
}
