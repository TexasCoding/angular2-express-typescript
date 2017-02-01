import HeroModel from './../models/HeroModel';
import IHeroModel from './../models/interfaces/HeroModel';
import HeroSchema from './../models/schemas/HeroSchema';
import RepositoryBase from './BaseRepository';

class HeroRepository extends RepositoryBase<IHeroModel> {
    constructor() {
        super(HeroSchema);
    }
}

Object.seal(HeroRepository);
export default HeroRepository;
