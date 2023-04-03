import { React, useContext, useState, useEffect } from "react";
import { getNews } from "../Context/NewsAction";
import NewsContext from "../Context/NewsContext";
import { weatherData } from "../Context/WeatherContext/WeatherAction";
import WeatherContext from "../Context/WeatherContext/WeatherContext";
function Navbar() {
  const { dispatch } = useContext(NewsContext);
  const { dispatchs } = useContext(WeatherContext);
  const [text, setText] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    handleWeatherData(text);
    const data = await getNews(text);
    // const newdata = {
    //   data,
    //   id: crypto.randomUUID(),
    // };
    dispatch({
      type: "GET_NEWS",
      payload: data,
    });
    setText("");
  };
  const handleClick = async (topic) => {
    const data = await getNews(topic);
    dispatch({
      type: "GET_NEWS",
      payload: data,
    });
    setText("");
  };
  useEffect(() => {
    handleClick("trending news");
  }, []);

  
  const handleWeatherData = async (text) => {
    console.log(text)
    const data = await weatherData(text);
    console.log(data);
    dispatchs({
      type: "WEATHER_DATA",
      payload: data,
    });
  };

  return (
    <nav className="navbar navbar-expand-lg bg-secondary">
      <div className="container-fluid">
        <a
          className="navbar-brand"
          href="#"
          onClick={() => handleClick("trending news")}
        >
          Trending News
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a
                className="nav-link"
                aria-current="page"
                href="#"
                onClick={() => handleClick("indore News")}
              >
                Indore News
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                href="#"
                onClick={() => handleClick("sport News")}
              >
                Sports
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                href="#"
                onClick={() => handleClick("Entertainment News")}
              >
                Entertainment
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                href="#"
                onClick={() => handleClick("Fashion News")}
              >
                Fashion
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                href="#"
                onClick={() => handleClick("Politics News")}
              >
                Politics
              </a>
            </li>
          </ul>
          <form
            className="d-flex"
            role="search"
            onSubmit={(e) => handleSubmit(e)}
          >
            <input
              className="form-control me-2 "
              type="search"
              value={text}
              placeholder="Search News"
              aria-label="Search"
              onChange={(e) => setText(e.target.value)}
            />
            <button className="btn btn-success btn-search" type="submit">
              Search
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
