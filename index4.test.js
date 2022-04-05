const { capitalize } = require('./index4');

test('capitalize the first letter of the word', () => {
  expect(capitalize('hello')).toMatch(/Hello/);
});
