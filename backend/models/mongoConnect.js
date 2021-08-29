const mongoose = require("mongoose");
const logger = require("../winstonConfig.js");
const env = require("../config");

let db;

const mongoConnect = () => {
  return new Promise(async (resolve, reject) => {
    try {
      if (db) {
        resolve(db);
      } else {
        const mongodb = await mongoose.connect(env.MONGODB_URL, {
          useNewUrlParser: true,
          useUnifiedTopology: true,
          useFindAndModify: false,
          useCreateIndex: true,
        });
        db = mongodb;
        resolve(db);
      }
    } catch (err) {
      logger.error(err);
      reject(err);
    }
  });
};

module.exports = mongoConnect();
