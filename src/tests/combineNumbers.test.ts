import { it, describe, expect } from 'vitest';
import combineNumbers from '../lib/combineNumbers';

describe('combineNumbers', () => {
  it('should combine numbers', () => {
    const result = combineNumbers([1, 2, 3]);
    expect(result).toEqual([123]);
  });
})