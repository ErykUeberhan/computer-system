import React, { useState } from 'react'
import './Weather.sass'
import { IoSunnySharp, IoPartlySunnySharp, IoCloudySharp, IoRainySharp, IoThunderstormSharp, IoSnowSharp, IoThermometerSharp } from 'react-icons/io5';
import { RiMistFill } from 'react-icons/ri';

function Weather() {
    enum Icons {
        ClearDay = '01d',
        PartlySunnyDay = '02d',
        CloudyDay = '03d',
        FogDay = '04d',
        DrizzleDay = '09d',
        RainDay = '10d',
        ThunderstormDay = '11d',
        SnowDay = '13d',
        MistDay = '50d',

        ClearNight = '01n',
        PartlySunnyNight = '02n',
        CloudyNight = '03n',
        FogNight = '04n',
        DrizzleNight = '09n',
        RainNight = '10n',
        ThunderstormNight = '11n',
        SnowNight = '13n',
        MistNight = '50n',
    }

    const IconChecker = (iconId: string): any => {
        switch (iconId) {
            case Icons.ClearDay:
                return <IoSunnySharp />;
            case Icons.PartlySunnyDay:
                return <IoPartlySunnySharp />;
            case Icons.CloudyDay:
                return <IoCloudySharp />;
            case Icons.FogDay:
                return <IoCloudySharp />;
            case Icons.DrizzleDay:
                return <IoRainySharp />;
            case Icons.RainDay:
                return <IoRainySharp />;
            case Icons.ThunderstormDay:
                return <IoThunderstormSharp />;
            case Icons.SnowDay:
                return <IoSnowSharp />;
            case Icons.MistDay:
                return <RiMistFill />;

            case Icons.ClearNight:
                return <IoSunnySharp />;
            case Icons.PartlySunnyNight:
                return <IoPartlySunnySharp />;
            case Icons.CloudyNight:
                return <IoCloudySharp />;
            case Icons.FogNight:
                return <IoCloudySharp />;
            case Icons.DrizzleNight:
                return <IoRainySharp />;
            case Icons.RainNight:
                return <IoRainySharp />;
            case Icons.ThunderstormNight:
                return <IoThunderstormSharp />;
            case Icons.SnowNight:
                return <IoSnowSharp />;
            case Icons.MistNight:
                return <RiMistFill />;
            default:
                return 'aaaaaaaaaaaaaaaa';
        }
    }

    const [temp, setTemp] = useState(0);
    const [description, setDescription] = useState('');
    const [icon, setIcon] = useState('');

    const key: string = "ef5b7ec63216009ee88d661f0ad92943"
    const kelvin: number = 273;

    if ('geolocation' in navigator) {
        navigator.geolocation.getCurrentPosition(setPosition, showError);
    } else {
        alert('Browser doesnt support geolocation');
    }

    function setPosition(position: any): any {
        let latitude = position.coords.latitude
        let longitude = position.coords.longitude

        getWeather(latitude, longitude);
    }

    function showError() {
        alert('error');
    }

    function getWeather(latitude: number, longitude: number): any {
        let api = `http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${key}`;

        fetch(api)
            .then(function (response) {
                let data = response.json();
                return data;
            })
            .then(function (data) {
                setTemp(Math.floor(data.main.temp - kelvin));
                setDescription(data.weather[0].description);
                setIcon(data.weather[0].icon);
            })
    }



    return (
        <div className='weather'>
            <div className='weather-icon'>
                {IconChecker(icon)}
            </div>
            <div className='weather-info'>
                <div className='weather-info-temp'>{temp}°C<IoThermometerSharp /></div>
                <div className='weather-info-desc'>{description}</div>
            </div>
        </div>
    )
}

export default Weather
