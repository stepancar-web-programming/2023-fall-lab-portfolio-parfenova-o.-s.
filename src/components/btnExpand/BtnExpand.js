import { FaChevronDown, FaChevronUp } from "react-icons/fa"
import { useState } from "react"
import "./style.css"
import PropTypes from "prop-types"

const BtnExpand = ({ title, skills, learnt }) => {
  const [selectedIcon, setSelectedIcon] = useState(
    <FaChevronDown className="expandIcon" />
  )
  const [isComponentVisible, setComponentVisibility] = useState(false)

  const toggleIcon = () => {
    setSelectedIcon((prevIcon) =>
      prevIcon.type === FaChevronDown
        ? (
        <FaChevronUp class="expandIcon" />
          )
        : (
        <FaChevronDown class="expandIcon" />
          )
    )

    setComponentVisibility((isComponentVisible) =>
      !isComponentVisible
    )
  }

  return (
    <div className="content-list__item">
      <h2 className="title-2">
        {title} <button onClick={toggleIcon}>{selectedIcon}</button>
      </h2>
      {isComponentVisible && (
        <div>
          <p>{skills}</p>
          <div className="skill-box">
            <div className="skill-bar">
              <span className="skill-per" style ={{ width: `${learnt}%` }}>
                <span className="tooltip">{learnt}%</span>
              </span>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

BtnExpand.propTypes = {
  title: PropTypes.string.isRequired,
  skills: PropTypes.string.isRequired,
  learnt: PropTypes.number.isRequired
}

export default BtnExpand
