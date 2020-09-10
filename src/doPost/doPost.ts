export function doPost(
  e: PostEvent,
): GoogleAppsScript.Content.TextOutput | GoogleAppsScript.HTML.HtmlOutput {
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
