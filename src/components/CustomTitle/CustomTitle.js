import React from 'react'
import './CustomTitle.css';

const CustomTitle = ({type, title}) => {
    return (
        <h4 className={type}>
            {title}
        </h4>
    )
}

export default CustomTitle;
