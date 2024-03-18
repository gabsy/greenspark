import { FC, useState, useEffect } from 'react';
import { Widget } from '@components/PerProductWidgets/PerProductWidgets';
import ProductWidget from '@components/ProductWidget/ProductWidget';
import ProductWidgetSettings from '@components/ProductWidgetSettings/ProductWidgetSettings';
import { updateWidget } from '@components/PerProductWidgets/api/apiPatch';
import styles from './productWidgetSetup.module.css';

const ProductWidgetSetup: FC<Widget> = ({
	id,
	type,
	amount,
	action,
	active,
	linked,
	selectedColor,
	onActiveChange,
}) => {
	const [isLinked, setIsLinked] = useState(linked);
	const [widgetColor, setWidgetColor] = useState(selectedColor);

	// Handler function for change of the linked state through the checkbox
	const handleLinkedChange = (isChecked: boolean) => {
		setIsLinked(isChecked);
		updateWidget(id, 'linked', isChecked);
	};

	// Handler function for color change through the color picker
	const handleColorChange = (
		color: 'white' | 'black' | 'blue' | 'green' | 'beige',
	) => {
		setWidgetColor(color);
		updateWidget(id, 'selectedColor', color);
	};

	useEffect(() => {
		updateWidget(id, 'active', active);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [active]);

	return (
		<div className={styles.productWidgetSetup} id={id.toString()}>
			{/* Render the widget component */}
			<ProductWidget
				action={action}
				amount={amount}
				type={type}
				color={widgetColor}
				isLinked={isLinked}
			/>

			{/* Render the settings component */}
			<ProductWidgetSettings
				isLinked={isLinked}
				color={widgetColor}
				active={active}
				id={id}
				handleLinkedChange={handleLinkedChange}
				handleColorChange={handleColorChange}
				onActiveChange={onActiveChange}
			/>
		</div>
	);
};

export default ProductWidgetSetup;
