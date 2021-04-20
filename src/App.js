import React, { useState } from "react";
import { Wrapper, Bgc } from './App-style';
import clearbgc from './img/sky.jpg';
import startbgc from './img/bgc.jpg';
import rainbgc from './img/rain.jpg'
import lightbgc from './img/lightning.jpg'
import cldbgc from './img/clouds.jpg'

const params = {
  path: "https://api.openweathermap.org/data/2.5/weather",
  key: "49ebaa43590359392604012bb8ae7231",
};

const handleErrors = (response) => {
  if (!response.ok) {
    throw Error(response.statusText);
  }
  return response
}

if ('geolocation' in navigator) {
  console.log('ok')
} else {
  console.log("you don't have this function")
};

function App() {
  let today = new window.Date().toDateString();

  const [city, setCity] = useState('')
  const [weather, setWeather] = useState()

  const search = () => {
    fetch(`${params.path}?q=${city}&APPID=${params.key}&units=metric`)
      .then(handleErrors)
      .then(response => response.json())
      .then((data) => {
        setWeather(data)
        setCity('')
        console.log(data)
      })
      .catch(error => {
        console.log('Error:', error)
        window.alert(`We can't find this city, please try again`);
        setCity('')
      })
  }

  const enter = (e) => {
    if (e.which === 13) { search() };
  }

  const geoSearch = () => {
    navigator.geolocation.getCurrentPosition((position) => {
      fetch(`${params.path}?lat=${position.coords.latitude}&lon=${position.coords.longitude}&APPID=${params.key}&units=metric`)
        .then(handleErrors)
        .then(response => response.json())
        .then((data) => {
          setWeather(data)
        })
        .catch(error => {
          window.alert(`Some mistake happened, please try again later`);
        })
    })
  }

  let bgc = {
    backgroundImage: `url(${startbgc})`,
  }

  const bgcChange = () => {
    if (weather !== undefined) {
      switch (weather.weather[0].main.length) {
        case 12:
          bgc.backgroundImage = `url(${lightbgc}`;
          break;
        case 7:
          bgc.backgroundImage = `url(${rainbgc})`;
          break;
        case 4:
          bgc.backgroundImage = `url(${rainbgc})`;
          break;
        case 5:
          bgc.backgroundImage = `url(${clearbgc}`;
          break;
        case 6:
          bgc.backgroundImage = `url(${cldbgc})`
          break;
        default:
          bgc.backgroundImage = `url(${startbgc})`;
      }
    }
  }

  bgcChange();

  return (
    < Bgc style={bgc} >
      <Wrapper>
        <main>
          <div className="input-wrapper">
            <button
              className="geo-btn"
              onClick={geoSearch}>
              <i class="fas fa-map-marker-alt"></i></button>
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
          {(weather !== undefined) ? (
            <div>
              <div className="date-wrapper">
                <div className="location">{weather.name}</div>
                <div className="date">{today.slice(3)}</div>
              </div>
              <div className="weather-wrapper">
                <div className="deg">{Math.round(weather.main.temp)}°C</div>
                <div className="weather">{weather.weather[0].main}</div>
              </div>
            </div>
          ) : (
            <div className="date-wrapper">
              <div className="location">Enter a city to view weather information</div>
              <div className="date">{today.slice(3)}</div>
            </div>
          )}
        </main>
      </Wrapper>
    </Bgc >
  );
}

export default App;