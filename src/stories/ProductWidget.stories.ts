import type { Meta, StoryObj } from '@storybook/react';
import ProductWidget from '@components/ProductWidget/ProductWidget';

const meta = {
	title: 'Components/ProductWidget',
	component: ProductWidget,
	parameters: {
		layout: 'centered',
	},
	tags: ['autodocs'],
	argTypes: {
		amount: { control: 'number', defaultValue: 10, description: 'Amount' },
		action: {
			control: 'select',
			options: ['collects', 'plants', 'offsets'],
			description: 'Action',
		},
		type: {
			control: 'select',
			options: ['plastic bottles', 'trees', 'carbon'],
			description: 'Type',
		},
		color: {
			control: 'select',
			options: ['green', 'blue', 'beige', 'black', 'white'],
		},
		isLinked: {
			control: 'boolean',
			defaultValue: false,
			description: 'Is linked',
		},
		profileLink: {
			control: 'text',
			default: '#',
			description: 'Profile link',
		},
	},
} satisfies Meta<typeof ProductWidget>;

export default meta;
type Story = StoryObj<typeof meta>;

// Variants
export const Default: Story = {
	args: {
		action: 'plants',
		amount: 10,
		type: 'trees',
		color: 'green',
		profileLink: '#',
		isLinked: true,
	},
};
