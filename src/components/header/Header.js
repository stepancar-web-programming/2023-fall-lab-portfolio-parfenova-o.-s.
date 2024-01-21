import "./style.css"

const Header = () => {
  return (
    <header className="header">
      <div className="header__wrapper">
        <h1 className="header__title">
          <strong>
            My name is <em>Olga</em>
          </strong>
          <br />I&apos;m a beginning data scientist
        </h1>
        <div className="header__text"></div>
        <a href="comming soon.." className="btn">
          Download CV
        </a>
      </div>
    </header>
  )
}

export default Header
