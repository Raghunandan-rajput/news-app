import React, { useEffect } from 'react'
import Card from './Card';
import NewsContext from '../Context/NewsContext';
import { useContext } from 'react';
import { weatherData } from '../Context/WeatherContext/WeatherAction';
import WeatherContext from '../Context/WeatherContext/WeatherContext';
import Marquee from 'react-fast-marquee';
function Home() {
const {allNews}=useContext(NewsContext)
 const { allWeatherData ,dispatchs } = useContext(WeatherContext)
//  console.log(allWeatherData);
//  console.log(allNews)

useEffect(() => {
  handleWeatherData("indore");
}, []);

const handleWeatherData = async(weather) => {
  const data = await weatherData(weather);
  // console.log(data);
  dispatchs({
    type:"WEATHER_DATA",
    payload:data
  })
};

if(!allNews){
  return (
    <div className="container d-flex justify-content-center mt-5 loading-div">
      <div className="spinner-grow text-primary" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
      &nbsp; &nbsp;
      <div className="spinner-grow text-secondary" role="status">
        <span className="visually-hidden"></span>
      </div> 
      &nbsp; &nbsp;&nbsp;
      <div className="spinner-grow text-success" role="status">
        <span className="visually-hidden"></span>
      </div>
      &nbsp; &nbsp;&nbsp;&nbsp;
      <div className="spinner-grow text-danger" role="status">
        <span className="visually-hidden"></span>
      </div>
      &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;
    </div>
  );
}

return (
  <>
    <Marquee
      speed={40}
      pauseOnHover={true}
      // className="custom-marquee"
     
      // width="auto"
      // behavior="scroll"
      // bgcolor="pink"
    >
      {/* {allNews.map((news) => (
        <span>
          ||&nbsp; &nbsp;
          {news.title}
        </span>
      ))} */}
      <div>
        <span>Place: {allWeatherData.location.name}&nbsp;&nbsp;</span>{" "}
        <span>State: {allWeatherData.location.region}&nbsp;&nbsp;</span>{" "}
        <span>Country: {allWeatherData.location.country}&nbsp;&nbsp;</span>{" "}
        <span>Temperture: {allWeatherData.current.temp_c}°C&nbsp;&nbsp;</span>{" "}
        <span>Humidity: {allWeatherData.current.humidity}&nbsp;&nbsp;</span>
      </div>
    </Marquee>
    <section className="layout">
      <Marquee
        className={"aside-slider"}
        pauseOnHover={true}
        loop={0}
        direction={"left"}
        gradient={false}
      >
        <div className="card col-md-4 col-lg-4  aside-bar  container">
          {allNews.map((news) => (
            <a href={news.url} key={news.index} target="_blank">
              <img
                src={news.urlToImage}
                className="card-img-top slider-img"
                alt="..."
              />
              <div className="card-body" key={news.index}>
                <h5 className="card-title">{news.title}</h5>
                <p className="card-text">{news.description}</p>
              </div>
              <hr />
            </a>
          ))}
        </div>
      </Marquee>

      <div className="col-9 flex-end">
        <div className="row">
          {allNews.map((news) => (
            <Card key={news.id} news={news} />
          ))}
        </div>
      </div>
    </section>
  </>
);
}
export default Home