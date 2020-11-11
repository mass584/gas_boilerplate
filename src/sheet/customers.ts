import { Gender, Prefecture, Customer } from '../model/customer';

type CustomerResponse =
  | { success: true; customer?: Customer }
  | { success: false; errors: string[] };

export class CustomerSheet {
  private readonly HEADER_OFFSET = 2;
  private readonly DATA_WIDTH = 9;
  private readonly SHEET_NAME = '顧客リスト';
  private readonly sheet: GoogleAppsScript.Spreadsheet.Sheet;

  constructor(ss: GoogleAppsScript.Spreadsheet.Spreadsheet) {
    const sheet = ss.getSheetByName(this.SHEET_NAME);
    if (!sheet) throw new Error('シートが見つかりません');
    this.sheet = sheet;
  }

  getNewId(): number {
    return this.sheet.getLastRow() - this.HEADER_OFFSET + 1;
  }

  isOutOfRange(id: number): boolean {
    return id < 1 || this.sheet.getLastRow() - this.HEADER_OFFSET < id;
  }

  create(customer: Customer): CustomerResponse {
    const newCustomer = { id: this.getNewId(), ...customer };
    this.sheet.appendRow([
      [
        newCustomer.id,
        newCustomer.name,
        newCustomer.gender,
        newCustomer.tel,
        newCustomer.email,
        newCustomer.zip,
        newCustomer.prefecture,
        newCustomer.address1,
        newCustomer.address2,
        newCustomer.isDeleted,
      ],
    ]);
    return { success: true, customer: newCustomer };
  }

  get(id: number): CustomerResponse {
    if (this.isOutOfRange(id)) {
      return { success: false, errors: ['レコードが見つかりません'] };
    }
    const values = this.sheet
      .getRange(id + this.HEADER_OFFSET, 1, 1, this.DATA_WIDTH)
      .getValues()[0];
    const customer: Customer = {
      id: Number(values[0]),
      name: String(values[1]),
      gender: String(values[2]) as Gender,
      tel: String(values[3]),
      email: String(values[4]),
      zip: String(values[5]),
      prefecture: String(values[6]) as Prefecture,
      address1: String(values[7]),
      address2: String(values[8]),
      isDeleted: Boolean(values[9]),
    };
    return { success: true, customer };
  }

  list(): Customer[] {
    const length = this.sheet.getLastRow() - this.HEADER_OFFSET;
    const ids = Array.from({ length }, (_, i) => i + 1);
    return ids
      .map((id) => {
        const getResponse = this.get(id);
        return getResponse.success ? getResponse.customer : undefined;
      })
      .filter((customer) => customer !== undefined) as Customer[];
  }

  update(id: number, customer: Customer): CustomerResponse {
    if (this.isOutOfRange(id)) {
      return { success: false, errors: ['レコードが見つかりません'] };
    }
    this.sheet
      .getRange(id + this.HEADER_OFFSET, 1, 1, this.DATA_WIDTH)
      .setValues([
        [
          customer.id,
          customer.name,
          customer.gender,
          customer.tel,
          customer.email,
          customer.zip,
          customer.prefecture,
          customer.address1,
          customer.address2,
          customer.isDeleted,
        ],
      ]);
    return { success: true, customer };
  }

  destroy(id: number): CustomerResponse {
    if (this.isOutOfRange(id)) {
      return { success: false, errors: ['レコードが見つかりません'] };
    }
    this.sheet.getRange(id + this.HEADER_OFFSET, 1, 1, 10).setValue(true);
    return { success: true };
  }
}
