import React from 'react'
import profileImg from '../../assets/profile.jpg';
import { Image } from 'react-bootstrap';
import './ProfileImage.scss'; 

const ProfileImage = () => {
    return (
        <div className='profile-image'
            data-aos="fade-right"
            data-aos-delay="800">
            <Image fluid roundedCircle src={profileImg} alt='profile' />
        </div>
    )
}

export default ProfileImage
