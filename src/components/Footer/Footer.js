import React from 'react'
import './Footer.css';
import CustomTitle from '../CustomTitle/CustomTitle';   

const Footer = () => {
    return (
        <div className='footer'>
            <CustomTitle 
                type={'subtitle'} 
                title=' Designed and built by Maharshi Shah'
                icon='fab fa-react rotate'  />
        </div>
    )
}

export default Footer
