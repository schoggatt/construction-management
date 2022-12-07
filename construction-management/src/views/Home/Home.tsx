import { useState, useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { ErrorBoundary } from "react-error-boundary";
import { Link } from "react-router-dom";
import { Project } from "../../models/class/Project";
import { deleteProject, getProjects } from "../../services/projectService";
import { AdditionForm } from "../../shared/components/AdditionFormComponent";
import { Loader } from "../../shared/components/Loader";

export interface HomeProps {}

export const Home = (props: HomeProps) => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    setLoading(true);
    loadProjects();
  }, []);

  async function removeProject(id: number) {
    const p = projects.filter((p) => p.id !== id);
    const res = await deleteProject(id);
    if (res) setProjects(p);
  }

  async function loadProjects() {
    const res = await getProjects();
    setProjects(res);
    setLoading(false);
  }

  function renderProject(project: Project) {
    return (
      <Col key={project.id}>
        <Link to={"/project/manage/edit/" + project.id}>
          <div>
            <h2>{project.name}</h2>
            <p>{project.description}</p>
            <button onClick={() => removeProject(project.id)}>Remove</button>
          </div>
        </Link>
      </Col>
    );
  }

  function getProjectChunks() {
    const chunks = [];
    for (let i = 0; i < projects.length; i += 3) {
      chunks.push(projects.slice(i, i + 3));
    }
    return chunks;
  }

  return (
    <div style={{ width: 1000 }}>
      <h1>Projects</h1>
      <Loader loading={loading} />
      <Container>
        {getProjectChunks().map((chunk) => (
          <Row key={chunk[0].id}>{chunk.map((p) => renderProject(p))}</Row>
        ))}
      </Container>
      <Link to="/project/manage/add">Add Project</Link>
    </div>
  );
};
