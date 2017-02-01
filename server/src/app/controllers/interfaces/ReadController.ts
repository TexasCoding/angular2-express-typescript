import * as express from 'express';

interface ReadController {
    retrieve: express.RequestHandler;
    findById: express.RequestHandler;
}

export default ReadController;
