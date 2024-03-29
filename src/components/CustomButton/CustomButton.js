import React from 'react'
import './CustomButton.scss';

const CustomButton = ({handleClick, icon, text,isResume, isAnchor, href}) => {
    return (        
        <>{
            !isAnchor ? 
                <button 
                    onClick={handleClick}
                    className='btn 
                    border-gradient 
                    border-gradient-color btn--border'>
                    {text}
                    <i className={icon}></i>
                </button>
                :
                isResume ?
                    <a href={href} target="_blank" rel="noreferrer">
                    <button 
                        onClick={handleClick} 
                        className='btn 
                        border-gradient 
                        border-gradient-color btn--border'>
                        {text}
                        <i className={icon}></i>
                        </button>
                    </a>
                : 
                <a href={href}>
                <button 
                    onClick={handleClick} 
                    className='btn 
                    border-gradient 
                    border-gradient-color btn--border'>
                    {text}
                    <i className={icon}></i>
                    </button>
                </a>
        }

        </>
    )
}

export default CustomButton
