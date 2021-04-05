import React from 'react'
import './CustomParagraph.css';

const CustomParagraph = ({text, type}) => {
    return (
        <div 
            data-aos="zoom-out"
            data-aos-delay="800"
        >
        <p className={type}>
            {text}
        </p>
        </div>
    )
}

export default CustomParagraph;
