import React from 'react'
import {Image} from 'react-bootstrap';
import './ImageLinkContainer.css'
const ImageLinkContainer = ({imgSrc, href, alt}) => {
    return (
            <a  href={href} target='__blank'>
                <Image 
                    className='image-link' 
                    fluid 
                    src={imgSrc} 
                    alt={alt}
                    thumbnail
                    />
            </a>
    )
}

export default ImageLinkContainer
