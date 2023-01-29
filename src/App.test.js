import { render, screen } from '@testing-library/react';
import App from './App';
import { initializeTimes, updateTimes } from './BookingPage';

test('initializeTimes returns the correct initial state', () => {
  const expected = ['17:00', '18:00', '19:00', '20:00', '21:00','22:00'];
  const result = initializeTimes();
  expect(result).toEqual(expected);
});

test('updateTimes returns the same value when state is provided', () => {
  const state = ['17:00', '18:00', '19:00', '20:00', '21:00','22:00'];
  const date = '2022-01-01';
  const expected = state;
  const result = updateTimes(state, { type: 'Update Time', date });
  expect(result).toEqual(expected);
});