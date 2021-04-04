import React from 'react'
import profileImg from '../../assets/profile.jpg';
import { Image } from 'react-bootstrap';

const ProfileImage = () => {
    return (
        <Image fluid roundedCircle src={profileImg} alt='profile' />
    )
}

export default ProfileImage
