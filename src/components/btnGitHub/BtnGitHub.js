import "./style.css"
import gitHubIcon from "./gitHub-black.svg"
import PropTypes from "prop-types"

const BtnGitHub = ({ link }) => {
  return (
    <a
      href={link}
      target="_blank"
      rel="noreferrer"
      className="btn-outline"
    >
      <img src={gitHubIcon} alt="github icon" />
      GitHub repo
    </a>
  )
}

BtnGitHub.propTypes = {
  link: PropTypes.string.isRequired
}

export default BtnGitHub
