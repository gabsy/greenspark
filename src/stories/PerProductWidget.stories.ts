import type { Meta, StoryObj } from '@storybook/react';
import PerProductWidgets from '@components/PerProductWidgets/PerProductWidgets';
import { fetchData } from '@components/PerProductWidgets/api/api';

const meta = {
	title: 'Components/PerProductWidgets',
	component: PerProductWidgets,
	parameters: {
		layout: 'centered',
	},
	tags: ['autodocs'],
	argTypes: {
		title: {
			control: 'text',
			default: '#',
			description: 'Profile link',
		},
	},
} satisfies Meta<typeof PerProductWidgets>;

export default meta;
type Story = StoryObj<typeof meta>;

// Variants
export const Default: Story = {
	args: {
		title: 'Per Product Widgets',
		fetchData,
	},
};
