import { Oval } from 'react-loader-spinner';
import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFrown } from '@fortawesome/free-solid-svg-icons';

function DisplayWeather({ weather_data }) {

    console.log(weather_data);
    console.log(weather_data.isactive);

    const [backgroundImage, setBackgroundImage] = useState('');

    useEffect(() => {
        if (weather_data.isactive) {
            if (weather_data.data.weather[0].main === "Clouds") {
                setBackgroundImage("https://images.pexels.com/photos/5137661/pexels-photo-5137661.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1");
            }

            else if(weather_data.data.weather[0].main === "Rain"){

                setBackgroundImage("https://images.pexels.com/photos/1154510/pexels-photo-1154510.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1");
            }

            else if(weather_data.data.weather[0].main === "Clear"){

                setBackgroundImage("https://images.pexels.com/photos/158827/field-corn-air-frisch-158827.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1");
            }

            else if(weather_data.data.weather[0].main === "Haze"){

                setBackgroundImage("https://images.pexels.com/photos/1809644/pexels-photo-1809644.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1");
            }
            
            else if(weather_data.data.weather[0].main === "Snow"){

                setBackgroundImage("https://images.pexels.com/photos/772803/pexels-photo-772803.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1");
            }

            else if(weather_data.data.weather[0].main === "Mostly"){

                setBackgroundImage("https://images.pexels.com/photos/26572549/pexels-photo-26572549/free-photo-of-sea-during-sunset.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1");
            }

            else if(weather_data.data.weather[0].main === "Mist"){

                setBackgroundImage("https://images.pexels.com/photos/1261728/pexels-photo-1261728.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1");
            }

            else if(weather_data.data.weather[0].main === "Fog"){

                setBackgroundImage("https://images.pexels.com/photos/167699/pexels-photo-167699.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1");
            }

            else {
                setBackgroundImage('https://images.pexels.com/photos/9754/mountains-clouds-forest-fog.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'); // Set to an empty string or other default image
            }
            
        }
        else{
            setBackgroundImage("https://images.pexels.com/photos/9754/mountains-clouds-forest-fog.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")
        }
    },[weather_data]); // Add weather_data as a dependency
















    return (
        <div className="flex flex-col items-center justify-center min-h-screen p-6 bg-gradient-to-r from-blue-500 to-blue-700 text-white w-[100vw] max-sm: h-[auto] max-sm:p-3 max-sm:mt-[1.5rem]"
            style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
            {weather_data.loading && (
                <div className="flex flex-col items-center justify-center mt-10">
                    <Oval type="Oval" color="white" height={100} width={100} />
                </div>
            )}

            {weather_data.error && (
                <div className="flex flex-col items-center justify-center mt-10 text-red-300">
                    <FontAwesomeIcon icon={faFrown} className="text-6xl mb-4" />
                    <span className="text-2xl">City not found</span>
                </div>
            )}

            {weather_data.isactive &&  (
                <div className="bg-white bg-opacity-20 rounded-lg shadow-xl p-8 mt-10 max-w-md w-full text-center max-sm:p-4 max-sm:mt-2">
                    {weather_data.error=false}
                    <h2 className="text-3xl font-bold">
                        {weather_data.data.name}, <span>{weather_data.data.sys.country}</span>
                    </h2>
                    <div className="date text-center my-4">
                        <span className="text-gray-200">{new Date().toLocaleDateString()}</span>
                    </div>
                    <div className="icon-temp flex flex-col items-center justify-center my-4">
                        <img
                            className="w-32 h-32"
                            src={`https://openweathermap.org/img/wn/${weather_data.data.weather[0].icon}@2x.png`}
                            alt={weather_data.data.weather[0].description}
                        />
                        <span className="text-6xl font-bold">
                            {Math.round(weather_data.data.main.temp)}
                            <sup className="deg text-2xl">°C</sup>
                        </span>
                    </div>
                    <div className="des-wind text-center my-4">
                        <p className="text-xl capitalize">{weather_data.data.weather[0].description}</p>
                        <p className="text-lg">Wind Speed: {weather_data.data.wind.speed} m/s</p>
                    </div>
                </div>
            )}
        </div>
    );
}

export default DisplayWeather;
