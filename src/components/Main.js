import React from 'react'

export default function Main(props) {
    const {data, units}=props;

    const setDesc = (temp) => {
        const prefix = "container bg-";
        console.log(typeof(temp));
        console.log(temp);
        switch(true){
            case (temp>=200 && temp<=232) : return prefix+'ts';
            case (temp>=300 && temp<=321) : return prefix+'dr';
            case (temp>=500 && temp<=531) : return prefix+'rr';
            case (temp>=600 && temp<=622) : return prefix+'sn';
            case (temp>=700 && temp<=781) : return prefix+'ms';
            case (temp===800) : return prefix+'cs';
            case (temp>800 && temp<=804): return prefix+'fc';
            default : return 'no range';
        }
    }
    
    
  return (
    <div className={data.weather? setDesc(data.weather[0].id) : null}>
        <div className="top">
            <div className="location">
                <p>{data.name}</p>
            </div>

            <div className="temp">
                <p>{data.main ? <h1>{units==='imperial' ? ((data.main.temp-273.15)*1.8 + 32).toFixed() : units==="standard" ? data.main.temp.toFixed() : units==='metric' ? (data.main.temp-273.15).toFixed() : data.main.temp.toFixed() }{units==='imperial' ? '°F' : units==="standard" ? 'K' : units==='metric' ? '°C' : 'K'}</h1> : null}</p>
            </div>

            <div className="description">
                <p>{data.weather ? <p>{data.weather[0].main}</p> : null}</p>
            </div>

        </div>

        {data.name !== undefined &&
          <div className="bottom">
            <div className="feels">
              {data.main ? <p className='bold'>{data.main.feels_like.toFixed()}°F</p> : null}
              <p>Feels Like</p>
            </div>
            <div className="humidity">
              {data.main ? <p className='bold'>{data.main.humidity}%</p> : null}
              <p>Humidity</p>
            </div>
            <div className="wind">
              {data.wind ? <p className='bold'>{data.wind.speed.toFixed()} MPH</p> : null}
              <p>Wind Speed</p>
            </div>
          </div>
        }
    </div>
  )
}
