import "./style.css";

import { NavLink } from "react-router-dom";

const Project = (props) => {
  return (
    <NavLink to={`/project/${props.index}`}>
      <li className="project">
        <img src={props.img} alt={props.title} className="project__img" />
        <h3 className="project__title">{props.title}</h3>
      </li>
    </NavLink>
  );
};

export default Project;
