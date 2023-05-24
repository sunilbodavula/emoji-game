// Write your code here.
import './index.css'

const NavBar = props => {
  const {score, topScore} = props
  return (
    <div className="nav-container">
      <div className="nav-img-card">
        <img
          className="nav-img"
          src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
          alt="emoji logo"
        />
        <h1 className="nav-heading">Emoji Game</h1>
      </div>
      <div className="nav-score-card">
        <p className="nav-score">Score: {score}</p>
        <p className="nav-score nav-top-score">Top Score: {topScore}</p>
      </div>
    </div>
  )
}
export default NavBar
