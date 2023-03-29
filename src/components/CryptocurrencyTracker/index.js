// Write your code here
import {Component} from 'react'
import './index.css'

class CryptocurrencyTracker extends Component {
  state = {currencyItem: {}}

  render() {
    const {currencyItem} = this.state
    const {currencyName, usdValue, euroValue, currencyLogo} = currencyItem
    return (
      <div className="details-container">
        <h1 className="heading">Cryptocurrency Tracker</h1>
        <div className="details">
          <img src={currencyLogo} className="logo" alt={currencyLogo} />
          <p className="currency-name">{currencyName}</p>
          <p className="usd-value">{usdValue}</p>
          <p className="euro-value">{euroValue}</p>
        </div>
      </div>
    )
  }
}

export default CryptocurrencyTracker
