import React from 'react';
import { render } from '@testing-library/react';
import UserList from './UserList';

test('renders learn react link', () => {
  const { getByText } = render(<UserList />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
