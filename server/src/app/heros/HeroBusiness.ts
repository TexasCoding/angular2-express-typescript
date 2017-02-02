import HeroRepository from './HeroRepository';
import IHeroBusiness from './interfaces/HeroBusiness';
import IHeroModel from './interfaces/HeroModel';
import HeroModel from './HeroModel';

class HeroBusiness implements IHeroBusiness {
    private _heroRepository: HeroRepository;

    constructor() {
        this._heroRepository = new HeroRepository();
    }

    create(item: IHeroModel, callback: (error: any, result: any) => void) {
        this._heroRepository.create(item, callback);
    }

    retrieve(callback: (error: any, result: any) => void) {
        this._heroRepository.retrieve(callback);
    }

    update(_id: string, item: IHeroModel, callback: (error: any, result: any) => void) {

        this._heroRepository.findById(_id, (err, res) => {
            if (err) {
                callback(err, res);
            } else {
                this._heroRepository.update(res._id, item, callback);
            }
        });
    }

    delete(_id: string, callback: (error: any, result: any) => void) {
        this._heroRepository.delete(_id, callback);
    }

    findById(_id: string, callback: (error: any, result: IHeroModel) => void) {
        this._heroRepository.findById(_id, callback);
    }
}

Object.seal(HeroBusiness);
export default HeroBusiness;
