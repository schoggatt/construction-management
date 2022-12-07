import { AdditionForm } from "../../shared/components/AdditionFormComponent";

export interface ManageProjectProps {}

export const ManageProject = (props: ManageProjectProps) => {
  return (
    <div>
      <h1>Manage Project</h1>
      <AdditionForm />
    </div>
  );
};
