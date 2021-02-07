import React,{useState} from 'react'
import Header from './Header'

import axios from 'axios'
import Content from './Content';
import WeatherSearch from './WeatherSearch';
import WeatherData from './WeatherData';

import Context from '../Context';
import Error from './Error';
import DateTime from './DateTime';
import Tagline from './Tagline';
import Footer from './Footer';

export default function Main() {
   
    const [weather, setWeather] = useState()
    const [city, setCity] = useState()
    const [error, setError] = useState(false)
   
    const api_call = async e =>{
        e.preventDefault();

        const location = e.target.elements.location.value;

        if (!location) {
            return setError("No location!"),setWeather(null);
        }

        const API_KEY = `415b5796441463a86b2c594d8fbcc86b`;

        const URL = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${API_KEY}&units=metric`
       

       const request = axios.get(URL);
       const response = await request;

       setWeather(response.data.main);
       setCity(response.data.name);
       setError(null);
    }

  

    return (
        <div className="main">
           <Header/>           
           <Content>
           <Tagline/>
               <DateTime/>
               <Context.Provider value={{api_call, weather, city}}>
                <WeatherSearch />
                {weather && <WeatherData/>}
                {error && <Error error={error}/>}
               </Context.Provider>
           </Content>
          <Footer/>
        </div>
    )
}
