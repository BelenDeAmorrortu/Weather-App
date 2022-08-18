import React from 'react';
import Logo from '../img/Logo Henry Blanco.png';
import SearchBar from './SearchBar.jsx';
import style from './Nav.module.css';
import { NavLink } from 'react-router-dom';

function Nav({onSearch}) {

  return (

    <div className={style.nav_container}>

      <NavLink className={style.nav_link} to='/'>

        <div className={style.flex_row}>
          <img className={style.logoHenry} src={Logo} alt ='Logo Henry'/>
          <h5>Weather App</h5>
        </div>

      </NavLink>

      {/* <NavLink to='/about'  className='nav_link' >
        <h5>About</h5>
      </NavLink> */}

      <div className={style.searchBar}>

        <SearchBar onSearch={onSearch} />

      </div>
      
    </div>
  );

};

export default Nav;
