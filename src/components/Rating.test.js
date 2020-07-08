import * as React from 'react';
import {
  fireEvent,
  render,
  waitForElement,
  cleanup,
} from '@testing-library/react';

import Rating from './Rating';

afterEach(cleanup);

test('if use click add button without add rating', async () => {
  const { getByText } = render(<Rating />);

  fireEvent.click(getByText('Add'));

  waitForElement(() => {
    expect(getByText('User review:')).toHaveTextContent(
      'Select the stars please'
    );
  });
});
