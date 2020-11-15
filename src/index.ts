import { doGet } from './doGet/doGet';
import { doPost } from './doPost/doPost';
import { createCustomer, updateCustomer } from './view/customer';

global.createCustomer = createCustomer;
global.updateCustomer = updateCustomer;
global.doGet = doGet;
global.doPost = doPost;
