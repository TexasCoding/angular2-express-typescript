/**
 * Created on Sun Feb 01 2017
 *
 * Copyright (c) 2016 - Jeff West
 * Github URL https://github.com/jeff10278
 */

import Read from './common/Read';
import Write from './common/Write';

interface BaseBusiness<T> extends Read<T>, Write<T> {
}


export default BaseBusiness;
