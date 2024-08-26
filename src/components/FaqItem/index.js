// Write your code here.
import {Component} from 'react'
import './index.css'

const plusIcon =
  'https://assets.ccbp.in/frontend/react-js/faqs-plus-icon-img.png'
const minusIcon =
  'https://assets.ccbp.in/frontend/react-js/faqs-minus-icon-img.png'

class FaqItem extends Component {
  state = {isButtonActive: false}

  onToggleButton = () => {
    this.setState(prevState => ({isButtonActive: !prevState.isButtonActive}))
  }

  getAnswer = () => {
    const {eachFaqs} = this.props
    const {answerText} = eachFaqs
    const {isButtonActive} = this.state
    if (isButtonActive) {
      return (
        <div>
          <hr className="hr" />
          <p className="item-para">{answerText}</p>
        </div>
      )
    }
    return null
  }

  getButton = () => {
    const {isButtonActive} = this.state
    const image = isButtonActive ? minusIcon : plusIcon
    const alt = isButtonActive ? 'minus' : 'plus'

    return (
      <button className="button" type="button" onClick={this.onToggleButton}>
        <img src={image} alt={alt} />
      </button>
    )
  }

  render() {
    const {eachFaqs} = this.props
    const {questionText} = eachFaqs

    return (
      <li className="faqitem-list-container">
        <div className="item-list-container">
          <h1 className="item-heading">{questionText}</h1>
          {this.getButton()}
        </div>
        {this.getAnswer()}
      </li>
    )
  }
}

export default FaqItem
