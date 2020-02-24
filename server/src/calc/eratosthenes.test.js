import { eratosthenes } from './eratosthenes';

describe('eratosthenes', () => {
  test('10 returns [ 2, 3, 5, 7 ]', () => {
    const input = 10;
    const expected = [2, 3, 5, 7];

    expect(eratosthenes(input)).toStrictEqual(expected);
  });

  test('18 returns [2, 3, 5, 7, 11, 13, 17]', () => {
    const input = 18;
    const expected = [2, 3, 5, 7, 11, 13, 17];

    expect(eratosthenes(input)).toStrictEqual(expected);
  });

  test('1 returns []', () => {
    const input = 1;
    const expected = [];

    expect(eratosthenes(input)).toStrictEqual(expected);
  });

  test('2 returns []', () => {
    const input = 2;
    const expected = [];

    expect(eratosthenes(input)).toStrictEqual(expected);
  });

  test('throws if called unparsable Number ', () => {
    const input = 'x1x';
    function passString() {
      eratosthenes(input);
    }

    expect(passString).toThrowErrorMatchingSnapshot();
  });

  test('throws if called negative Number', () => {
    const input = -5;
    function passNegativeNum() {
      eratosthenes(input);
    }

    expect(passNegativeNum).toThrowErrorMatchingSnapshot();
  });
});
