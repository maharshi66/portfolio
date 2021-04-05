import React from 'react'
import './CustomButton.css';

const CustomButton = ({handleClick}) => {
    return (
        <button onClick={handleClick} className='btn 
            border-gradient 
            border-gradient-color'>
            Resume
        </button>
    )
}

export default CustomButton
