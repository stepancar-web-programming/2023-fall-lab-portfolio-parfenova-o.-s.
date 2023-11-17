import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { useState, useEffect, useCallback } from "react";
import "./style.css";

const BtnExpand = (props) => {
  const [selectedIcon, setSelectedIcon] = useState(
    <FaChevronDown className="expandIcon" />
  );
  const [isComponentVisible, setComponentVisibility] = useState(false);
  const [progress, setProgress] = useState(0);

  const animateProgress = useCallback(() => {
    let progressInterval = setInterval(() => {
      setProgress((prevProgress) =>
        prevProgress >= props.learnt ? props.learnt : prevProgress + 1
      );
    }, 30);

    setTimeout(() => {
      clearInterval(progressInterval);
    }, 3000);
  }, [props.learnt, setProgress]);

  useEffect(() => {
    if (isComponentVisible) {
      animateProgress();
    }
  }, [isComponentVisible, animateProgress]);

  const toggleIcon = () => {
    setSelectedIcon((prevIcon) =>
      prevIcon.type === FaChevronDown ? (
        <FaChevronUp class="expandIcon" />
      ) : (
        <FaChevronDown class="expandIcon" />
      )
    );

    setComponentVisibility((isComponentVisible) =>
      isComponentVisible === true ? false : true
    );
    setProgress(0);
    animateProgress();
  };

  return (
    <li className="content-list__item">
      <h2 className="title-2">
        {props.title} <button onClick={toggleIcon}>{selectedIcon}</button>
      </h2>
      {isComponentVisible && (
        <div>
          <p>{props.skills}</p>
          <div className="progress-container">
            <progress
              className="progress-bar"
              value={progress}
              max="100"
            ></progress>
            <p className="progress-label, title-3">{progress}%</p>
          </div>
        </div>
      )}
    </li>
  );
};

export default BtnExpand;
