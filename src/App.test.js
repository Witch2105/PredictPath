// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders PredictPath title', () => {
    render(<App />);
    const titleElement = screen.getByText(/PredictPath/i);
    expect(titleElement).toBeInTheDocument();
});
