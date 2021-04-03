import React from 'react'
import './NavigationItem.scss';

const NavigationItem = ({label, section, logo}) => {
    return (
        <a href={`#${section}`} className='navigation-item'>
           {label} 
        </a>
    )
}

export default NavigationItem
