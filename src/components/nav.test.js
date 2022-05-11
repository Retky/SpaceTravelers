
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import renderer from 'react-test-renderer';
import { BrowserRouter } from 'react-router-dom';
import Nav from './nav';

describe('Nav component', () => {
  test('renders title "Space Travelers\' Hub"', () => {
    render(
      <BrowserRouter><Nav /></BrowserRouter>,
    );

    const title = screen.getByText('Space Travelers\' Hub');
    expect(title).toBeInTheDocument();
  });

  test('component match with the snapshot', () => {
    // Assert
    const tree = renderer.create(<BrowserRouter><Nav /></BrowserRouter>).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
