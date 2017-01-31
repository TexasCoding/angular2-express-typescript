import * as express from 'express';

import HeroController from '../controllers/HeroController';

const router = express.Router();

class HeroRoutes {

    get routes() {
        const controller = new HeroController();

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
