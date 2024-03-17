import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import ProductWidget from './ProductWidget';

describe('Product Widget Tests', () => {
	test('Renders on the page', () => {
		render(
			<ProductWidget
				action="action"
				amount={0}
				type="type"
				color="color"
				isLinked={false}
			/>,
		);

		const divElement = screen.getByTestId('product-widget');
		expect(divElement).toBeInTheDocument();
	});

	test('Renders as anchor tag if isLinked is true', () => {
		render(
			<ProductWidget
				action="action"
				amount={0}
				type="type"
				color="color"
				isLinked={true}
				profileLink="#"
			/>,
		);

		const anchorElement = screen.getByTestId('product-widget');
		expect(anchorElement).toBeInTheDocument();
		expect(anchorElement).toHaveAttribute('href', '#');
	});
});
