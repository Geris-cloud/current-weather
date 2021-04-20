import styled from 'styled-components';
import background from './img/bgc.jpg';

const boxShad = ' 0 10px 5px rgba(0, 0, 0, 0.5)';
const bgcColor = 'rgba(255, 255, 255, 0.4)'

export const Bgc = styled.div`
background-image: url(${background});
background-size: cover;
background-position: center;
background-repeat: no-repeat;
/*transition: 0.4s ease-out;*/ 
font-size: 20px;
font-family: 'Roboto Condensed', sans-serif;

${'' /* .warm {
  background-image: url(${background};
} */}
`;

export const Wrapper = styled.section`
min-height: 100vh;
background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.4));
padding: 5vh 10%;

.input-wrapper {
  width: 60%;
  margin: 0 auto 20vh auto;
  ${'' /* border: 2px solid #fff; */}
  border-radius: 0 0 16px 16px;
  box-shadow: ${boxShad};
  background-color: rgba(255, 255, 255, 0.4);

  .input-bar {
    width: 80%;
    padding: 5px;
    border-radius: 0 0 16px 16px;
    text-align: center;
    font-size: 2rem; 
    transition: 0.4s ease;

    background: none;
    border: none;
    outline: none;

    :focus {
      background-color: rgba(255, 255, 255, 0.3);
    }
  }
  .srch-btn {
    width: 20%;
    padding: 5px 0;
    font-size: 2rem;
    cursor: pointer;
    border: none;
    border-left: 1px solid #fff;
    border-radius: 0 0 16px 0;
    box-shadow: -5px 0 5px rgba(0, 0, 0, 0.5);
    background: none;
    transition: 0.4s ease;

    :hover {
      transform: translate(5%, 0);
    }
  }
}

.date-wrapper,
.weather-wrapper{
  width: 60%;
  padding: 3vh;
  margin: 7vh auto 0;
  border-radius: 25px;
  font-size: 3rem;
  text-align: center;
  box-shadow: ${boxShad};

  background-color: ${bgcColor};
  text-shadow: 0 3px 3px rgb(200, 200, 200);
  
  .location {
    margin-bottom: 3vh;
  }

  .date {
    font-size: 2rem;
  }

  .deg {
    font-size: 4rem;
    margin-bottom: 3vh;
  }
}
`;