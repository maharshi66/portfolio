import React from 'react'
import './CustomTitle.css';

const CustomTitle = ({type, title, icon}) => {
    return (
        <div className='custom-title'>
            <h4 className={type}>
                <i className={icon}></i>
                {title}
            </h4>
        </div>
    )
}

export default CustomTitle;
