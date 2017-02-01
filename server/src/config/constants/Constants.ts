class Constants {
    static DB_CONNECTION_STRING: string = process.env.NODE_ENV === 'production' ?
        process.env.dbURI : 'mongodb://localhost:27017/' + process.env.DB_NAME;
}

Object.seal(Constants);
export default Constants;
