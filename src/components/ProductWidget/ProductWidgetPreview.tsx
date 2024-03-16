import { FC } from 'react';
import { logoSvg } from '@components/ui/Svgs/Svgs';
import styles from './productWidget.module.css';

interface ProductWidgetPreviewProps {
	action: string;
	amount: number;
	type: string;
}

const ProductWidgetPreview: FC<ProductWidgetPreviewProps> = ({
	action,
	amount,
	type,
}) => {
	return (
		<div className={styles.productWidgetPreview}>
			{logoSvg()}
			<h4 className={styles.content}>
				<span>This product {action}</span>
				{amount}
				{type === 'carbon' ? 'kgs of' : ' '} {type}
			</h4>
		</div>
	);
};

export default ProductWidgetPreview;
