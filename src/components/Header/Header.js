import React, { useState } from 'react';
import Brand from '../Brand/Brand';
import NavigationItem from '../NavigationItem/NavigationItem';
import headerNavigationItems from '../../data/headerNavigationItems'
import CustomButton from '../CustomButton/CustomButton';
import './Header.scss'

const Header = () => {
    const [menuIconClicked, setMenuItemClicked] = useState(false);

    const handleMenuIconClick = () => {
        setMenuItemClicked(!menuIconClicked);
    }

    return (
        <div className='header my-3'>
            <Brand size='small' text='MS.' className='brand'/>
            <div className='menu-icon'>
                <i onClick={handleMenuIconClick} className={ menuIconClicked ? 'fas fa-times' : 'fas fa-bars'}>
                </i>
            </div>
            <div className={menuIconClicked ? 'options-container active' : 'options-container'}>
                {
                    headerNavigationItems.map((item, idx) => (
                        <NavigationItem 
                            onClick={handleMenuIconClick}
                            key={idx}
                            cName={item.cName} 
                            label={item.label} 
                            section={item.section}
                            logo={item.logo}
                            linkUrl={item.linkUrl} />
                    ))
                }
                <CustomButton text='Resume' />
            </div>
        </div>
    )
}

export default Header;
