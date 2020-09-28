import { doGet } from './doGet/doGet';
import { doPost } from './doPost/doPost';

function main() {
  Logger.log('Hello World!');
  Logger.log(process.env.FILE_ID);
}

global.main = main;
global.doGet = doGet;
global.doPost = doPost;
