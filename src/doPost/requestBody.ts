export type PostRequestBody =
  | {
      eventType: 'echo';
      message: string;
    }
  | {
      eventType: 'hello_world';
    };
