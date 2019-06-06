import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Home } from '../pages/Home';
import { GeneralSetup } from '../pages/GeneralSetup';
import { AdminSetupPage } from '../pages/AdminSetupPage';
import { DepartmentSetupPage } from '../pages/DepartmentSetupPage';
import { SubDepartmentSetupPage } from '../pages/SubDepartmentSetupPage';
import { DeviceSetupPage } from '../pages/DeviceSetupPage';
import { useStyles } from '../static/MiniDrawerStyles';


export const Routing = () => {
    const { content } = useStyles();
    // // const [open] = React.useState(false);
    return (
        <main className={content}>
            <Switch>
                <Route exact path='/' component={Home} />
                <Route path='/generalSetup' exact component={GeneralSetup} />
                <Route path='/generalSetup/adminSetup' component={AdminSetupPage} />
                <Route path='/generalSetup/department' component={DepartmentSetupPage} />
                <Route path='/generalSetup/sub-department' component={SubDepartmentSetupPage} />
                <Route path='/device' component={DeviceSetupPage} />
            </Switch>
        </main>);
}