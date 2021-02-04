import React from 'react';
import NavigationItems from '../../Components/NavigationItems/NavigationItems';

const Layout = (props) => {
    return (
        <React.Fragment>
            <div>
                <NavigationItems />
            </div>
            <div>
                {props.children}
            </div>
        </React.Fragment>
    )
}

export default Layout;