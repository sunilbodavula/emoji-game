// Write your code here.
import './index.css'

const EmojiCard = props => {
  const {emojiDetails, onClickEmoji} = props
  const {id, emojiName, emojiUrl} = emojiDetails
  const onTouchEmoji = () => {
    onClickEmoji(id)
  }
  return (
    <li className="emoji-card" onClick={onTouchEmoji}>
      <button type="button" className="emoji-button">
        <img className="emoji" src={emojiUrl} alt={emojiName} />
      </button>
    </li>
  )
}
export default EmojiCard
