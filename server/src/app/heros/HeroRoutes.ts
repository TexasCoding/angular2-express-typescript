/**
 * Created on Sun Feb 01 2017
 *
 * Copyright (c) 2016 - Jeff West
 * Github URL https://github.com/jeff10278
 */

import * as express from 'express';

import HeroController from './HeroController';

const router = express.Router();

class HeroRoutes {
    private _heroController: HeroController;

    /**
     * @param  {} {this._heroController=newHeroController(
     */
    constructor() {
        this._heroController = new HeroController();
    }
    /**
     * @param  {} {constcontroller=this._heroController;router.get('/heros'
     * @param  {} controller.retrieve
     * @param  {} ;router.post('/heros'
     * @param  {} controller.create
     * @param  {_id'} ;router.put('/heros/
     * @param  {} controller.update
     * @param  {_id'} ;router.get('/heros/
     * @param  {} controller.findById
     * @param  {_id'} ;router.delete('/heros/
     * @param  {} controller.delete
     */
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
