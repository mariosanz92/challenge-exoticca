import { fireEvent, render, screen } from '@testing-library/react';
import Dropdown from '.';

describe('Dropdown', () => {
  beforeEach(() => {});

  const renderDropdown = () => {
    render(
      <Dropdown
        options={[
          { value: 'es', name: 'Spain' },
          { value: 'uk', name: 'England' },
          { value: 'ge', name: 'Germany' },
        ]}
        setValue={() => {}}
        value={{ value: 'es', name: 'Spain' }}
      />
    );
  };

  test('renders a dropdown', () => {
    renderDropdown();
    const dropdown = screen.getByText('Spain');
    expect(dropdown).toBeInTheDocument();
  });

  test('render types', () => {
    renderDropdown();

    const dropdown = screen.getByText('Spain');

    fireEvent.click(dropdown);

    const firstOption = screen.getByText('England');
    const SecondOption = screen.getByText('Germany');

    expect(firstOption).toBeInTheDocument();
    expect(SecondOption).toBeInTheDocument();
  });
});
