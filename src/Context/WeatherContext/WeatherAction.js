export const weatherData = async (wdata) => {
  const response = await fetch(
    `https://api.weatherapi.com/v1/forecast.json?key=f2df6ef4249e4b74978193012231201&q=${wdata}&days=1&aqi=yes&alerts=yes`
  );
  const data = await response.json();
    return data;
};
