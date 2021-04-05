import React from 'react';
import './Brand.scss';

const Brand = ({size, text}) => {
    return (
        <h2 className={`brand-color text-center ${size}`}>
          {text}  
        </h2>
    )
}

export default Brand
