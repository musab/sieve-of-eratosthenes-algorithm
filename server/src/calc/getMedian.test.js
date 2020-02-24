import { getMedian } from './getMedian';

describe('getMedian', () => {
  test('[2, 3, 5, 7] returns 3, 5', () => {
    const input = [2, 3, 5, 7];
    const expected = [3, 5];

    expect(getMedian(input)).toStrictEqual(expected);
  });

  test('[2, 3, 5, 7, 11, 13, 17] returns 7', () => {
    const input = [2, 3, 5, 7, 11, 13, 17];
    const expected = [7];

    expect(getMedian(input)).toStrictEqual(expected);
  });

  test('[0] returns 0', () => {
    const input = [0];
    const expected = [0];

    expect(getMedian(input)).toStrictEqual(expected);
  });

  test('if called with non array type throws error', () => {
    const input = '1';
    function passNonArray() {
      getMedian(input);
    }

    expect(passNonArray).toThrowErrorMatchingSnapshot();
  });

  test('if called with empty array throws error', () => {
    const input = [];
    function passEmptyArr() {
      getMedian(input);
    }

    expect(passEmptyArr).toThrowErrorMatchingSnapshot();
  });
});
