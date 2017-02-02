/**
 * Created on Sun Feb 01 2017
 *
 * Copyright (c) 2016 - Jeff West
 * Github URL https://github.com/jeff10278
 */

import HeroModel from './HeroModel';
import IHeroModel from './interfaces/HeroModel';
import HeroSchema from './HeroSchema';
import RepositoryBase from './../../lib/repositories/BaseRepository';

/**
 * @param  {} {super(HeroSchema
 */
class HeroRepository extends RepositoryBase<IHeroModel> {
    
    /**
     * @param  {} {super(HeroSchema
     */
    constructor() {
        super(HeroSchema);
    }
}

/**
 * @param  {} HeroRepository
 */
Object.seal(HeroRepository);
export default HeroRepository;
