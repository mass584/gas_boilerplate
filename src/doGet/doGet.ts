export function doGet(
  e: GetEvent,
): GoogleAppsScript.Content.TextOutput | GoogleAppsScript.HTML.HtmlOutput {
  return HtmlService.createHtmlOutput('<p>Hello World</p>');
}
