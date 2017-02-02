/**
 * Created on Sun Feb 01 2017
 *
 * Copyright (c) 2016 - Jeff West
 * Github URL https://github.com/jeff10278
 */

interface Read<T> {
    retrieve: (callback: (error: any, result: T) => void) => void;
    findById: (_id: string, callback: (error: any, result: T) => void) => void;
}

export default Read;
