import React, { useState } from "react";
import style from './SearchBar.module.css'

export default function SearchBar({onSearch}) {

  const [city, setCity] = useState('')

  return (

    <form onSubmit={(e) => {
      e.preventDefault();
      onSearch(city);
      setCity('')
    }}>
      <input
        type="text"
        placeholder="City..."
        value={city}
        onChange={e => setCity(e.target.value)}
        className={style.search_input}
      />
      <input type="submit" value='+' className={style.button}/>
    
    </form>
  );
  
}


