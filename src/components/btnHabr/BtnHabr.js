import habrIcon from "./habr-icon-black.svg"
import PropTypes from "prop-types"

const BtnHabr = ({ link }) => {
  return (
    <a
      href={link}
      target="_blank"
      rel="noreferrer"
      className="btn-outline"
    >
      <img src={habrIcon} alt="" />
      Habr link
    </a>
  )
}

BtnHabr.propTypes = {
  link: PropTypes.string.isRequired
}

export default BtnHabr
