import React, { useCallback, useEffect, useState } from "react";
import { Wrapper, Bgc } from './App-style';
import { gsap } from 'gsap';
import clearbgc from './img/sky.jpg';
import startbgc from './img/bgc.jpg';
import rainbgc from './img/rain.jpg'
import lightbgc from './img/lightning.jpg'
import cldbgc from './img/clouds.jpg'
import snowbgc from './img/snow.jpg'

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
  console.log('geolocation is active')
} else {
  console.log('geolocation is inactive')
};

function App() {
  let today = new window.Date().toDateString();

  const bgcImg = React.createRef();
  const wrappAnim = React.createRef();

  const startEffect = () => {
    gsap.to(bgcImg.current, { opacity: 0, duration: 1 })
  }

  const endEffect = useCallback(() => {
    gsap.fromTo(bgcImg.current, { opacity: 0 }, { opacity: 1, duration: 1, });
    gsap.fromTo(wrappAnim.current, { opacity: 0, y: 150 }, { opacity: 1, duration: 1, y: 0, delay: 1 })
  }, [bgcImg, wrappAnim])

  const [city, setCity] = useState('')
  const [weather, setWeather] = useState()
  const [error, setError] = useState()

  const fetchData = () => {
    fetch(`${params.path}?q=${city}&APPID=${params.key}&units=metric`)
      .then(handleErrors)
      .then(response => response.json())
      .then((data) => {
        setWeather(data)
        console.log(data)
        setCity('')
      })
      .catch(error => {
        console.log(error)
        window.alert(`We can't find this city, please try again`);
        setCity('')
        setError(true)
      })
  }

  const search = () => {
    startEffect();
    setTimeout(fetchData, 1500)
  }

  const enter = (e) => {
    if (e.which === 13) {
      search()
    };
  }

  const geoSearch = () => {
    navigator.geolocation.getCurrentPosition((position) => {
      fetch(`${params.path}?lat=${position.coords.latitude}&lon=${position.coords.longitude}&APPID=${params.key}&units=metric`)
        .then(startEffect())
        .then(handleErrors)
        .then(response => response.json())
        .then((data) => {
          setWeather(data)
          setCity('')
        })
        .catch(error => {
          window.alert(`We can't locate your position`);
          setCity('')
          setError(true)
        })
    })
  }

  const change = (e) => {
    setCity(e.target.value)
  }

  const bgc = {
    backgroundImage: `url(${startbgc})`,
  }

  const bgcChange = () => {
    if (weather !== undefined) {
      switch (weather.weather[0].main) {
        case 'Thunderstorm':
          bgc.backgroundImage = `url(${lightbgc}`;
          break;
        case 'Drizzle':
          bgc.backgroundImage = `url(${rainbgc})`;
          break;
        case 'Rain':
          bgc.backgroundImage = `url(${rainbgc})`;
          break;
        case 'Snow':
          bgc.backgroundImage = `url(${snowbgc})`;
          break;
        case 'Clear':
          bgc.backgroundImage = `url(${clearbgc}`;
          break;
        case 'Clouds':
          bgc.backgroundImage = `url(${cldbgc})`;
          break;
        default:
          bgc.backgroundImage = `url(${startbgc})`;
          break;
      }
    }
  }

  bgcChange();

  useEffect(() => {
    if (weather !== undefined) {
      if (weather.id !== undefined || error === true) {
        endEffect();
        weather.id = undefined;
        setError(false)
      }
    } else if (error === true) {
      endEffect();
      setError(false);
    }
  }, [endEffect, error, weather]);

  useEffect(() => {
    endEffect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    < Bgc
      style={bgc}
      ref={bgcImg}>
      <Wrapper>
        <main ref={wrappAnim}>
          <div className="input-wrapper">
            <button
              className="geo-btn"
              onClick={geoSearch}>
              <i class="fas fa-map-marker-alt"></i></button>
            <input
              type="text"
              className="input-bar"
              placeholder="Search...."
              onChange={change}
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