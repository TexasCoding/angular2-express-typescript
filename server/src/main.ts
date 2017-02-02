import * as express from 'express';
import * as bodyParser from 'body-parser';

import * as dotenv from 'dotenv';

dotenv.config();

import BaseRoutes from './lib/BaseRoutes';

const port: number = process.env.PORT || 3000;
const env: string = process.env.NODE_ENV || 'developement';

const app = express();

app.set('port', port);

app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies

app.use('/api', new BaseRoutes().routes);

if (env === 'developement') {
  app.use(function (err, req: express.Request, res: express.Response, next: express.NextFunction) {
    res.status(err.status || 500);
    res.json({
      error: err,
      message: err.message
    });
  });
}

// catch 404 and forward to error handler
app.use(function (req: express.Request, res: express.Response, next) {
  const err = new Error('Not Found');
  next(err);
});

// production error handler
// no stacktrace leaked to user
app.use(function (err: any, req: express.Request, res: express.Response, next: express.NextFunction) {
  res.status(err.status || 500);
  res.json({
    error: {},
    message: err.message
  });
});

export { app };
