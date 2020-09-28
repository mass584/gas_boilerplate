declare namespace Global {
  interface global {
    doGet(
      e: WebAPI.GetEvent,
    ): GoogleAppsScript.Content.TextOutput | GoogleAppsScript.HTML.HtmlOutput;
    doPost(
      e: WebAPI.PostEvent,
    ): GoogleAppsScript.Content.TextOutput | GoogleAppsScript.HTML.HtmlOutput;
    main(): void;
  }
}

// eslint-disable-next-line no-var
declare var global: Global.global;
