import './index.css'

const SuggestionItem = props => {
  const {suggestions, chooseSuggestion} = props
  const {id, suggestion} = suggestions

  const selectSuggestion = () => {
    chooseSuggestion(id)
  }

  return (
    <li className="list-item">
      <p>{suggestion}</p>
      <button type="button" onClick={selectSuggestion}>
        <img
          src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png"
          alt="arrow"
        />
      </button>
    </li>
  )
}

export default SuggestionItem
