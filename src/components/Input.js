import React, { useState } from 'react';
import axios from 'axios';
import Main from './Main';
export default function Input() {
    const [data, setData] =useState({});
    const [location, setLocation]=useState('');

    const [latitude, setLatitude] = useState(0);
    const [longitude, setLongitude] = useState(0);

    const [units, setUnits] =useState('standard');

    const toCelsius = () => {
        setUnits('metric');
    }

    const toFarhen = () => {
        setUnits('imperial');
    }

    const toKelvin = () => {
        setUnits('standard');
    }

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=c58bd17419a332abc1cc348501bd1789&units=standard`

    const searchLocation = (event) => {
        if (event.key === 'Enter') {
        axios.get(url).then((response) => {
            setData(response.data)
            console.log(response.data)
        })
        setLocation('')
        }
    }

    const savePositionToState = (position) => {
        setLatitude(position.coords.latitude);
        setLongitude(position.coords.longitude);
    };
    const url2 = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=c58bd17419a332abc1cc348501bd1789&units=standard`
    const fetchWeather = () => {
        window.navigator.geolocation.getCurrentPosition(
            savePositionToState
        );
        axios.get(url2).then((response) => {
            setData(response.data)
            console.log(response.data)
        })
        


    }

    return (
        <div className="search">
                <button type="button" className="temp-btn btn btn-primary" onClick={toCelsius}  >Celsius</button>
                <button type="button" className="temp-btn btn btn-secondary" onClick={toFarhen}>Farheniet</button>
                <button type="button" className="temp-btn btn btn-success" onClick={toKelvin}>Kelvin</button>
            
            <input
            value={location}
            onChange={event => setLocation(event.target.value)}
            onKeyPress={searchLocation}
            placeholder='Enter Location'
            type="text" className='inp'/>
            <button onClick={fetchWeather} className="btn btn-danger">Use Current Location</button>

            

            <Main data={data}  units={units}/>
        
        </div>
    )
}
