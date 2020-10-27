import React from "react";
import preLoaderImg from '../../../preloader.svg'
import s from './preloader.module.css'

let Preloader = () => {
    return (
        <div className={s.preloader__container}>
            <img className={s.preloader} src={preLoaderImg}  />
        </div>
    )
}

export default Preloader;