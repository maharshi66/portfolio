import React from 'react'
import './CustomParagraph.css';

const CustomParagraph = ({text, type, children}) => {
    return (
        <div 
            data-aos="fade-right"
            data-aos-delay="800"
        >
        <p className={type}>
            {text}
        </p>
        {children}
        </div>
    )
}

export default CustomParagraph;
