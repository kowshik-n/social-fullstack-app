import mongoose from 'mongoose';
import { config } from './config';
import Logger from 'bunyan';

const log: Logger = config.createLogger('setupDatabase');
export default function () {
  const dbConnect = function () {
    mongoose
      .connect(`${config.DATABASE_URl}`)
      .then(function () {
        log.info('DB connected successfully');
      })
      .catch(function (err) {
        log.error(err);
        return process.exit(1);
      });
  };

  dbConnect();

  mongoose.connection.on('disconnected', dbConnect);
}
