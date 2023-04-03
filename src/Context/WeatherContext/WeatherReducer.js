const WeatherReducer=(state,action)=>{
    switch (action.type) {
        
        case "WEATHER_DATA":
            return{
                ...state,
                allWeatherData:action.payload
            }
            
        default:
            return state;
    }
}
export default WeatherReducer;