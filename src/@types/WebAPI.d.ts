declare namespace WebAPI {
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
}
