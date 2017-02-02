/**
 * Created on Sun Feb 01 2017
 *
 * Copyright (c) 2016 - Jeff West
 * Github URL https://github.com/jeff10278
 */

import * as mongoose from 'mongoose';

interface HeroModel extends mongoose.Document {
    power: string;
    amountPeopleSaved: number;
    name: string;
}

export default HeroModel;
