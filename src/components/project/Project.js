import "./style.css";

import { NavLink } from "react-router-dom";

const Project = (props) => {
  return (
    <NavLink to={`/project/${props.index}`}>
      <div className="project">
        <img src={props.img} alt={props.title} className="project__img" />
        <h3 className="project__title">{props.title}</h3>
      </div>
    </NavLink>
  );
};

export default Project;
