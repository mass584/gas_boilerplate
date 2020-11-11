import { Response } from '../doPost/doPost';
import { Gender, Prefecture } from '../model/customer';
import { CustomerSheet } from '../sheet/customers';

export function createCustomer(
  _datetime: moment.Moment,
  ss: GoogleAppsScript.Spreadsheet.Spreadsheet,
  customer: {
    name: string;
    gender: Gender;
    tel: string;
    email: string;
    zip: string;
    prefecture: Prefecture;
    address1: string;
    address2: string;
  },
): Response {
  const sheet = new CustomerSheet(ss);
  const createResponse = sheet.create({ ...customer, isDeleted: false });
  if (!createResponse.success) {
    return createResponse;
  }
  return { success: true };
}

export function updateCustomer(
  _datetime: moment.Moment,
  ss: GoogleAppsScript.Spreadsheet.Spreadsheet,
  customerId: number,
  customer: {
    name: string;
    gender: Gender;
    tel: string;
    email: string;
    zip: string;
    prefecture: Prefecture;
    address1: string;
    address2: string;
  },
): Response {
  const sheet = new CustomerSheet(ss);
  const updateResponse = sheet.update(customerId, { ...customer, isDeleted: false });
  if (!updateResponse.success) {
    return updateResponse;
  }
  return { success: true };
}
