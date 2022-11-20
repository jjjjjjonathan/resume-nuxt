import { it, expect } from 'vitest';
import { getBasics } from './basics';

it('should return my name', () => {
  const name = getBasics('name');
  expect(name).toBe('Jonathan Cheng');
});

it('should return my label', () => {
  const label = getBasics('label');
  expect(label).toBe('Full-Stack Developer');
});

it('should return my city and province in a string', () => {
  const location = getBasics('location');
  expect(location.location).toContain('Toronto');
  expect(location.location).toContain('ON');
});
