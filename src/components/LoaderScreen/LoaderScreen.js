import React from 'react';
import './LoaderScreen.scss';

const LoaderScreen = ({imgPath, msg}) => {

    return msg && <div className='wrapper'>
        <img src={imgPath}/>
        <div className='message'>{msg}</div>
    </div>;
}

export default LoaderScreen;