/**
 * Created on Sun Feb 01 2017
 *
 * Copyright (c) 2016 - Jeff West
 * Github URL https://github.com/jeff10278
 */

import * as express from 'express';

import HeroBusiness from './HeroBusiness';
import IBaseController from './../../lib/controllers/BaseController';
import IHeroModel from './interfaces/HeroModel';

/**
 * @param  {express.Request} req
 * @param  {express.Response} res
 */
class HeroController implements IBaseController<HeroBusiness> {

    /**
     * @param  {express.Request} req
     * @param  {express.Response} res
     */
    create(req: express.Request, res: express.Response): void {
        try {

            const hero: IHeroModel = <IHeroModel>req.body;
            const heroBusiness = new HeroBusiness();
            heroBusiness.create(hero, (error, result) => {
                if (error) {
                    res.send({ 'error': error });
                } else {
                    res.send({ 'success': 'success' });
                }
            });

        } catch (e) {
            console.log(e);
            res.send({ 'error': 'error in your request' });

        }
    }

    /**
     * @param  {express.Request} req
     * @param  {express.Response} res
     */
    update(req: express.Request, res: express.Response): void {
        try {
            const hero: IHeroModel = <IHeroModel>req.body;
            const _id: string = req.params._id;
            const heroBusiness = new HeroBusiness();
            heroBusiness.update(_id, hero, (error, result) => {
                if (error) {
                    res.send({ 'error': error });

                } else {
                    res.send({ 'success': 'success' });
                }
            });
        } catch (e) {
            console.log(e);
            res.send({ 'error': 'error in your request' });

        }
    }

    /**
     * @param  {express.Request} req
     * @param  {express.Response} res
     */
    delete(req: express.Request, res: express.Response): void {
        try {

            const _id: string = req.params._id;
            const heroBusiness = new HeroBusiness();
            heroBusiness.delete(_id, (error, result) => {
                if (error) {
                    res.send({ 'error': error });
                } else {
                    res.send({ 'success': 'success' });
                }
            });

        } catch (e) {
            console.log(e);
            res.send({ 'error': 'error in your request' });

        }
    }

    /**
     * @param  {express.Request} req
     * @param  {express.Response} res
     */
    retrieve(req: express.Request, res: express.Response): void {
        try {

            const heroBusiness = new HeroBusiness();
            heroBusiness.retrieve((error, result) => {
                if (error) {
                    res.send({ 'error': error });
                } else {
                    res.send(result);
                }
            });
        } catch (e) {
            console.log(e);
            res.send({ 'error': 'error in your request' });

        }
    }

    /**
     * @param  {express.Request} req
     * @param  {express.Response} res
     */
    findById(req: express.Request, res: express.Response): void {
        try {

            const _id: string = req.params._id;
            const heroBusiness = new HeroBusiness();
            heroBusiness.findById(_id, (error, result) => {
                if (error) {
                    res.send({ 'error': error });
                } else {
                    res.send(result);
                }
            });
        } catch (e) {
            console.log(e);
            res.send({ 'error': 'error in your request' });

        }
    }
}

export default HeroController;
