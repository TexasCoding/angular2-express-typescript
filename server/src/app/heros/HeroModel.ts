/**
 * Created on Sun Feb 01 2017
 *
 * Copyright (c) 2016 - Jeff West
 * Github URL https://github.com/jeff10278
 */

import IHeroModel from './interfaces/HeroModel';

/**
 * @param  {IHeroModel} heroModel
 * @returns number
 */
class HeroModel {

    private _heroModel: IHeroModel;

    /**
     * @param  {IHeroModel} heroModel
     */
    constructor(heroModel: IHeroModel) {
        this._heroModel = heroModel;
    }

    /**
     * @returns string
     */
    get name(): string {
        return this._heroModel.name;
    }

    /**
     * @returns string
     */
    get power(): string {
        return this._heroModel.power;
    }

    /**
     * @returns number
     */
    get amountPeopleSaved(): number {
        return this._heroModel.amountPeopleSaved;
    }
}

/**
 * @param  {} HeroModel
 */
Object.seal(HeroModel);
export default HeroModel;
