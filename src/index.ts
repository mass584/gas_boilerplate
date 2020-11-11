import { doGet } from './doGet/doGet';
import { doPost } from './doPost/doPost';
import { createCustomer } from './view/customer';

global.createCustomer = createCustomer;
global.doGet = doGet;
global.doPost = doPost;
