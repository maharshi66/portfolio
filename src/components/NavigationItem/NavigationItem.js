import React from 'react'
import './NavigationItem.scss';

const NavigationItem = ({label, section, logo, linkUrl}) => {
    return (
        <>
        {
            logo ? 
            <a href={`${linkUrl}`}  target="_blank" rel="noreferrer">
                <i className={logo}></i>
            </a>
            :
            <a href={`#${section}`}>
                {label} 
            </a>
        }
        </>
    )
}

export default NavigationItem
