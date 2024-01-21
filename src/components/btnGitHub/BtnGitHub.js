import "./style.css";
import gitHubIcon from "./gitHub-black.svg";

const BtnGitHub = (props) => {
  return (
    <a
      href={props.link}
      target="_blank"
      rel="noreferrer"
      className="btn-outline"
    >
      <img src={gitHubIcon} alt="github icon" />
      GitHub repo
    </a>
  );
};

export default BtnGitHub;
