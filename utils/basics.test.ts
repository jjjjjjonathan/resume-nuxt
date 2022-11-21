import { it, expect } from 'vitest';
import { getBasics } from './basics';
import { BasicsEmail, BasicsLocation } from './interfaces';

it('should return my name', () => {
  const name = getBasics('name');
  expect(name).toBe('Jonathan Cheng');
});

it('should return my label', () => {
  const label = getBasics('label');
  expect(label).toBe('Full-Stack Developer');
});

it('should return my city and province in a string', () => {
  const location = getBasics('location') as BasicsLocation;
  expect(location.location).toContain('Toronto');
  expect(location.location).toContain('ON');
});

it('should return my email', () => {
  const email = getBasics('email') as BasicsEmail;
  expect(email.emailDisplay).toContain('@gmail.com');
  expect(email.emailUrl).toContain('mailto:');
});
