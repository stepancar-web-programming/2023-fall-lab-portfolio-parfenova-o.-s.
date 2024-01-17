import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { useState } from "react";
import "./style.css";

const BtnExpand = (props) => {
  const [selectedIcon, setSelectedIcon] = useState(
    <FaChevronDown className="expandIcon" />
  );
  const [isComponentVisible, setComponentVisibility] = useState(false);

  const toggleIcon = () => {
    setSelectedIcon((prevIcon) =>
      prevIcon.type === FaChevronDown ? (
        <FaChevronUp class="expandIcon" />
      ) : (
        <FaChevronDown class="expandIcon" />
      )
    );

    setComponentVisibility((isComponentVisible) =>
      !isComponentVisible
    );
  };

  return (
    <div className="content-list__item">
      <h2 className="title-2">
        {props.title} <button onClick={toggleIcon}>{selectedIcon}</button>
      </h2>
      {isComponentVisible && (
        <div>
          <p>{props.skills}</p>
          <div class="skill-box">
            <div class="skill-bar">
              <span class="skill-per" style ={{width: `${props.learnt}%`}}>
                <span class="tooltip">{props.learnt}%</span>
              </span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default BtnExpand;
