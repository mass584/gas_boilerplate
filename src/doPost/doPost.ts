import Ajv from 'ajv';
import moment from 'moment';

import { PostRequestBody } from '../doPost/requestBody';
import { createCustomer, updateCustomer } from '../controller/customer';
import schema from './schema.json';

export type Response = { success: true } | { success: false; errors: string[] };

export function doPost(
  e: WebAPI.PostEvent,
): GoogleAppsScript.Content.TextOutput | GoogleAppsScript.HTML.HtmlOutput {
  if (!isValid(e.postData.contents)) {
    return ContentService.createTextOutput()
      .setMimeType(ContentService.MimeType.JSON)
      .setContent(JSON.stringify({ status: 400, message: 'リクエストの形式が誤っています' }));
  }
  const contents = JSON.parse(e.postData.contents) as PostRequestBody;
  const token = Utilities.base64Encode(
    `${process.env.BASIC_AUTH_USERNAME}:${process.env.BASIC_AUTH_PASSWORD}`,
  );
  if (contents.token !== token) {
    return ContentService.createTextOutput()
      .setMimeType(ContentService.MimeType.JSON)
      .setContent(JSON.stringify({ status: 401, message: '認証トークンが誤っています' }));
  }
  const datetime = moment();
  const ss = SpreadsheetApp.openById(contents.spreadsheetId);
  const response: Response = (() => {
    switch (contents.eventType) {
      case 'create_customer':
        return createCustomer(datetime, ss, contents.customer);
      case 'update_customer':
        return updateCustomer(datetime, ss, contents.customerId, contents.customer);
    }
  })();
  return ContentService.createTextOutput()
    .setMimeType(ContentService.MimeType.JSON)
    .setContent(JSON.stringify(response));
}

function isValid(contents: string): boolean {
  try {
    const object = JSON.parse(contents);
    const validator = new Ajv().compile(schema.definitions.PostRequestBody);
    return validator(object) === true;
  } catch (_) {
    return false;
  }
}
