class Constants {
    static DB_CONNECTION_STRING = process.env.NODE_ENV === 'production' ?
        process.env.dbURI : 'mongodb://localhost:27017/ang2Express';
}

Object.seal(Constants);
export default Constants;
