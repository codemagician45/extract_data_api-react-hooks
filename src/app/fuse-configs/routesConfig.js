import React from 'react';
import {Redirect} from 'react-router-dom';
import {FuseUtils} from '@fuse';
// import {ExampleConfig} from 'app/main/example/ExampleConfig';
import {appsConfigs} from 'app/main/apps/appsConfigs';

const routeConfigs = [
    ...appsConfigs
];

const routes = [
    ...FuseUtils.generateRoutesFromConfigs(routeConfigs),
    {
        path     : '/',
        component: () => <Redirect to="/apps/e-commerce/products"/>
    }
];

export default routes;
