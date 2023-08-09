function func(id) {
  return [1, 2, 3];
}

test('return a user object', () => {
  expect(func()).toContain(3);
});
