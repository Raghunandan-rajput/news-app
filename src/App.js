import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import { NewsProvider } from "./Context/NewsContext";
import { WeatherProvider } from "./Context/WeatherContext/WeatherContext";


function App() {
  return (
    <NewsProvider>
      <WeatherProvider>
      <Navbar/>
      <Home/>
      </WeatherProvider>
    </NewsProvider>
  );
}

export default App;
