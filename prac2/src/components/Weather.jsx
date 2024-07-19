import React, { useState } from 'react';

const Weather = () => {
    const [city, setCity] = useState('');
    const [weatherData, setWeatherData] = useState(null);
    const [error, setError] = useState(null);

    const fetchWeatherData = () => {
        if (city === '') {
            alert('Please enter a city');
            return;
        }

        fetch(`https://api.weatherapi.com/v1/current.json?key=e7ccb818e0164ecca5f52230241907&q=${city}`)
            .then(response => response.json())
            .then(data => {
                if (data.error) {
                    setError('Data for this city is not available');
                    setWeatherData(null);
                } else {
                    const temperature = data.current.temp_c;
                    setWeatherData(`The temperature of ${city.toLowerCase()} is ${temperature}°C`);
                    setError(null);
                }
            })
            .catch(error => {
                console.error('Error:', error);
                setError('An error occurred while fetching the weather data');
                setWeatherData(null);
            });
    };

    return (
        <div className="flex justify-center items-center w-full min-h-screen bg-center bg-cover"
             style={{backgroundImage: `url('https://res.cloudinary.com/dgwtgr6do/image/upload/v1719762617/folbwzv1jfp8vxs33ewf.jpg')`}}>
            <div className="rounded-xl bg-white shadow-lg w-4/5 h-4/5 opacity-70 p-8">
                <div className="text-6xl font-bold text-center flex items-center justify-center mb-8">
                    <h1>Weather App</h1>
                </div>
                <div className="flex justify-center mb-4">
                    <input type="text"
                           placeholder="Enter city name"
                           required
                           className="border border-gray-300 p-2 rounded w-full"
                           value={city}
                           onChange={(e) => setCity(e.target.value)}
                    />
                </div>
                <div className="flex justify-center mb-4">
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                            onClick={fetchWeatherData}
                    >
                        Click here to get weather
                    </button>
                </div>
                {weatherData && (
                    <div className="text-center text-lg mb-4">
                        {weatherData}
                    </div>
                )}
                {error && (
                    <div className="text-red-500 text-center mb-4">
                        {error}
                    </div>
                )}
            </div>
        </div>
    );
};

export default Weather;
