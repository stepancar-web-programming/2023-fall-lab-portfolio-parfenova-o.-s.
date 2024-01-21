import BtnExpand from "../components/btnExpand/BtnExpand"
import { skillsList } from "../helpers/skillsList"
import Header from "./../components/header/Header"

const Home = () => {
  return (
    <div>
      <Header />

      <main className="section">
        <div className="container">
          <ul className="content-list">
            {skillsList.map((skill) => {
              return (
                <BtnExpand
                  key={skill.id}
                  title={skill.title}
                  skills={skill.skills}
                  learnt={skill.learnt}
                />
              )
            })}
          </ul>
        </div>
      </main>
    </div>
  )
}

export default Home
