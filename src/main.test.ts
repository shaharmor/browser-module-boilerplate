import { Main } from './main';

describe('main', () => {
  describe('.helloWorld()', () => {
    it('exports a function', () => {
      const main = new Main();
      expect(main.helloWorld()).toEqual('Hello World!');
    });
  });
});
