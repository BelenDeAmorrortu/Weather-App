import React from "react";
import style from './City.module.css'
import {Link} from 'react-router-dom'


export default function City({city}) {

    return (

        <div className={style.city}>

            <div className={style.city_card}>

                <div className={style.go_back}>
                    <Link to="/">
                     <button className={style.button}>{"<"}</button>
                    </Link>
                </div>

                <div className={style.city_and_img}>

                    <h3>{city.name}</h3>

                    <img src={`http://openweathermap.org/img/wn/${city.img}@2x.png`} alt="Imagen descriptiva clima" />

                </div>

                <div className={style.info}>

                    <div>Temperature: {city.temp} ºC</div>
                    <div>Weather: {city.weather}</div>
                    <div>Wind: {city.wind} km/h</div>
                    <div>Amount of clouds: {city.clouds}</div>
                    <div>Latitude: {city.latitud}º</div>
                    <div>Longitude: {city.longitud}º</div>

                    
                </div>

            </div>

        </div>

    )
}