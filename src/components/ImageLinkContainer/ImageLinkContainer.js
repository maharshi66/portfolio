import React from 'react'
import {Image} from 'react-bootstrap';
import './ImageLinkContainer.css'
const ImageLinkContainer = ({imgSrc, href, alt}) => {
    return (
            <a href={href} target='__blank'>
                <Image 
                    className='image-link h-100 w-100' 
                    fluid 
                    src={imgSrc} 
                    alt={alt}
                    thumbnail
                    />
            </a>
    )
}

export default ImageLinkContainer
