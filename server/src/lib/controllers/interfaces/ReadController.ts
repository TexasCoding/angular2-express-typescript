/**
 * Created on Sun Feb 01 2017
 *
 * Copyright (c) 2016 - Jeff West
 * Github URL https://github.com/jeff10278
 */

import * as express from 'express';

interface ReadController {
    retrieve: express.RequestHandler;
    findById: express.RequestHandler;
}

export default ReadController;
