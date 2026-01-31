import { expect, test } from 'vitest';
import { increment } from './counter';

test('0 + 1 = 1', () => {
  expect(increment(0)).toBe(1);
});
