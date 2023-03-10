require('dotenv').config();
process.on('uncaughtException', (err) => {
  console.log('UNCAUGHT EXCEPTION! 💥 Shutting Down...');
  console.log(err.name, err.message);
  process.exit(1);
});

import app from './app';
import config from 'config';
import connectDb from './utils/connect';

const port = config.get<number>('port');
const server = app.listen(port, async () => {
  await connectDb();
  console.log(`Server started listening on ${port}`);
});

process.on('unhandledRejection', (err: any) => {
  console.log('UNHANDLED REJECTION! 💥 Shutting Down...');
  console.log(err.name, err.message);
  server.close(() => process.exit(1));
});
