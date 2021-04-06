import React from 'react'
import {Image} from 'react-bootstrap';

const ImageLinkContainer = ({imgSrc, href, alt}) => {
    return (
        <div>
            <a href={href} target='__blank'>
                <Image src={imgSrc} alt={alt} />
            </a>
        </div>
    )
}

export default ImageLinkContainer
