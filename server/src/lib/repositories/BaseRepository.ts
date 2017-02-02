/**
 * Created on Sun Feb 01 2017
 *
 * Copyright (c) 2016 - Jeff West
 * Github URL https://github.com/jeff10278
 */

import IRead from './interfaces/Read';
import IWrite from './interfaces/Write';

import * as mongoose from 'mongoose';

/**
 * @param  {mongoose.Model<mongoose.Document>} schemaModel
 */
class RepositoryBase<T extends mongoose.Document> implements IRead<T>, IWrite<T> {

    private _model: mongoose.Model<mongoose.Document>;

    constructor(schemaModel: mongoose.Model<mongoose.Document>) {
        this._model = schemaModel;
    }

    /**
     * @param  {T} item
     * @param  {(error:any,result:any)=>void} callback
     */
    create(item: T, callback: (error: any, result: any) => void) {
        this._model.create(item, callback);
    }

    /**
     * @param  {(error:any,result:any)=>void} callback
     */
    retrieve(callback: (error: any, result: any) => void) {
        this._model.find({}, callback);
    }

    /**
     * @param  {mongoose.Types.ObjectId} _id
     * @param  {T} item
     * @param  {(error:any,result:any)=>void} callback
     */
    update(_id: mongoose.Types.ObjectId, item: T, callback: (error: any, result: any) => void) {
        this._model.update({ _id: _id }, item, callback);
    }

    /**
     * @param  {string} _id
     * @param  {(error:any,result:any)=>void} callback
     */
    delete(_id: string, callback: (error: any, result: any) => void) {
        this._model.remove({ _id: this.toObjectId(_id) }, (err) => callback(err, null));
    }

    /**
     * @param  {string} _id
     * @param  {(error:any,result:T)=>void} callback
     */
    findById(_id: string, callback: (error: any, result: T) => void) {
        this._model.findById(_id, callback);
    }

    /**
     * @param  {string} _id
     */
    private toObjectId(_id: string): mongoose.Types.ObjectId {
        return mongoose.Types.ObjectId.createFromHexString(_id);
    }

}

export default RepositoryBase;
