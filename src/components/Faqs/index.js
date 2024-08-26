// Write your code here.
import {Component} from 'react'
import './index.css'

import FaqItem from '../FaqItem'

class Faqs extends Component {
  render() {
    const {faqsList} = this.props

    return (
      <div className="app-container">
        <div className="faqs-container">
          <h1 className="heading">FAQs</h1>
          <ul>
            {faqsList.map(eachFaqs => (
              <FaqItem key={eachFaqs.id} eachFaqs={eachFaqs} />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default Faqs
