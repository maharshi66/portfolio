import React from 'react'
import './NavigationItem.scss';

const NavigationItem = ({label, section, logo, linkUrl, onClick}) => {
    return (
        <div>
        {
            logo ? 
            <a href={`${linkUrl}`}  target="_blank" rel="noreferrer">
                <i className={logo}></i>
            </a>
            :
            <a onClick={onClick} href={`#${section}`}>
                {label} 
            </a>
        }
        </div>
    )
}

export default NavigationItem
