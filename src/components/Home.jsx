import React, { useState } from 'react'
import axios from "axios"

const Home = () => {
    const[data,setData]=useState({})
    const[location,setLocation]=useState("")
const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=3447d8ad162fd8d8fd8a03c1554bf530`

function searchLocation(e){
    if(e.key==="Enter"){
        axios.get(url).then((response)=>{
            setData(response.data)
            console.log(response.data)
        })
        setLocation("")
    }
}
function handleChange(e){
    setLocation(e.target.value)
}
  return (
    <div className='app'>
         <div className='search'>
             <input placeholder='Enter Location' onKeyPress={searchLocation} onChange={(e)=>handleChange(e)} value={location} type="text" />
         </div>
        <div className="container">
            <div className="top">
            <div className="location">
                    {data.name?<p>{data.name}</p>:null}
                </div>
                <div className="temp">
                   {data.main? <h1>{data.main.temp} °F</h1>:null}
                </div>
                <div className="description">
                   {data.weather? <p>{data.weather[0].main}</p>:null}
                </div>
            </div>
            <div className="bottom">
            <div className="feels">
                {data.main?<p className='bold'>{data.main.feels_like}°F</p>:null}
                <p>Feels Like</p>
            </div>
            <div className='humidity'>
               <p className='bold'>{}</p>
              {data.main? <p>{data.main.humidity}%</p>:null}
              <p>Humidity</p>
            </div>
             <div className="wind">
               {data.wind? <p className='bold'>{data.wind.speed} MPH</p>:null}
                <p>Wind Speed</p>
             </div>
            </div>
        </div>
    </div>
  )
}

export default Home