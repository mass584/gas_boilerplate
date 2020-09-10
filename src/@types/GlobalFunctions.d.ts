type GetEvent = {
  queryString: string;
  parameter: { [index: string]: string };
  parameters: { [index: string]: [string] };
  contentLenth: number;
  contextPath: string;
};

type PostEvent = {
  queryString: string;
  parameter: { [index: string]: string };
  parameters: { [index: string]: [string] };
  contentLenth: number;
  contextPath: string;
  postData: {
    length: number;
    type: string;
    contents: string;
    name: string;
  };
};

type PostRequestBody = {
  eventType: 'echo' | 'hello_world';
  message: string;
};

declare namespace GlobalFunctions {
  interface global {
    doGet(e: GetEvent): GoogleAppsScript.Content.TextOutput | GoogleAppsScript.HTML.HtmlOutput;
    doPost(e: PostEvent): GoogleAppsScript.Content.TextOutput | GoogleAppsScript.HTML.HtmlOutput;
    main(): void;
  }
}

// eslint-disable-next-line no-var
declare var global: GlobalFunctions.global;
