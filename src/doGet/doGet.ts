export function doGet(
  e: WebAPI.GetEvent,
): GoogleAppsScript.Content.TextOutput | GoogleAppsScript.HTML.HtmlOutput {
  return HtmlService.createHtmlOutput('<p>Hello World</p>');
}
