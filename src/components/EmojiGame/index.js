import {Component} from 'react'
import NavBar from '../NavBar'
import './index.css'
import EmojiCard from '../EmojiCard'

class EmojiGame extends Component {
  state = {
    isPlayed: false,
    clickedEmojis: [],
    score: 0,
    topScore: 0,
    isWon: false,
  }

  onClickEmoji = id => {
    const {clickedEmojis} = this.state
    if (clickedEmojis.includes(id)) {
      this.setState({isPlayed: true})
    } else {
      this.setState(prevState => ({
        score: prevState.score + 1,
      }))
      this.setState(prevState => ({
        clickedEmojis: [...prevState.clickedEmojis, id],
      }))
    }
  }

  onClickPlayAgain = () => {
    this.setState({isPlayed: false})
    this.setState({score: 0})
    this.setState({clickedEmojis: []})
  }

  showLosePage = () => {
    const {score} = this.state
    return (
      <div className="result-card">
        <div className="result-text-card">
          <h1 className="result-heading">You Loss</h1>
          <p className="result-para">Score</p>
          <p className="results">{score}/12</p>
          <button
            onClick={this.onClickPlayAgain}
            className="play-again-btn"
            type="button"
          >
            Play Again
          </button>
        </div>
        <img
          className="result-img"
          src="https://assets.ccbp.in/frontend/react-js/lose-game-img.png"
          alt="win or loss"
        />
      </div>
    )
  }

  showWinPage = () => {
    this.setState({isWon: true})
    return (
      <div className="result-container">
        <div className="result-text-card">
          <h1 className="result-heading">You Won</h1>
          <p className="result-para">Best Score</p>
          <p className="results">12/12</p>
          <button
            onClick={this.onClickPlayAgain}
            className="play-again-btn"
            type="button"
          >
            Play Again
          </button>
        </div>
        <img
          className="result-img"
          src="https://assets.ccbp.in/frontend/react-js/win-game-img.png"
          alt="win or loss"
        />
      </div>
    )
  }

  showEmojis = emojisList => {
    const {isPlayed, score} = this.state
    if (isPlayed === false) {
      return emojisList.map(eachEmoji => (
        <EmojiCard
          emojiDetails={eachEmoji}
          onClickEmoji={this.onClickEmoji}
          key={eachEmoji.id}
        />
      ))
    }
    if (score < emojisList.length) {
      const {topScore} = this.state
      if (score > topScore) {
        this.setState({topScore: score})
      }
      return this.showLosePage()
    }
    return this.showWinPage()
  }

  render() {
    const {score, topScore, isWon} = this.state
    console.log(score)
    console.log(topScore)
    const shuffledEmojisList = () => {
      const {emojisList} = this.props
      return emojisList.sort(() => Math.random() - 0.5)
    }
    const emojisList = shuffledEmojisList()
    console.log(emojisList)
    return (
      <div>
        <div>
          <NavBar score={score} topScore={topScore} isWon={isWon} />
        </div>
        <div className="bg-container">
          <ul className="emojis-container">{this.showEmojis(emojisList)}</ul>
        </div>
      </div>
    )
  }
}
export default EmojiGame
/* 
Quick Tip 

- Use the below function in the EmojiGame Component to shuffle the emojisList every time when an emoji is clicked.

const shuffledEmojisList = () => {
  const {emojisList} = this.props
  return emojisList.sort(() => Math.random() - 0.5)
}

*/

// Write your code here.
