import React from 'react'
import {Figure} from 'react-bootstrap';
import './ImageLinkContainer.css'

const ImageLinkContainer = ({imgSrc, href, alt, width, height}) => {
    return (
            <a href={href} target='__blank'>
                <Figure.Image
                    fluid
                    width={`${width}`}
                    height={`${height}`}
                    className='image-link' 
                    src={imgSrc} 
                    alt={alt}
                />
            </a>
    )
}

export default ImageLinkContainer
