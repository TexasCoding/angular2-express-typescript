import * as express from 'express';
import * as bodyParser from 'body-parser';

import dotenv from 'dotenv';

dotenv.config();

import BaseRoutes from './routes/BaseRoutes';

const app = express();

app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies

app.use('/api', new BaseRoutes().routes);

app.listen(process.env.NODE_PORT, function () {
  console.log('Example app listening on port http://localhost:' + process.env.NODE_PORT + '!');
});

export { app };
