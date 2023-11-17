import vk from "./../../img/icons/vk.svg";
import telegram from "./../../img/icons/telegram.svg";
import habr from "./../../img/icons/habr.svg";
import gitHub from "./../../img/icons/gitHub.svg";

import "./style.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__wrapper">
          <ul className="social">
            <li className="social__item">
              <a
                href="https://vk.com/id324803524"
                target="_blank"
                rel="noreferrer"
              >
                <img src={vk} alt="Link" />
              </a>
            </li>
            <li className="social__item">
              <a href="https://t.me/emshen" target="_blank" rel="noreferrer">
                <img src={telegram} alt="Link" />
              </a>
            </li>
            <li className="social__item">
              <a
                href="https://github.com/emshen6"
                target="_blank"
                rel="noreferrer"
              >
                <img src={gitHub} alt="Link" />
              </a>
            </li>
            <li className="social__item">
              <a
                href="https://habr.com/ru/users/edgyprogrammer2010"
                target="_blank"
                rel="noreferrer"
              >
                <img src={habr} alt="Link" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
