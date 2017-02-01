import * as mongoose from 'mongoose';

interface HeroModel extends mongoose.Document {
    power: string;
    amountPeopleSaved: number;
    name: string;
}

export default HeroModel;
