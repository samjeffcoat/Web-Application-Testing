import React from 'react';
import ReactDOM from 'react-dom';
import App, {sum} from './App';
import render from 'react-dom';



//test the sum "unit" function

test(' it returns the sum of two numbers', () => {
  expect(sum(2,2)).toBe(4);
  expect(sum(3,5)).toBe(8);
})



test('renders without crashing', () => {
  render (<App />)
});

test('it displays a link with the text Learn React', () => {
  const container = render(<App/>);
  
})



