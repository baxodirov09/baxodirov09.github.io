import React from 'react';
import './styles/loader.css'
import samuraiHead from '../assets/samurai-head-illustration_228886-49.jpg'
const Loader = () => {
    return (
        <div className='loader'>
            <img src={samuraiHead} alt=""/>
        </div>
    );
}

export default Loader;
