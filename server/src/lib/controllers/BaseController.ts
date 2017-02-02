/**
 * Created on Sun Feb 01 2017
 *
 * Copyright (c) 2016 - Jeff West
 * Github URL https://github.com/jeff10278
 */

import IReadController from './interfaces/ReadController';
import IWriteController from './interfaces/WriteController';
import IBaseBusiness from '../business/BaseBusiness';

interface BaseController<T extends IBaseBusiness<Object>> extends IReadController, IWriteController {

}
export default BaseController;
