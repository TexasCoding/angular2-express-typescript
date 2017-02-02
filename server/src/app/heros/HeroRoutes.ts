import * as express from 'express';

import HeroController from './HeroController';

const router = express.Router();

class HeroRoutes {
    private _heroController: HeroController;

    constructor() {
        this._heroController = new HeroController();
    }

    get routes() {
        const controller = this._heroController;

        router.get('/heros', controller.retrieve);
        router.post('/heros', controller.create);
        router.put('/heros/:_id', controller.update);
        router.get('/heros/:_id', controller.findById);
        router.delete('/heros/:_id', controller.delete);

        return router;
    }
}

Object.seal(HeroRoutes);

export default HeroRoutes;
