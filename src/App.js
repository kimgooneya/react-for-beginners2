import { useEffect, useState } from "react";

const api="https://api.coinpaprika.com/v1/tickers";

function App() {
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]);
  useEffect(()=>{
    fetch(api)
    .then(response => response.json())
    .then(json => {
      setCoins(json);
      setLoading(false);
    });
  },[]);
  return (
    <div>
      <h1>The Coins!</h1>
      {loading ? <strong>Loading...</strong> : ""}
      <ul>
        {coins.map((coin)=><li>{coin.name} ({coin.symbol}): ${coin.quotes.USD.price} USD</li>)} 
      </ul>
    </div>
  )
}

export default App;