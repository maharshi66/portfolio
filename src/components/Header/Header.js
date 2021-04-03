import React, { useState } from 'react';
import Brand from '../Brand/Brand';
import NavigationItem from '../NavigationItem/NavigationItem';
import navigationItems from '../../navigationItems'
import './Header.scss'

const Header = () => {
    const [menuIconClicked, setMenuItemClicked] = useState(false);

    const handleMenuIconClick = () => {
        setMenuItemClicked(!menuIconClicked);
    }

    return (
        <div className='header'>
            <Brand className='brand'/>
            <div className='menu-icon'>
                <i onClick={handleMenuIconClick} className={ menuIconClicked ? 'fas fa-times' : 'fas fa-bars'}>
                </i>
            </div>
            <div className={menuIconClicked ? 'options-container active' : 'options-container'}>
                {
                    navigationItems.map((item, idx) => (
                        <NavigationItem 
                            className='navigation-item' 
                            key={idx} 
                            label={item.label} 
                            section={item.section} />
                    ))
                }
            </div>
        </div>
    )
}

export default Header;
