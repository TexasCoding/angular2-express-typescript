/**
 * Created on Sun Feb 01 2017
 *
 * Copyright (c) 2016 - Jeff West
 * Github URL https://github.com/jeff10278
 */

import * as express from 'express';
import * as bodyParser from 'body-parser';
import * as dotenv from 'dotenv';

dotenv.config();

import BaseRoutes from './lib/BaseRoutes';

const port: number = process.env.PORT || 3000;
const env: string = process.env.NODE_ENV || 'developement';

const app = express();

/**
 * @param  {} 'port'
 * @param  {} port
 */
app.set('port', port);

/**
 * @param  {} bodyParser.json(
 */
app.use(bodyParser.json());

/**
 * @param  {true}} bodyParser.urlencoded({extended
 */
app.use(bodyParser.urlencoded({ extended: true }));

/**
 * @param  {} '/api'
 * @param  {} newBaseRoutes(
 * @param  {} .routes
 */
app.use('/api', new BaseRoutes().routes);

/**
 * @param  {} env==='developement'
 * @param  {} {app.use(function(err
 * @param  {express.Request} req
 * @param  {express.Response} res
 * @param  {express.NextFunction} next
 */
if (env === 'developement') {
  app.use(function (err, req: express.Request, res: express.Response, next: express.NextFunction) {
    res.status(err.status || 500);
    res.json({
      error: err,
      message: err.message
    });
  });
}

/**
 * @param  {express.Request} function(req
 * @param  {express.Response} res
 * @param  {} next
 * @param  {} {consterr=newError('NotFound'
 * @param  {} ;next(err
 * @param  {} ;}
 */
app.use(function (req: express.Request, res: express.Response, next) {
  const err = new Error('Not Found');
  next(err);
});

/**
 * @param  {any} function(err
 * @param  {express.Request} req
 * @param  {express.Response} res
 * @param  {express.NextFunction} next
 */
app.use(function (err: any, req: express.Request, res: express.Response, next: express.NextFunction) {
  res.status(err.status || 500);
  res.json({
    error: {},
    message: err.message
  });
});

export { app };
