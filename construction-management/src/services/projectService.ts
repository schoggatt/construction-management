import { Project } from "../models/class/Project";

export async function createProject(project: Project): Promise<Project> {
  const response = await fetch("/api/projects", {
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
  const response = await fetch("/api/projects");
  if (!response.ok) {
    throw new Error(response.statusText);
  }
  return response.json() as Promise<Project[]>;
}

export async function getProject(id: string): Promise<Project> {
  const response = await fetch(`/api/projects/${id}`);
  if (!response.ok) {
    throw new Error(response.statusText);
  }
  return response.json() as Promise<Project>;
}

export async function updateProject(project: Project): Promise<Project> {
  const response = await fetch("/api/projects", {
    method: "PUT",
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

export async function deleteProject(id: string): Promise<boolean> {
  const response = await fetch("/api/projects", {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ id }),
  });
  if (!response.ok) {
    throw new Error(response.statusText);
  }
  return response.json() as Promise<boolean>;
}
