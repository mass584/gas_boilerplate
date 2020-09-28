import Ajv from 'ajv';

import schema from '../schema.json';

type PostRequestBodyEcho = {
  eventType: 'echo';
  message: string;
};

type PostRequestBodyHelloWorld = {
  eventType: 'hello_world';
};

export type PostRequestBody = PostRequestBodyEcho | PostRequestBodyHelloWorld;

export function doPost(
  e: WebAPI.PostEvent,
): GoogleAppsScript.Content.TextOutput | GoogleAppsScript.HTML.HtmlOutput {
  if (!isValid(e.postData.contents)) {
    return ContentService.createTextOutput()
      .setMimeType(ContentService.MimeType.JSON)
      .setContent(JSON.stringify({ message: 'RequestBodyの型が誤っています。' }));
  }
  const contents = JSON.parse(e.postData.contents) as PostRequestBody;
  const message = (() => {
    switch (contents.eventType) {
      case 'hello_world':
        return 'hello_world';
      case 'echo':
        return contents.message;
    }
  })();
  return ContentService.createTextOutput()
    .setMimeType(ContentService.MimeType.JSON)
    .setContent(JSON.stringify({ message }));
}

function isValid(contents: string): boolean {
  try {
    const object = JSON.parse(contents);
    const validator = new Ajv().compile(schema);
    return validator(object) === true;
  } catch (_) {
    return false;
  }
}
