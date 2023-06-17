import mongoose from 'mongoose';
require('dotenv').config();

class Connection {
  constructor() {
    const url = process.env.MONGODB_URI || ``;
    console.log('Establish new connection with url', url);
    mongoose.set('strictQuery', true);

    mongoose.Promise = global.Promise;
    mongoose.connect(url);
  }
}

export default new Connection();
