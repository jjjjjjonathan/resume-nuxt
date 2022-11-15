import { it, expect } from 'vitest';
import { getBasics } from '../Basics/helpers';

it('should pass this test', () => {
  expect('four'.length).toBe(4);
});

it('should return my name', () => {
  const name = getBasics('name');
  expect(name).toBe('Jonathan Cheng');
});

it('should return my city and province in a string', () => {
  const location = getBasics('location');
  expect(location).toContain('Toronto');
  expect(location).toContain('ON');
});

it('should return my label', () => {
  const label = getBasics('label');
  expect(label).toBe('Full-Stack Developer');
});
