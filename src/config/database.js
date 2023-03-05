import mongoose from 'mongoose';
require('dotenv').config();

class Connection {
  constructor() {
    const url = process.env.MONGODB_URI || `mongodb://localhost:27017/Pootatos`;
    console.log('Establish new connection with url', url);
    mongoose.set('strictQuery', true);

    mongoose.Promise = global.Promise;
    mongoose.connect(url);
  }
}

export default new Connection();
