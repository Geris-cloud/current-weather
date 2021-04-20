import styled from 'styled-components';

const boxShad = ' 0 10px 5px rgba(0, 0, 0, 0.8)';
const bgcColor = 'rgba(255, 255, 255, 0.6)'

export const Bgc = styled.div`
max-width: 1920px;
margin: 0 auto;
background-size: cover;
background-position: center;
background-repeat: no-repeat;
font-family: 'Roboto Condensed', sans-serif;
`;

export const Wrapper = styled.section`
height: 100vh;
background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.4));
padding: 5vh 5%;
overflow: hidden;

.input-wrapper {
  width: 100%;
  margin-bottom: 10vh;
  border-radius: 0 0 16px 16px;
  box-shadow: ${boxShad};
  background-color: ${bgcColor};
  overflow: hidden;

  .input-bar {
    width: 75%;
    padding: 5px;
    text-align: center;
    font-size: 30px; 
    transition: 0.4s ease;

    background: none;
    border: none;
    outline: none;

    :focus {
      background-color: ${bgcColor};
    }
  }
  .geo-btn,
  .srch-btn {
    width: 10%;
    padding: 5px 0;
    font-size: 30px;
    border: none;
    border-right: 1px solid #fff;
    border-radius: 0 0 0 16px;
    box-shadow: 5px 0 5px rgba(0, 0, 0, 0.6);
    background: none;
    z-index: 1;
  }
  .srch-btn {
    width: 15%;
    border-right: none;
    border-left: 1px solid #fff;
    border-radius: 0 0 16px 0;
    box-shadow: -5px 0 5px rgba(0, 0, 0, 0.6);
  }
}

.date-wrapper,
.weather-wrapper{
  width: 100%;
  padding: 3vh;
  margin-bottom: 5vh;
  border-radius: 25px;
  font-size: 45px;
  text-align: center;
  box-shadow: ${boxShad};

  background-color: ${bgcColor};
  text-shadow: 0 2px 2px rgb(55, 55, 55);
  
  .location {
    margin-bottom: 3vh;
  }

  .date {
    font-size: 30px;
  }

  .deg {
    font-size: 65px;
    margin-bottom: 3vh;
  }
}

@media (min-width: 360px){
  .date-wrapper,
  .weather-wrapper{
    font-size: 50px;
}

@media (min-width: 411px) {
  .input-wrapper {
    margin-bottom: 15vh;
  }
  .date-wrapper,
  .weather-wrapper{
    margin-bottom: 10vh;
  }
}

@media (min-height: 660px) and (orientation: portrait) {
  .input-wrapper {
    margin-bottom: 15vh;
    }
  .date-wrapper,
  .weather-wrapper{
    margin-bottom: 10vh;
    }
  }
}

@media (min-width: 768px) and (orientation: portrait) {
  .input-wrapper {
    margin-bottom: 20vh;
  }
  .date-wrapper,
  .weather-wrapper{
    margin-bottom: 10vh;
  }
}

@media(min-width: 1020px) {
  padding: 5vh 10%;

  .input-wrapper {
    width: 60%;
    margin: 0 auto 20vh auto;

    .srch-btn,
    .geo-btn {
      cursor: pointer;
      transition: 0.4s ease;
      transform: translate(0, 0);
      
      :hover {
        transform: translate(5%, 0);
      }
    }
    .geo-btn:hover {
      transform: translate(-5%, 0);
    }
  }

  .date-wrapper,
  .weather-wrapper{
    width: 60%;
    margin: 7vh auto 0;
  }
}
`;