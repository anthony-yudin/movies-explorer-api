require('dotenv').config();

const { PORT = 3005, MONGO_URL = 'mongodb://localhost:27017/bitfilmsdb', JWT_SECRET = 'JWT_SECRET' } = process.env;

module.exports = {
  PORT,
  MONGO_URL,
  JWT_SECRET,
};
