const Contacts = () => {
  return (
    <main className="section">
      <div className="container">
        <h1 className="title-1">Contacts</h1>

        <ul className="content-list">
          <li className="content-list__item">
            <h2 className="title-2">Location</h2>
            <p>Saint-Petersburg, Russia</p>
          </li>
          <li className="content-list__item">
            <h2 className="title-2">Telegram</h2>
            <p>
              <a href="https://t.me/emshen" target="_blank" rel="noreferrer">
                @emshen
              </a>
            </p>
          </li>
          <li className="content-list__item">
            <h2 className="title-2">Email</h2>
            <a href="mailto:parfenovao752@gmail.com">parfenovao752@gmail.com</a>
          </li>
        </ul>
      </div>
    </main>
  )
}

export default Contacts
