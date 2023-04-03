import { createContext, useReducer } from "react";
import WeatherReducer from "./WeatherReducer";

const WeatherContext=createContext()

const initialState = {
  allWeatherData: {
    location: {
      name: "Indore",
      region: "Madhya Pradesh",
      country: "India",
      lat: 22.72,
      lon: 75.83,
      tz_id: "Asia/Kolkata",
      localtime_epoch: 1677657758,
      localtime: "2023-03-01 13:32",
    },
    current: {
      last_updated_epoch: 1677657600,
      last_updated: "2023-03-01 13:30",
      temp_c: 33,
      temp_f: 91.4,
      is_day: 1,
      condition: {
        text: "Partly cloudy",
        icon: "//cdn.weatherapi.com/weather/64x64/day/116.png",
        code: 1003,
      },
      wind_mph: 3.8,
      wind_kph: 6.1,
      wind_degree: 230,
      wind_dir: "SW",
      pressure_mb: 1020,
      pressure_in: 30.12,
      precip_mm: 0,
      precip_in: 0,
      humidity: 19,
      cloud: 50,
      feelslike_c: 30.9,
      feelslike_f: 87.5,
      vis_km: 6,
      vis_miles: 3,
      uv: 9,
      gust_mph: 8.9,
      gust_kph: 14.4,
      air_quality: {
        co: 357.20001220703125,
        no2: 2,
        o3: 150.1999969482422,
        so2: 9.100000381469727,
        pm2_5: 51.20000076293945,
        pm10: 57.20000076293945,
        "us-epa-index": 3,
        "gb-defra-index": 6,
      },
    },
    forecast: {
      forecastday: [
        {
          date: "2023-03-01",
          date_epoch: 1677628800,
          day: {
            maxtemp_c: 36,
            maxtemp_f: 96.8,
            mintemp_c: 19.9,
            mintemp_f: 67.8,
            avgtemp_c: 27.2,
            avgtemp_f: 80.9,
            maxwind_mph: 8.5,
            maxwind_kph: 13.7,
            totalprecip_mm: 0,
            totalprecip_in: 0,
            totalsnow_cm: 0,
            avgvis_km: 10,
            avgvis_miles: 6,
            avghumidity: 21,
            daily_will_it_rain: 0,
            daily_chance_of_rain: 0,
            daily_will_it_snow: 0,
            daily_chance_of_snow: 0,
            condition: {
              text: "Sunny",
              icon: "//cdn.weatherapi.com/weather/64x64/day/113.png",
              code: 1000,
            },
            uv: 7,
          },
          astro: {
            sunrise: "06:48 AM",
            sunset: "06:30 PM",
            moonrise: "01:12 PM",
            moonset: "02:29 AM",
            moon_phase: "Waxing Gibbous",
            moon_illumination: "66",
            is_moon_up: 0,
            is_sun_up: 0,
          },
          hour: [
            {
              time_epoch: 1677609000,
              time: "2023-03-01 00:00",
              temp_c: 22.4,
              temp_f: 72.3,
              is_day: 0,
              condition: {
                text: "Clear",
                icon: "//cdn.weatherapi.com/weather/64x64/night/113.png",
                code: 1000,
              },
              wind_mph: 4.7,
              wind_kph: 7.6,
              wind_degree: 349,
              wind_dir: "N",
              pressure_mb: 1016,
              pressure_in: 30.01,
              precip_mm: 0,
              precip_in: 0,
              humidity: 24,
              cloud: 3,
              feelslike_c: 22.8,
              feelslike_f: 73,
              windchill_c: 22.4,
              windchill_f: 72.3,
              heatindex_c: 22.8,
              heatindex_f: 73,
              dewpoint_c: 1,
              dewpoint_f: 33.8,
              will_it_rain: 0,
              chance_of_rain: 0,
              will_it_snow: 0,
              chance_of_snow: 0,
              vis_km: 10,
              vis_miles: 6,
              gust_mph: 9.8,
              gust_kph: 15.8,
              uv: 1,
            },
            {
              time_epoch: 1677612600,
              time: "2023-03-01 01:00",
              temp_c: 21.4,
              temp_f: 70.5,
              is_day: 0,
              condition: {
                text: "Clear",
                icon: "//cdn.weatherapi.com/weather/64x64/night/113.png",
                code: 1000,
              },
              wind_mph: 6.5,
              wind_kph: 10.4,
              wind_degree: 6,
              wind_dir: "N",
              pressure_mb: 1016,
              pressure_in: 30.01,
              precip_mm: 0,
              precip_in: 0,
              humidity: 26,
              cloud: 3,
              feelslike_c: 21.4,
              feelslike_f: 70.5,
              windchill_c: 21.4,
              windchill_f: 70.5,
              heatindex_c: 22.6,
              heatindex_f: 72.7,
              dewpoint_c: 1.2,
              dewpoint_f: 34.2,
              will_it_rain: 0,
              chance_of_rain: 0,
              will_it_snow: 0,
              chance_of_snow: 0,
              vis_km: 10,
              vis_miles: 6,
              gust_mph: 13.6,
              gust_kph: 22,
              uv: 1,
            },
            {
              time_epoch: 1677616200,
              time: "2023-03-01 02:00",
              temp_c: 21.4,
              temp_f: 70.5,
              is_day: 0,
              condition: {
                text: "Clear",
                icon: "//cdn.weatherapi.com/weather/64x64/night/113.png",
                code: 1000,
              },
              wind_mph: 5.4,
              wind_kph: 8.6,
              wind_degree: 1,
              wind_dir: "N",
              pressure_mb: 1016,
              pressure_in: 30,
              precip_mm: 0,
              precip_in: 0,
              humidity: 26,
              cloud: 3,
              feelslike_c: 21.4,
              feelslike_f: 70.5,
              windchill_c: 21.4,
              windchill_f: 70.5,
              heatindex_c: 22.7,
              heatindex_f: 72.9,
              dewpoint_c: 1.3,
              dewpoint_f: 34.3,
              will_it_rain: 0,
              chance_of_rain: 0,
              will_it_snow: 0,
              chance_of_snow: 0,
              vis_km: 10,
              vis_miles: 6,
              gust_mph: 11.2,
              gust_kph: 18,
              uv: 1,
            },
            {
              time_epoch: 1677619800,
              time: "2023-03-01 03:00",
              temp_c: 20.5,
              temp_f: 68.9,
              is_day: 0,
              condition: {
                text: "Clear",
                icon: "//cdn.weatherapi.com/weather/64x64/night/113.png",
                code: 1000,
              },
              wind_mph: 3.8,
              wind_kph: 6.1,
              wind_degree: 351,
              wind_dir: "N",
              pressure_mb: 1016,
              pressure_in: 30,
              precip_mm: 0,
              precip_in: 0,
              humidity: 28,
              cloud: 4,
              feelslike_c: 20.5,
              feelslike_f: 68.9,
              windchill_c: 20.5,
              windchill_f: 68.9,
              heatindex_c: 20.5,
              heatindex_f: 68.9,
              dewpoint_c: 1.4,
              dewpoint_f: 34.5,
              will_it_rain: 0,
              chance_of_rain: 0,
              will_it_snow: 0,
              chance_of_snow: 0,
              vis_km: 10,
              vis_miles: 6,
              gust_mph: 8.1,
              gust_kph: 13,
              uv: 1,
            },
            {
              time_epoch: 1677623400,
              time: "2023-03-01 04:00",
              temp_c: 20.2,
              temp_f: 68.4,
              is_day: 0,
              condition: {
                text: "Clear",
                icon: "//cdn.weatherapi.com/weather/64x64/night/113.png",
                code: 1000,
              },
              wind_mph: 2.7,
              wind_kph: 4.3,
              wind_degree: 353,
              wind_dir: "N",
              pressure_mb: 1016,
              pressure_in: 29.99,
              precip_mm: 0,
              precip_in: 0,
              humidity: 29,
              cloud: 4,
              feelslike_c: 20.2,
              feelslike_f: 68.4,
              windchill_c: 20.2,
              windchill_f: 68.4,
              heatindex_c: 20.2,
              heatindex_f: 68.4,
              dewpoint_c: 1.4,
              dewpoint_f: 34.5,
              will_it_rain: 0,
              chance_of_rain: 0,
              will_it_snow: 0,
              chance_of_snow: 0,
              vis_km: 10,
              vis_miles: 6,
              gust_mph: 5.6,
              gust_kph: 9,
              uv: 1,
            },
            {
              time_epoch: 1677627000,
              time: "2023-03-01 05:00",
              temp_c: 20,
              temp_f: 68,
              is_day: 0,
              condition: {
                text: "Clear",
                icon: "//cdn.weatherapi.com/weather/64x64/night/113.png",
                code: 1000,
              },
              wind_mph: 2.5,
              wind_kph: 4,
              wind_degree: 23,
              wind_dir: "NNE",
              pressure_mb: 1016,
              pressure_in: 30,
              precip_mm: 0,
              precip_in: 0,
              humidity: 29,
              cloud: 4,
              feelslike_c: 20,
              feelslike_f: 68,
              windchill_c: 20,
              windchill_f: 68,
              heatindex_c: 20,
              heatindex_f: 68,
              dewpoint_c: 1.3,
              dewpoint_f: 34.3,
              will_it_rain: 0,
              chance_of_rain: 0,
              will_it_snow: 0,
              chance_of_snow: 0,
              vis_km: 10,
              vis_miles: 6,
              gust_mph: 5.1,
              gust_kph: 8.3,
              uv: 1,
            },
            {
              time_epoch: 1677630600,
              time: "2023-03-01 06:00",
              temp_c: 19.9,
              temp_f: 67.8,
              is_day: 0,
              condition: {
                text: "Clear",
                icon: "//cdn.weatherapi.com/weather/64x64/night/113.png",
                code: 1000,
              },
              wind_mph: 2.7,
              wind_kph: 4.3,
              wind_degree: 42,
              wind_dir: "NE",
              pressure_mb: 1017,
              pressure_in: 30.02,
              precip_mm: 0,
              precip_in: 0,
              humidity: 29,
              cloud: 4,
              feelslike_c: 19.9,
              feelslike_f: 67.8,
              windchill_c: 19.9,
              windchill_f: 67.8,
              heatindex_c: 19.9,
              heatindex_f: 67.8,
              dewpoint_c: 1.4,
              dewpoint_f: 34.5,
              will_it_rain: 0,
              chance_of_rain: 0,
              will_it_snow: 0,
              chance_of_snow: 0,
              vis_km: 10,
              vis_miles: 6,
              gust_mph: 5.6,
              gust_kph: 9,
              uv: 1,
            },
            {
              time_epoch: 1677634200,
              time: "2023-03-01 07:00",
              temp_c: 21,
              temp_f: 69.8,
              is_day: 1,
              condition: {
                text: "Sunny",
                icon: "//cdn.weatherapi.com/weather/64x64/day/113.png",
                code: 1000,
              },
              wind_mph: 1.8,
              wind_kph: 2.9,
              wind_degree: 133,
              wind_dir: "SE",
              pressure_mb: 1018,
              pressure_in: 30.05,
              precip_mm: 0,
              precip_in: 0,
              humidity: 28,
              cloud: 5,
              feelslike_c: 21,
              feelslike_f: 69.8,
              windchill_c: 21,
              windchill_f: 69.8,
              heatindex_c: 21,
              heatindex_f: 69.8,
              dewpoint_c: 1.9,
              dewpoint_f: 35.4,
              will_it_rain: 0,
              chance_of_rain: 0,
              will_it_snow: 0,
              chance_of_snow: 0,
              vis_km: 10,
              vis_miles: 6,
              gust_mph: 3.8,
              gust_kph: 6.1,
              uv: 6,
            },
            {
              time_epoch: 1677637800,
              time: "2023-03-01 08:00",
              temp_c: 24.6,
              temp_f: 76.3,
              is_day: 1,
              condition: {
                text: "Sunny",
                icon: "//cdn.weatherapi.com/weather/64x64/day/113.png",
                code: 1000,
              },
              wind_mph: 1.6,
              wind_kph: 2.5,
              wind_degree: 101,
              wind_dir: "ESE",
              pressure_mb: 1018,
              pressure_in: 30.06,
              precip_mm: 0,
              precip_in: 0,
              humidity: 23,
              cloud: 5,
              feelslike_c: 23.8,
              feelslike_f: 74.8,
              windchill_c: 24.6,
              windchill_f: 76.3,
              heatindex_c: 23.8,
              heatindex_f: 74.8,
              dewpoint_c: 1.9,
              dewpoint_f: 35.4,
              will_it_rain: 0,
              chance_of_rain: 0,
              will_it_snow: 0,
              chance_of_snow: 0,
              vis_km: 10,
              vis_miles: 6,
              gust_mph: 2.5,
              gust_kph: 4,
              uv: 6,
            },
            {
              time_epoch: 1677641400,
              time: "2023-03-01 09:00",
              temp_c: 27.8,
              temp_f: 82,
              is_day: 1,
              condition: {
                text: "Sunny",
                icon: "//cdn.weatherapi.com/weather/64x64/day/113.png",
                code: 1000,
              },
              wind_mph: 4.5,
              wind_kph: 7.2,
              wind_degree: 105,
              wind_dir: "ESE",
              pressure_mb: 1018,
              pressure_in: 30.07,
              precip_mm: 0,
              precip_in: 0,
              humidity: 20,
              cloud: 5,
              feelslike_c: 25.9,
              feelslike_f: 78.6,
              windchill_c: 27.8,
              windchill_f: 82,
              heatindex_c: 25.9,
              heatindex_f: 78.6,
              dewpoint_c: 2.5,
              dewpoint_f: 36.5,
              will_it_rain: 0,
              chance_of_rain: 0,
              will_it_snow: 0,
              chance_of_snow: 0,
              vis_km: 10,
              vis_miles: 6,
              gust_mph: 5.1,
              gust_kph: 8.3,
              uv: 7,
            },
            {
              time_epoch: 1677645000,
              time: "2023-03-01 10:00",
              temp_c: 29.6,
              temp_f: 85.3,
              is_day: 1,
              condition: {
                text: "Sunny",
                icon: "//cdn.weatherapi.com/weather/64x64/day/113.png",
                code: 1000,
              },
              wind_mph: 6.3,
              wind_kph: 10.1,
              wind_degree: 131,
              wind_dir: "SE",
              pressure_mb: 1018,
              pressure_in: 30.07,
              precip_mm: 0,
              precip_in: 0,
              humidity: 19,
              cloud: 4,
              feelslike_c: 27.4,
              feelslike_f: 81.3,
              windchill_c: 29.6,
              windchill_f: 85.3,
              heatindex_c: 27.4,
              heatindex_f: 81.3,
              dewpoint_c: 3.8,
              dewpoint_f: 38.8,
              will_it_rain: 0,
              chance_of_rain: 0,
              will_it_snow: 0,
              chance_of_snow: 0,
              vis_km: 10,
              vis_miles: 6,
              gust_mph: 7.2,
              gust_kph: 11.5,
              uv: 7,
            },
            {
              time_epoch: 1677648600,
              time: "2023-03-01 11:00",
              temp_c: 33.9,
              temp_f: 93,
              is_day: 1,
              condition: {
                text: "Sunny",
                icon: "//cdn.weatherapi.com/weather/64x64/day/113.png",
                code: 1000,
              },
              wind_mph: 7.4,
              wind_kph: 11.9,
              wind_degree: 153,
              wind_dir: "SSE",
              pressure_mb: 1018,
              pressure_in: 30.05,
              precip_mm: 0,
              precip_in: 0,
              humidity: 18,
              cloud: 4,
              feelslike_c: 31.9,
              feelslike_f: 89.4,
              windchill_c: 33.9,
              windchill_f: 93,
              heatindex_c: 31.9,
              heatindex_f: 89.4,
              dewpoint_c: 6.6,
              dewpoint_f: 43.9,
              will_it_rain: 0,
              chance_of_rain: 0,
              will_it_snow: 0,
              chance_of_snow: 0,
              vis_km: 10,
              vis_miles: 6,
              gust_mph: 8.5,
              gust_kph: 13.7,
              uv: 8,
            },
            {
              time_epoch: 1677652200,
              time: "2023-03-01 12:00",
              temp_c: 35.1,
              temp_f: 95.2,
              is_day: 1,
              condition: {
                text: "Sunny",
                icon: "//cdn.weatherapi.com/weather/64x64/day/113.png",
                code: 1000,
              },
              wind_mph: 8.1,
              wind_kph: 13,
              wind_degree: 170,
              wind_dir: "S",
              pressure_mb: 1017,
              pressure_in: 30.02,
              precip_mm: 0,
              precip_in: 0,
              humidity: 16,
              cloud: 5,
              feelslike_c: 33.3,
              feelslike_f: 91.9,
              windchill_c: 35.1,
              windchill_f: 95.2,
              heatindex_c: 33.3,
              heatindex_f: 91.9,
              dewpoint_c: 5.5,
              dewpoint_f: 41.9,
              will_it_rain: 0,
              chance_of_rain: 0,
              will_it_snow: 0,
              chance_of_snow: 0,
              vis_km: 10,
              vis_miles: 6,
              gust_mph: 9.2,
              gust_kph: 14.8,
              uv: 9,
            },
            {
              time_epoch: 1677655800,
              time: "2023-03-01 13:00",
              temp_c: 35.6,
              temp_f: 96.1,
              is_day: 1,
              condition: {
                text: "Sunny",
                icon: "//cdn.weatherapi.com/weather/64x64/day/113.png",
                code: 1000,
              },
              wind_mph: 7.8,
              wind_kph: 12.6,
              wind_degree: 192,
              wind_dir: "SSW",
              pressure_mb: 1015,
              pressure_in: 29.98,
              precip_mm: 0,
              precip_in: 0,
              humidity: 14,
              cloud: 4,
              feelslike_c: 33.9,
              feelslike_f: 93,
              windchill_c: 35.6,
              windchill_f: 96.1,
              heatindex_c: 33.9,
              heatindex_f: 93,
              dewpoint_c: 4.4,
              dewpoint_f: 39.9,
              will_it_rain: 0,
              chance_of_rain: 0,
              will_it_snow: 0,
              chance_of_snow: 0,
              vis_km: 10,
              vis_miles: 6,
              gust_mph: 8.9,
              gust_kph: 14.4,
              uv: 9,
            },
            {
              time_epoch: 1677659400,
              time: "2023-03-01 14:00",
              temp_c: 35.9,
              temp_f: 96.6,
              is_day: 1,
              condition: {
                text: "Sunny",
                icon: "//cdn.weatherapi.com/weather/64x64/day/113.png",
                code: 1000,
              },
              wind_mph: 7.4,
              wind_kph: 11.9,
              wind_degree: 208,
              wind_dir: "SSW",
              pressure_mb: 1014,
              pressure_in: 29.95,
              precip_mm: 0,
              precip_in: 0,
              humidity: 14,
              cloud: 3,
              feelslike_c: 34.3,
              feelslike_f: 93.7,
              windchill_c: 35.9,
              windchill_f: 96.6,
              heatindex_c: 34.3,
              heatindex_f: 93.7,
              dewpoint_c: 3.9,
              dewpoint_f: 39,
              will_it_rain: 0,
              chance_of_rain: 0,
              will_it_snow: 0,
              chance_of_snow: 0,
              vis_km: 10,
              vis_miles: 6,
              gust_mph: 8.5,
              gust_kph: 13.7,
              uv: 9,
            },
            {
              time_epoch: 1677663000,
              time: "2023-03-01 15:00",
              temp_c: 36,
              temp_f: 96.8,
              is_day: 1,
              condition: {
                text: "Sunny",
                icon: "//cdn.weatherapi.com/weather/64x64/day/113.png",
                code: 1000,
              },
              wind_mph: 7.6,
              wind_kph: 12.2,
              wind_degree: 218,
              wind_dir: "SW",
              pressure_mb: 1013,
              pressure_in: 29.92,
              precip_mm: 0,
              precip_in: 0,
              humidity: 13,
              cloud: 3,
              feelslike_c: 34.4,
              feelslike_f: 93.9,
              windchill_c: 36,
              windchill_f: 96.8,
              heatindex_c: 34.4,
              heatindex_f: 93.9,
              dewpoint_c: 3.5,
              dewpoint_f: 38.3,
              will_it_rain: 0,
              chance_of_rain: 0,
              will_it_snow: 0,
              chance_of_snow: 0,
              vis_km: 10,
              vis_miles: 6,
              gust_mph: 8.7,
              gust_kph: 14,
              uv: 9,
            },
            {
              time_epoch: 1677666600,
              time: "2023-03-01 16:00",
              temp_c: 35.6,
              temp_f: 96.1,
              is_day: 1,
              condition: {
                text: "Sunny",
                icon: "//cdn.weatherapi.com/weather/64x64/day/113.png",
                code: 1000,
              },
              wind_mph: 7.8,
              wind_kph: 12.6,
              wind_degree: 226,
              wind_dir: "SW",
              pressure_mb: 1013,
              pressure_in: 29.92,
              precip_mm: 0,
              precip_in: 0,
              humidity: 13,
              cloud: 3,
              feelslike_c: 33.9,
              feelslike_f: 93,
              windchill_c: 35.6,
              windchill_f: 96.1,
              heatindex_c: 33.9,
              heatindex_f: 93,
              dewpoint_c: 3.2,
              dewpoint_f: 37.8,
              will_it_rain: 0,
              chance_of_rain: 0,
              will_it_snow: 0,
              chance_of_snow: 0,
              vis_km: 10,
              vis_miles: 6,
              gust_mph: 8.9,
              gust_kph: 14.4,
              uv: 9,
            },
            {
              time_epoch: 1677670200,
              time: "2023-03-01 17:00",
              temp_c: 34.7,
              temp_f: 94.5,
              is_day: 1,
              condition: {
                text: "Sunny",
                icon: "//cdn.weatherapi.com/weather/64x64/day/113.png",
                code: 1000,
              },
              wind_mph: 8.5,
              wind_kph: 13.7,
              wind_degree: 232,
              wind_dir: "SW",
              pressure_mb: 1013,
              pressure_in: 29.93,
              precip_mm: 0,
              precip_in: 0,
              humidity: 14,
              cloud: 3,
              feelslike_c: 32.8,
              feelslike_f: 91,
              windchill_c: 34.7,
              windchill_f: 94.5,
              heatindex_c: 32.8,
              heatindex_f: 91,
              dewpoint_c: 3.3,
              dewpoint_f: 37.9,
              will_it_rain: 0,
              chance_of_rain: 0,
              will_it_snow: 0,
              chance_of_snow: 0,
              vis_km: 10,
              vis_miles: 6,
              gust_mph: 9.8,
              gust_kph: 15.8,
              uv: 8,
            },
            {
              time_epoch: 1677673800,
              time: "2023-03-01 18:00",
              temp_c: 30.1,
              temp_f: 86.2,
              is_day: 0,
              condition: {
                text: "Clear",
                icon: "//cdn.weatherapi.com/weather/64x64/night/113.png",
                code: 1000,
              },
              wind_mph: 7.2,
              wind_kph: 11.5,
              wind_degree: 235,
              wind_dir: "SW",
              pressure_mb: 1014,
              pressure_in: 29.95,
              precip_mm: 0,
              precip_in: 0,
              humidity: 18,
              cloud: 3,
              feelslike_c: 27.9,
              feelslike_f: 82.2,
              windchill_c: 30.1,
              windchill_f: 86.2,
              heatindex_c: 27.9,
              heatindex_f: 82.2,
              dewpoint_c: 3.1,
              dewpoint_f: 37.6,
              will_it_rain: 0,
              chance_of_rain: 0,
              will_it_snow: 0,
              chance_of_snow: 0,
              vis_km: 10,
              vis_miles: 6,
              gust_mph: 11,
              gust_kph: 17.6,
              uv: 1,
            },
            {
              time_epoch: 1677677400,
              time: "2023-03-01 19:00",
              temp_c: 27.4,
              temp_f: 81.3,
              is_day: 0,
              condition: {
                text: "Clear",
                icon: "//cdn.weatherapi.com/weather/64x64/night/113.png",
                code: 1000,
              },
              wind_mph: 6.7,
              wind_kph: 10.8,
              wind_degree: 235,
              wind_dir: "SW",
              pressure_mb: 1015,
              pressure_in: 29.98,
              precip_mm: 0,
              precip_in: 0,
              humidity: 20,
              cloud: 2,
              feelslike_c: 25.5,
              feelslike_f: 77.9,
              windchill_c: 27.4,
              windchill_f: 81.3,
              heatindex_c: 25.5,
              heatindex_f: 77.9,
              dewpoint_c: 2.2,
              dewpoint_f: 36,
              will_it_rain: 0,
              chance_of_rain: 0,
              will_it_snow: 0,
              chance_of_snow: 0,
              vis_km: 10,
              vis_miles: 6,
              gust_mph: 13.4,
              gust_kph: 21.6,
              uv: 1,
            },
            {
              time_epoch: 1677681000,
              time: "2023-03-01 20:00",
              temp_c: 25.6,
              temp_f: 78.1,
              is_day: 0,
              condition: {
                text: "Clear",
                icon: "//cdn.weatherapi.com/weather/64x64/night/113.png",
                code: 1000,
              },
              wind_mph: 5.8,
              wind_kph: 9.4,
              wind_degree: 251,
              wind_dir: "WSW",
              pressure_mb: 1016,
              pressure_in: 30.01,
              precip_mm: 0,
              precip_in: 0,
              humidity: 21,
              cloud: 2,
              feelslike_c: 24.3,
              feelslike_f: 75.7,
              windchill_c: 25.6,
              windchill_f: 78.1,
              heatindex_c: 24.3,
              heatindex_f: 75.7,
              dewpoint_c: 1.5,
              dewpoint_f: 34.7,
              will_it_rain: 0,
              chance_of_rain: 0,
              will_it_snow: 0,
              chance_of_snow: 0,
              vis_km: 10,
              vis_miles: 6,
              gust_mph: 12.3,
              gust_kph: 19.8,
              uv: 1,
            },
            {
              time_epoch: 1677684600,
              time: "2023-03-01 21:00",
              temp_c: 24.8,
              temp_f: 76.6,
              is_day: 0,
              condition: {
                text: "Clear",
                icon: "//cdn.weatherapi.com/weather/64x64/night/113.png",
                code: 1000,
              },
              wind_mph: 5.1,
              wind_kph: 8.3,
              wind_degree: 274,
              wind_dir: "W",
              pressure_mb: 1017,
              pressure_in: 30.03,
              precip_mm: 0,
              precip_in: 0,
              humidity: 21,
              cloud: 2,
              feelslike_c: 23.8,
              feelslike_f: 74.8,
              windchill_c: 24.8,
              windchill_f: 76.6,
              heatindex_c: 23.8,
              heatindex_f: 74.8,
              dewpoint_c: 1.3,
              dewpoint_f: 34.3,
              will_it_rain: 0,
              chance_of_rain: 0,
              will_it_snow: 0,
              chance_of_snow: 0,
              vis_km: 10,
              vis_miles: 6,
              gust_mph: 10.7,
              gust_kph: 17.3,
              uv: 1,
            },
            {
              time_epoch: 1677688200,
              time: "2023-03-01 22:00",
              temp_c: 24.5,
              temp_f: 76.1,
              is_day: 0,
              condition: {
                text: "Clear",
                icon: "//cdn.weatherapi.com/weather/64x64/night/113.png",
                code: 1000,
              },
              wind_mph: 4.5,
              wind_kph: 7.2,
              wind_degree: 290,
              wind_dir: "WNW",
              pressure_mb: 1017,
              pressure_in: 30.03,
              precip_mm: 0,
              precip_in: 0,
              humidity: 21,
              cloud: 2,
              feelslike_c: 23.6,
              feelslike_f: 74.5,
              windchill_c: 24.5,
              windchill_f: 76.1,
              heatindex_c: 23.6,
              heatindex_f: 74.5,
              dewpoint_c: 1,
              dewpoint_f: 33.8,
              will_it_rain: 0,
              chance_of_rain: 0,
              will_it_snow: 0,
              chance_of_snow: 0,
              vis_km: 10,
              vis_miles: 6,
              gust_mph: 9.4,
              gust_kph: 15.1,
              uv: 1,
            },
            {
              time_epoch: 1677691800,
              time: "2023-03-01 23:00",
              temp_c: 24.2,
              temp_f: 75.6,
              is_day: 0,
              condition: {
                text: "Clear",
                icon: "//cdn.weatherapi.com/weather/64x64/night/113.png",
                code: 1000,
              },
              wind_mph: 6,
              wind_kph: 9.7,
              wind_degree: 317,
              wind_dir: "NW",
              pressure_mb: 1017,
              pressure_in: 30.03,
              precip_mm: 0,
              precip_in: 0,
              humidity: 21,
              cloud: 3,
              feelslike_c: 23.4,
              feelslike_f: 74.1,
              windchill_c: 24.2,
              windchill_f: 75.6,
              heatindex_c: 23.4,
              heatindex_f: 74.1,
              dewpoint_c: 0.6,
              dewpoint_f: 33.1,
              will_it_rain: 0,
              chance_of_rain: 0,
              will_it_snow: 0,
              chance_of_snow: 0,
              vis_km: 10,
              vis_miles: 6,
              gust_mph: 12.8,
              gust_kph: 20.5,
              uv: 1,
            },
          ],
        },
      ],
    },
    alerts: {
      alert: [],
    },
  },

};

export const WeatherProvider = ({ children }) => {
  const [state, dispatchs] = useReducer(WeatherReducer, initialState);

  return (
    <WeatherContext.Provider
      value={{
        ...state,
        dispatchs,
      }}
    >
      {children}
    </WeatherContext.Provider>
  );
};

export default WeatherContext;