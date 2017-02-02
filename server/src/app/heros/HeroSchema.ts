/**
 * Created on Sun Feb 01 2017
 *
 * Copyright (c) 2016 - Jeff West
 * Github URL https://github.com/jeff10278
 */

import DataAccess from '../../config/database/Database';
import IHeroModel from './interfaces/HeroModel';

const mongoose = DataAccess.mongooseInstance;
const mongooseConnection = DataAccess.mongooseConnection;
/**
 * @param  {{type:String} {constschema=mongoose.Schema({name
 * @param  {true}} required
 * @param  {{type:String} power
 * @param  {true}} required
 * @param  {{type:Number} amountPeopleSaved
 * @param  {true}}} required
 */
class HeroSchema {

    static get schema() {
        const schema = mongoose.Schema({
            name: {
                type: String,
                required: true
            },
            power: {
                type: String,
                required: true
            },
            amountPeopleSaved: {
                type: Number,
                required: true
            }
        });

        return schema;
    }
}

/**
 * @param  {} 'Heroes'
 * @param  {} HeroSchema.schema
 */
const schema = mongooseConnection.model<IHeroModel>('Heroes', HeroSchema.schema);
export default schema;

