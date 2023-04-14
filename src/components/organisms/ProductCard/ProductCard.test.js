import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

import { MOCK_PRODUCTS } from '../../../mocks/products.mock';
import ProductCard from './ProductCard';

describe("ProductCard Component", () => {
    test('renders product card', () => {
        render(<BrowserRouter><ProductCard item={MOCK_PRODUCTS[0]} /></BrowserRouter>);

        const titleElement = screen.getByText(MOCK_PRODUCTS[0].title);

        expect(titleElement).toBeInTheDocument();
    });
})
