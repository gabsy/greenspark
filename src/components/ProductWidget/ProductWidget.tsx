import { FC } from 'react';
import { logoSvg } from '@components/ui/Svgs/Svgs';
import styles from './productWidget.module.css';

interface ProductWidgetProps {
	action: string;
	amount: number;
	type: string;
	color: string;
	profileLink?: string;
	isLinked: boolean;
}

const ProductWidget: FC<ProductWidgetProps> = ({
	action,
	amount,
	type,
	color = 'green', // Default color is green
	profileLink = '#', // Profile link to be passed as prop from data
	isLinked,
}) => {
	// Set the color class of the widget based on the selectedColor's name
	const colorClass =
		styles['color' + color.charAt(0).toUpperCase() + color.slice(1)];

	return (
		<>
			{/* If isLinked and profileLink are true, render the anchor tag with the product widget, else render the product widget without the anchor tag. */}
			{isLinked && profileLink ? (
				<a
					href={profileLink}
					className={`${styles.productWidget} ${colorClass}`}
					target="_blank"
					rel="nofollow noreferrer"
				>
					{logoSvg()}
					<h4 className={styles.content}>
						<span>This product {action}</span>
						{amount}
						{type === 'carbon' ? 'kgs of' : ' '} {type}
					</h4>
				</a>
			) : (
				<div className={`${styles.productWidget} ${colorClass}`}>
					{logoSvg()}
					<h4 className={styles.content}>
						<span>This product {action}</span>
						{amount}
						{type === 'carbon' ? 'kgs of' : ' '} {type}
					</h4>
				</div>
			)}
		</>
	);
};

export default ProductWidget;
