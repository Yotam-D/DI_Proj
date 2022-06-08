import React, {useState} from 'react';
import AutoCompleteText from './components/AutoCompleteText'
import CurrentWeather from './components/CurrentWeather'
import FiveDaysForcast from './components/FiveDaysForcast'
import {Routes, Route} from 'react-router-dom'
import NavBar from './components/NavBar'
import './App.css';
import Favorites from './components/Favorites';

export const AppContext = React.createContext(null)

function App() {

  const [city, setCity] = useState('Tel Aviv');
  const [country, setCountry] = useState('Israel');
  const [cityKey,setCityKey] = useState(215854);
  const [metric, setMetric] = useState(true)

  return (

    <>
      <NavBar />
      <Routes>
        <Route element = {
        <AppContext.Provider value={{
          city,
          setCity,
          cityKey,
          setCityKey,
          metric,
          setMetric,
          country,
          setCountry
        }}>
          <div className="App">
            <AutoCompleteText />
            <CurrentWeather />
            <FiveDaysForcast />
          </div>
        </AppContext.Provider>
        } />
        <Route element = {Favorites}/>
      </Routes>
    </>
   );
    
}

export default App;


///https://dataservice.accuweather.com/forecasts/v1/daily/5day/215854?apikey=apikew&metric=true
