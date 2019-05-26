import plateCalc from './plateCalc';

it('returns object', () => {
  const plates = plateCalc(100);
  expect(plates).toBeDefined();
});

it('calculates plates needed', () => {
  const plates = plateCalc(100);
  expect(plates).toMatchObject({
    25: 1,
    2.5: 1,
  });
});

it('returns undefined object', () => {
  const plates = plateCalc(45);
  expect(plates).toBeUndefined();
});
