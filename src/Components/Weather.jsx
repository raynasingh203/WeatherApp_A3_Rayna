import React, { useEffect, useState } from 'react';
import search_icon from '../assets/search.png'; 
import clear_icon from '../assets/clear.png'; 
import humidity_icon from '../assets/humidity.png'; 
import wind_icon from '../assets/wind.png'; 
import snow_icon from '../assets/snow.png'; 
import rain_icon from '../assets/rain.png'; 
import cloud_icon from '../assets/cloud.png'; 
import drizzle_icon from '../assets/drizzle.png'; 

const Weather = ({ city }) => {
  const [weatherData, setWeatherData] = useState(null);

  const allIcons = {
    "01d": clear_icon,
    "01n": clear_icon,
    "02d": cloud_icon,
    "03d": cloud_icon,
    "03n": cloud_icon,
    "04d": drizzle_icon,
    "04n": drizzle_icon,
    "09d": rain_icon,
    "09n": rain_icon,
    "10d": rain_icon,
    "10n": rain_icon,
    "13d": snow_icon,
    "13n": snow_icon,
  };

  const search = async (city) => {
    try {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${import.meta.env.VITE_APP_ID}`;
      const response = await fetch(url);
      const data = await response.json();

      const icon = allIcons[data.weather[0].icon] || clear_icon;
      setWeatherData({
        humidity: data.main.humidity,
        windSpeed: data.wind.speed,
        temperature: Math.floor(data.main.temp),
        location: data.name,
        icon: icon,
      });
    } catch (error) {
      console.error("Error fetching weather data:", error);
    }
  };

  useEffect(() => {
    if (city) {
      search(city);
    }
  }, [city]);

  return (
    <div className='w-[20rem] h-[22rem] shadow-lime-100 bg-gradient-to-b from-neon1 via-neon2 to-neon3 ml-[40rem] rounded-2xl shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)] p-4 relative'>
      <div className='flex pt-10 space-x-[1.5rem] items-center'>
        <div className='w-8 h-8'>
          <img src={search_icon} alt="Search" className='w-full h-full' />
        </div>
        <div className='text-2xl font-notable text-purple-500 '>
          Check Now
        </div>
      </div>
      
      <div className='mt-4 text-center'>
        {weatherData ? (
          <>
            <p className='text-base font-notable text-blue2'>City: {weatherData.location}</p>
            <p className='text-base font-notable  text-blue2'>Temperature: {weatherData.temperature}°C</p>

            <div className='w-12 h-12 mx-auto'>
              <img src={weatherData.icon} alt="Weather Icon" className='w-full h-full object-contain' />
            </div>

            <div className="weather-data flex justify-around mt-4">
              <div className="col flex items-center space-x-4">
                <img src={humidity_icon} alt="Humidity" className="w-8 h-8" />
                <div>
                  <p className="text-lg font-bold">{weatherData.humidity}%</p>
                  <span className="text-sm text-gray-600">Humidity</span>
                </div>
              </div>

              <div className="col flex items-center space-x-4">
                <img src={wind_icon} alt="Wind Speed" className="w-8 h-8" />
                <div>
                  <p className="text-lg font-bold">{weatherData.windSpeed} kmph</p>
                  <span className="text-sm text-gray-600">Wind Speed</span>
                </div>
              </div>
            </div>
          </>
        ) : (
          <p className='text-base text-gray-600'>Loading...</p>
        )}
      </div>
    </div>
  );
}

export default Weather;
