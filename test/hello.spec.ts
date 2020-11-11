import { sayHello } from '../src/util/hello';

describe('Hello Jest', () => {
  it('say hello.', () => {
    expect(sayHello()).toEqual('Hello World!');
  });
});
