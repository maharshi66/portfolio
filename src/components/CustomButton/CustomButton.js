import React from 'react'
import './CustomButton.css';

const CustomButton = ({handleClick, icon, text, isAnchor, href}) => {
    return (        
        <>{
            !isAnchor ? 
                <button 
                    onClick={handleClick} 
                    className='btn 
                    border-gradient 
                    border-gradient-color'>
                    {text}
                    <i className={icon}></i>
                </button>
                : 
                <a href={href}>
                <button 
                    onClick={handleClick} 
                    className='btn 
                    border-gradient 
                    border-gradient-color'>
                    {text}
                    <i className={icon}></i>
                    </button>
                </a>
        }

        </>
    )
}

export default CustomButton
