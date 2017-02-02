import HeroModel from './HeroModel';
import IHeroModel from './interfaces/HeroModel';
import HeroSchema from './HeroSchema';
import RepositoryBase from './../../lib/repositories/BaseRepository';

class HeroRepository extends RepositoryBase<IHeroModel> {
    constructor() {
        super(HeroSchema);
    }
}

Object.seal(HeroRepository);
export default HeroRepository;
