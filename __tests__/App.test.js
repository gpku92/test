import React from 'react';
import ReactDOM from 'react-dom';

it('fails intentionally to validate test pipeline', () => {
  const div = document.createElement('div');
  ReactDOM.render(<div />, div);

  // Intentional failure
  expect(true).toBe(false);
});
