import { token } from '../util/auth';
import { CustomerSheet } from '../sheet/customers';

export function createCustomer(): void {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const templete = HtmlService.createTemplateFromFile('createCustomer');
  templete.spreadsheetId = ss.getId();
  templete.url = String(process.env.WEB_APP_URL);
  templete.token = token(
    String(process.env.BASIC_AUTH_USERNAME),
    String(process.env.BASIC_AUTH_PASSWORD),
  );
  const modalDialog = templete
    .evaluate()
    .setSandboxMode(HtmlService.SandboxMode.IFRAME)
    .setHeight(500)
    .setWidth(750);
  SpreadsheetApp.getUi().showModalDialog(modalDialog, '追加');
}

export function updateCustomer(): void {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const customerSheet = new CustomerSheet(ss);
  const templete = HtmlService.createTemplateFromFile('updateCustomer');
  templete.spreadsheetId = ss.getId();
  templete.url = String(process.env.WEB_APP_URL);
  templete.token = token(
    String(process.env.BASIC_AUTH_USERNAME),
    String(process.env.BASIC_AUTH_PASSWORD),
  );
  templete.customers = customerSheet.list();
  const modalDialog = templete
    .evaluate()
    .setSandboxMode(HtmlService.SandboxMode.IFRAME)
    .setHeight(500)
    .setWidth(750);
  SpreadsheetApp.getUi().showModalDialog(modalDialog, '編集');
}
