import React from 'react';
import Brand from '../Brand/Brand';
import NavigationItem from '../NavigationItem/NavigationItem';
import './Header.scss'

const Header = () => {
    return (
        <div className='header'>
            <Brand />
            <div className='options-container'>
                <NavigationItem label='Home'/>
                <NavigationItem label='About'/>
                <NavigationItem label='Projects'/>
                <NavigationItem label='Contact'/>
            </div>
        </div>
    )
}

export default Header;
