/**
 * Created on Sun Feb 01 2017
 *
 * Copyright (c) 2016 - Jeff West
 * Github URL https://github.com/jeff10278
 */

import * as Mongoose from 'mongoose';
import Constants from './../../config/constants/Constants';

class DataAccess {
    static mongooseInstance: any;
    static mongooseConnection: Mongoose.Connection;

    static connect(): Mongoose.Connection {
        if (this.mongooseInstance) {
            return this.mongooseInstance;
        }

        this.mongooseConnection = Mongoose.connection;
        this.mongooseConnection.once('open', () => {
            console.log('Connected to mongodb.');
        });

        this.mongooseInstance = Mongoose.connect(Constants.DB_CONNECTION_STRING);
        return this.mongooseInstance;
    }

    constructor() {
        DataAccess.connect();
    }

}

DataAccess.connect();
export default DataAccess;
