import { NavLink } from "react-router-dom"

import BtnDarkMode from "../btnDarkMode/BtnDarkMode"
import "./style.css"
import classNames from "classnames"

const Navbar = () => {
  const linkClass = ({ isActive }) => classNames("nav-list__link", { "nav-list__link--active": isActive })

  return (
    <nav className="nav">
      <div className="container">
        <div className="nav-row">
          <NavLink to="/" className="logo">
            <strong>Hello!</strong>
          </NavLink>

          <ul className="nav-list">
            <li className="nav-list__item">
              <NavLink
                to="/"
                className={linkClass}
              >
                Home
              </NavLink>
            </li>
            <li className="nav-list__item">
              <NavLink
                to="/projects"
                className={linkClass}
              >
                Projects
              </NavLink>
            </li>
            <li className="nav-list__item">
              <NavLink
                to="/contacts"
                className={linkClass}
              >
                Contacts
              </NavLink>
            </li>
            <li className="nav-list__item">
              <BtnDarkMode className="nav-list__item"/>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
