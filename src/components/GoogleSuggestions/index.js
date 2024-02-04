import {Component} from 'react'
import SuggestionItem from '../SuggestionItem'
import './index.css'

class GoogleSuggestions extends Component {
  state = {searchInput: ''}

  onChangeSearch = event => {
    this.setState({searchInput: event.target.value})
  }

  chooseSuggestion = id => {
    const {suggestionsList} = this.props
    const filteredItem = suggestionsList.filter(eachItem => eachItem.id === id)
    this.setState({searchInput: filteredItem[0].suggestion})
  }

  render() {
    const {searchInput} = this.state
    const {suggestionsList} = this.props
    const filteredSuggestions = suggestionsList.filter(eachItem =>
      eachItem.suggestion.toLowerCase().includes(searchInput.toLowerCase()),
    )
    return (
      <div className="bg-container">
        <img
          className="google-img"
          src="https://assets.ccbp.in/frontend/react-js/google-logo.png"
          alt="google logo"
        />
        <div className="container">
          <div className="seach-container">
            <img
              className="seach-icon"
              src="https://assets.ccbp.in/frontend/react-js/google-search-icon.png"
              alt="search icon"
            />
            <input
              type="search"
              className="search-input"
              placeholder="Search Google"
              onChange={this.onChangeSearch}
              value={searchInput}
            />
          </div>
          <ul className="list-container">
            {filteredSuggestions.map(eachItem => (
              <SuggestionItem
                suggestions={eachItem}
                key={eachItem.id}
                chooseSuggestion={this.chooseSuggestion}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default GoogleSuggestions
