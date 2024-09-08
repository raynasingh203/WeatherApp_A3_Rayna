import { useState } from 'react'

import './App.css'
import Mainpage from './Components/Mainpage'
import Navbox from './Components/Navbox'

import Weather from './Components/Weather'

function App() {
  const [city, setCity] = useState('New Delhi');

  const handleSearch = (newCity) => {
    setCity(newCity);
  };

  return (
    <>
    <Mainpage>
      <Navbox onSearch={handleSearch} />
      <Weather city={city} />
      </Mainpage>
    </>
  );
}

export default App;