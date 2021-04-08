import React from 'react'
import Footer from '../../components/Footer/Footer';
import SocialMediaLinks from '../../components/SocialMediaLinks/SocialMediaLinks';
import './FooterSection.css';

const FooterSection = () => {
    return (
        <div className='mt-5'>
        <SocialMediaLinks cName='footer-links' />
        <div className='footer-copyright'>
            <Footer />
        </div>
        </div>
    )
}

export default FooterSection
