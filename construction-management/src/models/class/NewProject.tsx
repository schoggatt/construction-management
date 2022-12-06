import { INewProject } from "../interface/INewProject";

export class NewProject implements INewProject {
  name: string;
  description: string;

  constructor(name: string, description: string) {
    this.name = name;
    this.description = description;
  }
}
