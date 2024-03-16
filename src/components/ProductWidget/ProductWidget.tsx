import { FC, useState } from 'react';
import { Widget } from '@components/PerProductWidgets/PerProductWidgets';
import ProductWidgetPreview from './ProductWidgetPreview';
import Checkbox from '@components/ui/Checkbox/Checkbox';
import Toggle from '@components/ui/Toggle/Toggle';
import Tooltip from '@components/ui/Tooltip/Tooltip';
import ColorPicker from '@components/ui/ColorPicker/ColorPicker';
import { iconInfo } from '@components/ui/Svgs/Svgs';
import styles from './productWidget.module.css';

const ProductWidget: FC<Widget> = ({
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

	// Handler function for change of the linked state
	const handleLinkedChange = (isChecked: boolean) => {
		setIsLinked(isChecked);
	};

	// Handler function for color change
	const handleColorChange = (
		color: 'white' | 'black' | 'blue' | 'green' | 'beige',
	) => {
		setWidgetColor(color);
	};

	// Set the color class of the widget based on the selectedColor's name
	const colorClass =
		styles[
			'color' + widgetColor.charAt(0).toUpperCase() + widgetColor.slice(1)
		];

	return (
		<div
			className={`${styles.productWidget} ${colorClass}`}
			id={id.toString()}
		>
			{/* Render the widget component */}
			<ProductWidgetPreview action={action} amount={amount} type={type} />

			{/* Render the linked profile setting */}
			<div className={styles.linkedSetting}>
				<div>
					Link to Public Profile{' '}
					<Tooltip
						text="This widget links directly to your public profile so that you can easily share your impact with your customers. Turn it off here if you do not want the badge to link to it."
						delay={300}
						linkUrl="#"
						linkText="View Public Profile"
					>
						{iconInfo()}
					</Tooltip>
				</div>
				<Checkbox checked={isLinked} onChange={handleLinkedChange} />
			</div>

			{/* Render the color setting */}
			<div className={styles.colorSetting}>
				Badge Color
				<ColorPicker
					color={widgetColor}
					onChange={handleColorChange as (color: string) => void}
				/>
			</div>

			{/* Render the active setting */}
			<div className={styles.activeSetting}>
				Activate Badge{' '}
				<Toggle
					isActive={active}
					onChangeFunction={() => onActiveChange(id)}
				/>
			</div>
		</div>
	);
};

export default ProductWidget;
