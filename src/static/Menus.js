import { GeneralSetup } from "../pages/GeneralSetup";
import { AdminSetupPage } from "../pages/AdminSetupPage";
import { DepartmentSetupPage } from "../pages/DepartmentSetupPage";
import { SubDepartmentSetupPage } from "../pages/SubDepartmentSetupPage";
import { DeviceSetupPage } from "../pages/DeviceSetupPage";

export const staticMenu = [
    {
        id:1,
        menuName: 'General Setup',
        menuDescription: 'General setups menus',
        path: '/generalSetup',
        component: GeneralSetup,
        exact: true,
        submenu: [
            {
                id:3,
                menuName: 'Admin Setup',
                menuDescription: 'To Setup admins',
                path: '/generalSetup/adminSetup',
                component: AdminSetupPage
            },
            {
                id: 4,
                menuName: 'Department Setup',
                menuDescription: 'To Setup departments',
                path: '/generalSetup/department',
                component: DepartmentSetupPage
            },
            {
                id: 5,
                menuName: 'Sub Department Setup',
                menuDescription: 'To Setup sub departments',
                path: '/generalSetup/sub-department',
                component: SubDepartmentSetupPage
            }
        ]
    },
    {
        id:2,
        menuName: 'Device Setup',
        menuDescription: 'Device mac id setup menus',
        path: '/device',
        component: DeviceSetupPage,
        exact: true,
        submenu: []
    }
];