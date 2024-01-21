import "./style.css"
import PropTypes from "prop-types"

import { NavLink } from "react-router-dom"

const Project = ({ index, img, title }) => {
  return (
    <NavLink to={`/project/${index}`}>
      <div className="project">
        <img src={img} alt={title} className="project__img" />
        <h3 className="project__title">{title}</h3>
      </div>
    </NavLink>
  )
}

Project.propTypes = {
  index: PropTypes.number.isRequired,
  img: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired
}

export default Project
