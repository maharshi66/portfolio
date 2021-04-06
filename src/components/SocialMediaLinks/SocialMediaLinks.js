import React from 'react'
import NavigationItem from '../NavigationItem/NavigationItem';
import homeNavigationItems from '../../data/homeNavigationItems'
import './SocialMediaLinks.css';

const SocialMediaLinks = ({cName}) => {
    return (
        <div className={cName}>
            {homeNavigationItems.map((item, idx) => (
                <NavigationItem 
                    key={idx} 
                    label={item.label} 
                    cName={item.cName}
                    section={item.section}
                    logo={item.logo}
                    linkUrl={item.linkUrl} />
            ))
            }
        </div>
    )
}

export default SocialMediaLinks
