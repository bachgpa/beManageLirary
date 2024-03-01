// import mongoose from 'mongoose';
const mongoose = require('mongoose');

async function mongoosedb() {
  try {
    await mongoose.connect('mongodb://localhost:27017/be_library_app', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('DATABASE CONNECTED!!!');
  } catch (error) {
    console.log('DATABASE CONNECT FAILED!!!');
  }
}
// export default { mongoosedb };
module.exports = mongoosedb;
