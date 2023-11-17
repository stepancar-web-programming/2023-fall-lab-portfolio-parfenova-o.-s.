import { useParams } from "react-router-dom";

import BtnGitHub from "../components/btnGitHub/BtnGitHub";
import BtnHabr from "../components/btnHabr/BtnHabr";
import { projects } from "../helpers/projectsList";

const ProjectPage = () => {
  const { id } = useParams();
  const project = projects[id];

  return (
    <main className="section">
      <div className="container">
        <div className="project-details">
          <h1 className="title-1">{project.title}</h1>
          {project.imgBig && (
            <img
              src={project.imgBig}
              alt={project.title}
              className="project-details__cover"
            />
          )}

          {project.videoId && (
            <div className="project-details__cover">
              <iframe
                width="840"
                height="473"
                src={`https://www.youtube.com/embed/${project.videoId}`}
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
            </div>
          )}

          <div className="project-details__desc">
            <p>{project.skills}</p>
          </div>

          {project.gitHubLink && <BtnGitHub link={project.gitHubLink} />}
          {project.habrLink && <BtnHabr link={project.habrLink} />}
        </div>
      </div>
    </main>
  );
};

export default ProjectPage;
