import React, { useEffect, useState } from "react";
import { Wrapper, Bgc } from './App-style';

const params = {
  path: "https://api.openweathermap.org/data/2.5/weather",
  key: "756de7619febabc7dc64042e98afc037",
};

function App() {

  let today = new window.Date().toDateString();

  const [city, setCity] = useState('London')
  const [weather, setWeather] = useState()

  const search = () => {
    fetch(`${params.path}?q=${city}&APPID=${params.key}&units=metric`)
      .then(response => response.json())
      .then((data) => {
        setWeather(data)
        setCity('')
        console.log(data)
      })
      .catch(error => console.log('Error:', error));
  }

  const enter = (e) => {
    if (e.which === 13) { search() };
  }

  useEffect(() => {
    if (weather === undefined) {
      // setCity('London');
      search();
    }
  })

  return (
    < Bgc >
      <Wrapper>
        <main>
          <div className="input-wrapper">
            <input
              type="text"
              className="input-bar"
              placeholder="Search...."
              onChange={c => setCity(c.target.value)}
              value={city}
              onKeyPress={enter}
            />
            <button
              className="srch-btn"
              onClick={search}>
              <i className="fas fa-search"></i></button>
          </div>
          {(typeof weather != 'undefined') ? (
            <div>
              <div className="date-wrapper">
                <div className="location">{weather.name}, {weather.sys.country}</div>
                <div className="date">{today.slice(3)}</div>
              </div>
              <div className="weather-wrapper">
                <div className="deg">{weather.main.temp}°C</div>
                <div className="weather">{weather.weather[0].main}</div>
              </div>
            </div>
          ) : ('')}
        </main>
      </Wrapper>
    </Bgc>
  );
}



export default App;

