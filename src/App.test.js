// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders QuasarLink title', () => {
    render(<App />);
    const titleElement = screen.getByText(/QuasarLink/i);
    expect(titleElement).toBeInTheDocument();
});
