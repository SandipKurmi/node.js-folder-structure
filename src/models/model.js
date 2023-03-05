import mongoose, { Schema } from 'mongoose';
import cachegoose from 'recachegoose';

cachegoose(mongoose, {
  engine: 'memory',
});
// cachegoose(mongoose, {
//     engine: 'redis',
//     port: 6379,
//     host: 'localhost'
// });
module.exports = { mongoose: mongoose, Schema: Schema };

// export const Mongoose = mongoose;
// export const schema = Schema;
