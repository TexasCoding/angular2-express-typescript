/**
 * Created on Sun Feb 01 2017
 *
 * Copyright (c) 2016 - Jeff West
 * Github URL https://github.com/jeff10278
 */

class Constants {
    static DB_CONNECTION_STRING: string = process.env.NODE_ENV === 'production' ?
        process.env.dbURI : 'mongodb://localhost:27017/' + process.env.DB_NAME;
}

Object.seal(Constants);
export default Constants;
