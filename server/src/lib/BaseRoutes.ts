/**
 * Created on Sun Feb 01 2017
 *
 * Copyright (c) 2016 - Jeff West
 * Github URL https://github.com/jeff10278
 */

import * as express from 'express';

import HeroRoutes from './../app/heros/HeroRoutes';

import * as cors from 'cors';

const app = express();

const corsOptions = {
  origin: '*',
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
};

app.options('*', cors(corsOptions));

app.use(cors(corsOptions));

/**
 * @param  {} {app.use('/'
 * @param  {} newHeroRoutes(
 * @param  {} .routes
 */
class BaseRoutes {
    get routes() {
        app.use('/', new HeroRoutes().routes);

        return app;
    }
}

export default BaseRoutes;
