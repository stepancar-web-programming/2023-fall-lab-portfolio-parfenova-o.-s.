import habrIcon from "./habr-icon-black.svg";

const BtnHabr = (props) => {
  return (
    <a
      href={props.link}
      target="_blank"
      rel="noreferrer"
      className="btn-outline"
    >
      <img src={habrIcon} alt="" />
      Habr link
    </a>
  );
};

export default BtnHabr;
