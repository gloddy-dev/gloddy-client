import '@testing-library/jest-dom';
import '@testing-library/jest-dom/extend-expect';
import 'jest-plugin-context/setup';

jest.mock('next/router', () => require('next-router-mock'));

window.matchMedia = (query) => ({
  matches: false,
  media: query,
  onchange: null,
  addListener: jest.fn(), // deprecated
  removeListener: jest.fn(), // deprecated
  addEventListener: jest.fn(),
  removeEventListener: jest.fn(),
  dispatchEvent: jest.fn(),
});
