import React from 'react'
import NavigationItem from '../NavigationItem/NavigationItem';
import homeNavigationItems from '../../homeNavigationItems'

const SocialMediaLinks = () => {
    return (
        <>
            {homeNavigationItems.map((item, idx) => (
                <NavigationItem 
                    key={idx} 
                    label={item.label} 
                    section={item.section}
                    logo={item.logo}
                    linkUrl={item.linkUrl} />
            ))
            }
        </>
    )
}

export default SocialMediaLinks
