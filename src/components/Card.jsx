import React from 'react';
import style from './Card.module.css';
import {NavLink} from 'react-router-dom'

export default function Card ({min, max, name, img, onClose, id}) {
  
  return (

    <div className={`${style.flex_column} ${style.card_container}`}>

      <button onClick={onClose} className={style.button} >X</button>

      <NavLink to={`/city/${id}`} className='selected'>  <h3>{name}</h3> </NavLink>
    
      <div className={style.flex_row}>

        <div className={style.flex_column}>
          <h5>Min</h5>
          <h6>{min}°</h6>
        </div>
          
        <div className={style.flex_column}>
          <h5>Max</h5>
          <h6>{max}°</h6>
        </div>

        <div>
          
          <img src={`http://openweathermap.org/img/wn/${img}@2x.png`} alt="Imagen descriptiva clima" />
          
        </div>

      </div>

    </div>

  );
};
