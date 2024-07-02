import { Oval } from 'react-loader-spinner';
import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFrown } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';
import Displaywather from './Displaywather';

function Weather() {

    const [input, setinput] = useState('')

    const [weather, setweather] = useState({

        loding: false,
        data: {},
        error: false,
        isactive: false
    })


    const search = async (e) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            setinput('');
            setweather({ ...weather, loading: true });

            const url = 'https://api.openweathermap.org/data/2.5/weather';
            const api_key = 'f00c38e0279b7bc85480c3fe775d518c';

            await axios.get(url, { params: { q: input || "kolkata", units: 'metric', appid: api_key, } })

                .then((res) => {

                    console.log('res', res);

                    setweather({ ...weather, data: res.data, loding: false, isactive: true })
                })

                .catch((error) => {
                    setweather({ ...weather, data: {}, error: true, isactive: false });
                    setinput('');
                    console.log('error', error);
                });
        }
    };


    useEffect(() => {


        const fetchDefaultWeather = async () => {
            setweather({ ...weather, loading: true });

            const url = 'https://api.openweathermap.org/data/2.5/weather';
            const api_key = 'f00c38e0279b7bc85480c3fe775d518c';

            await axios.get(url, { params: { q: input || "kolkata", units: 'metric', appid: api_key, } })

                .then((res) => {

                    console.log('res', res);

                    setweather({ ...weather, data: res.data, loding: false, isactive: true })
                })

                .catch((error) => {
                    setweather({ ...weather, data: {}, error: true, isactive: false });
                    setinput('');
                    console.log('error', error);
                });


        };

        fetchDefaultWeather();

    }, [])




    return (
        // Ensure your HTML and body have full height


        <>

            <div className="h-[13vw] flex flex-col items-center bg-gray-800 justify-center max-sm:h-[30vw]">
                <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6 md:mb-8 text-green-600">
                    Weather App
                </h1>

                <div className="w-full max-w-xs sm:max-w-sm md:max-w-md">
                    <input
                        type="text"
                        className="w-full px-3 py-2 sm:px-4 sm:py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500"
                        placeholder="Enter City Name..."
                        name='quary'
                        value={input}
                        onChange={(e) => setinput(e.target.value)}
                        onKeyDown={search}
                    />
                </div>


            </div>

            <div className="mt-4 sm:mt-6 md:mt-8">
                <Displaywather weather_data={weather} />
            </div>

        </>

    );
}

export default Weather;
