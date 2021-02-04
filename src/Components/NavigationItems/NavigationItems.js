import React from 'react';
import NavigationItem from '../NavigationItem/NavigationItem';
import classes from './NavigationItems.module.css';

const NavigationItems = () => {
    return (
        <div className={classes.NavigationItems}>
            <NavigationItem />
        </div>
        
    )
}

export default NavigationItems;