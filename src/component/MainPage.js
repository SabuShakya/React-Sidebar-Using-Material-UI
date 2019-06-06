import React from 'react';
import MiniDrawerContainer from '../container/MiniDrawerContainer';
import { Routing } from './Routing';
import { useStyles } from '../static/MiniDrawerStyles';
// import AppBarComponent from './AppBarComponent';

function MainPage() {
    const classes = useStyles
    return (
        <div className={classes.root}>
            {/* <AppBarComponent /> */}
            <MiniDrawerContainer />
            <Routing />
        </div>
    );
}

export default MainPage;