// Write your JS code here
import './index.css'

const CryptocurrencyItem = props => {
  const {cryptoData} = props
  const {currencyName, usdValue, euroValue, id, currencyLogo} = cryptoData

  return (
    <div className="crypto-container">
      <div className="items-info">
        <img src={currencyLogo} className="logo" alt={`logo${id}`} />
        <p className="currency-name">{currencyName}</p>
        <p className="usd-value">{usdValue}</p>
        <p className="euro-value">{euroValue}</p>
      </div>
    </div>
  )
}

export default CryptocurrencyItem
