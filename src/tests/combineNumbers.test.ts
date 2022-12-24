import { it, describe, expect } from 'vitest';
import combineNumbers from '../lib/combineNumbers';

describe('combineNumbers', () => {
  it('should combine numbers', () => {
    const result = combineNumbers([1, 2, 3]);
    expect(result).toEqual([123]);
  });

  it("Shouldn't combine strings with numbers", () => {
    const result = combineNumbers([1, '2', 3]);
    expect(result).toEqual([1, '2', 3]);
  });

  it("Should combine numbers and not strings", () => {
    const result = combineNumbers([1, 2, '3']);
    expect(result).toEqual([12, '3']);

    const result2 = combineNumbers([1, '2', 3, 4, '5']);
    expect(result2).toEqual([1, '2', 34, '5']);

    const result3 = combineNumbers([1, 2, 3, 4, '5', '6', 7, 8, '9']);
    expect(result3).toEqual([1234, '5', '6', 78, '9']);
  });

  it('should work when the strings do not represent numbers', () => {
    const result = combineNumbers(['+', '-', 7, 8, 9, 'K']);
    expect(result).toEqual(['+', '-', 789, 'K']);
  })
});