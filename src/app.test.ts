import expect from 'expect';
import { App } from './app';

describe('app', () => {
  it('exports a function', () => {
    expect(typeof App).toEqual('function');
  });
});
