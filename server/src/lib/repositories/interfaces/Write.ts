/**
 * Created on Sun Feb 01 2017
 *
 * Copyright (c) 2016 - Jeff West
 * Github URL https://github.com/jeff10278
 */

import * as mongoose from 'mongoose';

interface Write<T> {
    create: (item: T, callback: (error: any, result: any) => void) => void;
    update: (_id: mongoose.Types.ObjectId, item: T, callback: (error: any, result: any) => void) => void;
    delete: (_id: string, callback: (error: any, result: any) => void) => void;
}

export default Write;
