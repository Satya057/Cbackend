const mongoose = require('mongoose');
require('dotenv').config();

const URL = process.env.URL;
const dbName = 'cortica'; // Ensure this is the correct database name

if (!URL) {
  throw new Error('MongoDB connection string (URL) is missing from environment variables.');
}

console.log('MongoDB URL:', `${URL}${dbName}`); // Log the connection URL to debug

const connection = mongoose.connect(`${URL}${dbName}`, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}); 

module.exports = { connection };
