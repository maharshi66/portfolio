import React from 'react'
import './NavigationItem.scss';

const NavigationItem = ({label, section, logo,cName, linkUrl, onClick}) => {
    return (
        <div>
        {
            logo ? 
            <a className={cName} href={`${linkUrl}`}  target="_blank" rel="noreferrer">
                <i className={logo}></i>
            </a>
            :
            <a className={cName} onClick={onClick} href={`#${section}`}>
                {label} 
            </a>
        }
        </div>
    )
}

export default NavigationItem
