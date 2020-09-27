import { hello } from '@/hello';

describe('hello', () => {
  it('returns "Hello World" when no args are passed', () => {
    expect(hello()).toEqual('Hello World');
  });

  it('returns "Hello You" when passing "You" as first arg', () => {
    expect(hello('You')).toEqual('Hello You');
  });
});
