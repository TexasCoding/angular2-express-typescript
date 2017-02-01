import IReadController from './interfaces/ReadController';
import IWriteController from './interfaces/WriteController';
import IBaseBusiness from '../business/BaseBusiness';

interface BaseController<T extends IBaseBusiness<Object>> extends IReadController, IWriteController {

}
export default BaseController;
