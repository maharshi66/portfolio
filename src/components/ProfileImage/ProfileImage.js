import React from 'react'
import profileImg from '../../assets/profile.jpg';
import { Image } from 'react-bootstrap';

const ProfileImage = () => {
    return (
        <div
        data-aos="flip-left"
        data-aos-delay="800">
        <Image fluid roundedCircle src={profileImg} alt='profile' />
        </div>
    )
}

export default ProfileImage
