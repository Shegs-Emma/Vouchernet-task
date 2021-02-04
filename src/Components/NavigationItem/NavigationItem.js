import React from 'react';
import logo from '../../img/vouchernet_logo.JPG';
import classes from './NavigationItem.module.css';

const NavigationItem = () => (
    <div className={classes.NavigationItem}>
        <div className={classes.LogoSide}>
            <img src={logo} alt="vouchernet_logo" />
        </div>
        <div className={classes.RightNav}>
            <div>
                Home
            </div>
            <div>
                How It Works
            </div>
            <div>
                Services
            </div>
            <div>
                Blog
            </div>
            <div>
                About Us
            </div>
            <div>
                Contact Us
            </div>
            <div className={classes.Client}>
                Clients Login
            </div>
        </div>
    </div>
)

export default NavigationItem;