import React from "react";
import { NavLink } from "react-router-dom";
import withBreadcrumbs from "react-router-breadcrumbs-hoc";
import {staticMenu} from '../static/Menus';


/**
 * This component is wrapped in withBreadcrumbs which automatically
 * generates breadcrumbs based on the current route.
 *
 * If you need custom or dynamic breadcrumbs. Check out the Readme here:
 * https://github.com/icd2k3/react-router-breadcrumbs-hoc#dynamic-breadcrumbs
 */
// const Breadcrumbs = withBreadcrumbs()(({ breadcrumbs }) => (
//     <React.Fragment>
//         {breadcrumbs.map(({ breadcrumb }) => breadcrumb)}
//     </React.Fragment>
// ));

const Breadcrumbs = withBreadcrumbs(staticMenu)(({ breadcrumbs }) => (
    <div>
        {breadcrumbs.map(({ match, breadcrumb }) => (
            // other props are available during render, such as `location`
            // and any props found in your route objects will be passed through too
            <span key={match.url} >
                <NavLink to={match.url}>/{breadcrumb}</NavLink>
            </span>
        ))}
    </div>
));

export default Breadcrumbs;