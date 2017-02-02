import * as express from 'express';

import HeroRoutes from './../app/heros/HeroRoutes';

const app = express();

class BaseRoutes {
    get routes() {
        app.use('/', new HeroRoutes().routes);

        return app;
    }
}

export default BaseRoutes;
