import React, { useEffect, useState } from 'react';

import './App.css';
import Nav from '../components/Nav.jsx';
import Cards from '../components/Cards.jsx';
import City from '../components/City.jsx';
import Clouds from '../components/Clouds.jsx';
import ReactSwitch from 'react-switch'
import { Route } from 'react-router-dom';

function App() {

  const [cities, setCities] = useState([])

  function onSearch(city){

    const apiKey = '4ae2636d8dfbdc3044bede63951a019b'

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`)

    .then(response => response.json())
    .then(json => {

      if(json.main){

        const city = {

          min: Math.round(json.main.temp_min),
          max: Math.round(json.main.temp_max),
          img: json.weather[0].icon,
          id: json.id,
          wind: json.wind.speed,
          temp: json.main.temp,
          name: json.name,
          weather: json.weather[0].main,
          clouds: json.clouds.all,
          latitud: json.coord.lat,
          longitud: json.coord.lon
        }

        setCities(oldCities => [...oldCities, city])

      }

      else alert('No se encontró la ciudad')

    })

  }

  function onClose(id){

    setCities(oldCities => oldCities.filter( city => city.id !== id))
    
  }

  function onFilter(cityId) {

    let city = cities.filter((c) => c.id === parseInt(cityId));

    if(city.length > 0){

      return city[0];

    }
    else return null
  }

  const [mode, setMode] = useState('light')

  const switchMode = ()=>{

    setMode((current) => (current === 'dark' ? 'light' : 'dark'))

  }

  // useEffect(()=>{

  //   if(mode === 'light'){

  //     document.body.style.backgroundImage = "url(../img/cloud-on-sky-background-at-twilight-times-vintage-filter-processing-style-free-photo.jpg)"
  //   }

  //   else document.body.style.backgroundImage = "url(../img/pexels-photo-4737484\ -\ copia (2).jpeg)"


  // }, [mode])

  let moon = <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" version="1.0"><path fill="#010101" d="M15.072 17.27a.344.344 0 0 1-.168-.043l-2.98-1.635-3.034 1.555a.35.35 0 0 1-.503-.378l.645-3.353-2.417-2.414a.347.347 0 0 1 .199-.593l3.386-.456 1.53-3.031c.06-.119.181-.21.316-.192a.35.35 0 0 1 .312.199l1.478 3.086 3.36.537a.349.349 0 0 1 .278.243.347.347 0 0 1-.094.357l-2.473 2.334.494 3.276a.346.346 0 0 1 .037.157c0 .196-.176.346-.358.35l-.008.001zm-3.142-2.425c.058 0 .116.015.168.043l2.523 1.384-.432-2.863a.35.35 0 0 1 .105-.307l2.089-1.972-2.84-.453a.35.35 0 0 1-.26-.195l-1.25-2.61-1.292 2.56a.348.348 0 0 1-.266.189l-2.867.386 2.048 2.045c.082.082.118.2.097.313l-.544 2.83 2.56-1.313a.38.38 0 0 1 .161-.037z"/></svg>
  let sun = <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" version="1.0"><path fill="#010101" d="M12 15.517c-2.004 0-3.635-1.641-3.635-3.659A3.636 3.636 0 0 1 12 8.229c2.02 0 3.663 1.628 3.663 3.629A3.665 3.665 0 0 1 12 15.517zm0-6.588a2.935 2.935 0 0 0-2.935 2.929c0 1.631 1.316 2.958 2.935 2.958a2.964 2.964 0 0 0 2.962-2.958c0-1.615-1.329-2.929-2.962-2.929zm0-1.725a.35.35 0 0 1-.35-.35V5.553a.35.35 0 0 1 .7 0v1.301a.35.35 0 0 1-.35.35zm0 11.593a.35.35 0 0 1-.35-.35v-1.301a.35.35 0 0 1 .7 0v1.301a.35.35 0 0 1-.35.35zm6.457-6.447h-1.275a.35.35 0 0 1 0-.7h1.275a.35.35 0 0 1 0 .7zm-11.611 0H5.543a.35.35 0 0 1 0-.7h1.303a.35.35 0 0 1 0 .7zm9.742 4.553a.347.347 0 0 1-.243-.099l-.936-.905a.35.35 0 1 1 .487-.503l.936.905a.35.35 0 0 1-.244.602zm-8.213-8.2a.35.35 0 0 1-.244-.099l-.933-.905a.35.35 0 0 1 .487-.503l.934.905a.35.35 0 0 1-.244.602zm-.934 8.2a.35.35 0 0 1-.243-.601l.934-.905a.35.35 0 0 1 .487.503l-.934.905a.353.353 0 0 1-.244.098zm8.211-8.2a.35.35 0 0 1-.243-.602l.936-.905a.35.35 0 0 1 .487.503l-.936.905a.35.35 0 0 1-.244.099z"/></svg>

  return (

    <div className={`App ${mode}`}>

      <Nav onSearch={onSearch}/>

      <Clouds />

      <div className='switch'>

        <ReactSwitch onChange={switchMode} checked={mode === 'light'} checkedIcon={sun} uncheckedIcon={moon} onColor="#faedcd" />
        <h6 style={mode === 'dark' ? {color: '#fff'} : {color: '#000'}}>{mode === 'dark' ? 'Night' : 'Day'}</h6>
        
      </div>
        
      <Route exact path='/' render={()=> <Cards cities={cities} onClose={onClose} /> } />
            
      <Route exact path='/city/:cityId' render={({match})=> <City city={onFilter(match.params.cityId)} /> } />
        

    </div>

  );
  
}

export default App;