/**
 * Created on Sun Feb 01 2017
 *
 * Copyright (c) 2016 - Jeff West
 * Github URL https://github.com/jeff10278
 */

import HeroRepository from './HeroRepository';
import IHeroBusiness from './interfaces/HeroBusiness';
import IHeroModel from './interfaces/HeroModel';
import HeroModel from './HeroModel';

/**
 * @param  {} {this._heroRepository=newHeroRepository(
 * @param  {IHeroModel} ;}create(item
 * @param  {(error:any,result:any)=>void} callback
 */
class HeroBusiness implements IHeroBusiness {
    private _heroRepository: HeroRepository;

    /**
     * @param  {} {this._heroRepository=newHeroRepository(
     */
    constructor() {
        this._heroRepository = new HeroRepository();
    }

    /**
     * @param  {IHeroModel} item
     * @param  {(error:any,result:any)=>void} callback
     */
    create(item: IHeroModel, callback: (error: any, result: any) => void) {
        this._heroRepository.create(item, callback);
    }

    /**
     * @param  {(error:any,result:any)=>void} callback
     */
    retrieve(callback: (error: any, result: any) => void) {
        this._heroRepository.retrieve(callback);
    }

    /**
     * @param  {string} _id
     * @param  {IHeroModel} item
     * @param  {(error:any,result:any)=>void} callback
     */
    update(_id: string, item: IHeroModel, callback: (error: any, result: any) => void) {

        this._heroRepository.findById(_id, (err, res) => {
            if (err) {
                callback(err, res);
            } else {
                this._heroRepository.update(res._id, item, callback);
            }
        });
    }

    /**
     * @param  {string} _id
     * @param  {(error:any,result:any)=>void} callback
     */
    delete(_id: string, callback: (error: any, result: any) => void) {
        this._heroRepository.delete(_id, callback);
    }

    /**
     * @param  {string} _id
     * @param  {(error:any,result:IHeroModel)=>void} callback
     */
    findById(_id: string, callback: (error: any, result: IHeroModel) => void) {
        this._heroRepository.findById(_id, callback);
    }
}

/**
 * @param  {} HeroBusiness
 */
Object.seal(HeroBusiness);

export default HeroBusiness;
