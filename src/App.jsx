import React, { useCallback, useEffect, useState } from 'react'
import Header from "./components/Header/Header"
import Main from './pages/Main/Main'
import { getCoins } from './api/api';
import { CoinsContext } from './context/coinsContext';

function App() {
  const [balance, setBalance] = useState(50000);
  const [coins, setCoins] = useState([])
  const [filteredCoins, setFilteredCoins] = useState([])

  useEffect(() => {
    const fetchData = async() => {
      const data = await getCoins()
      setCoins(data.coins);
      setFilteredCoins(data.coins);
    };
    fetchData()
  }, [])

  const addBalance = useCallback(() => {
    setBalance((prev) => prev + 1000);
  }, []);
  return (
    <>
    <CoinsContext.Provider value={{coins, filteredCoins}}>
      <Header/>
      <Main filteredCoins={filteredCoins} 
      setCoins={setFilteredCoins} 
      coins={coins} 
      balance={balance} 
      setBalance={addBalance}
      />
      </CoinsContext.Provider>
    </>
  )
}

export default App; 