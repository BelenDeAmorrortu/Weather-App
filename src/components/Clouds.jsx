import React from 'react'
import style from './Clouds.module.css'
import Cloud1 from '../img/cloud1.png'
import Cloud2 from '../img/cloud2.png'
import Cloud3 from '../img/cloud3.png'
import Cloud4 from '../img/cloud4.png'
import Cloud5 from '../img/cloud5.png'

export default function Clouds(){

    return(

        <div className={style.clouds_container}>

            <div className={style.clouds}>

                <img src={Cloud1} alt="Nube" style={{'--i':'4'}} />
                <img src={Cloud2} alt="Nube"  style={{'--i':'5'}} />
                <img src={Cloud3} alt="Nube"  style={{'--i':'3'}} />
                <img src={Cloud4} alt="Nube"  style={{'--i':'8'}} />
                <img src={Cloud5} alt="Nube"  style={{'--i':'6'}} />


            </div>
        </div>
    )
}