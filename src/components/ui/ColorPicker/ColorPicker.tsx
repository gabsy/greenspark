import { FC, useState } from 'react';
import styles from './colorPicker.module.css';

interface ColorPickerProps {
	color: Color;
	onChangeFunction: (color: Color) => void;
	isActive: boolean;
}

const COLORS = ['blue', 'green', 'beige', 'white', 'black'] as const;
export type Color = (typeof COLORS)[number];

const ColorPicker: FC<ColorPickerProps> = ({
	color,
	onChangeFunction,
	isActive,
}) => {
	const [selectedColor, setSelectedColor] = useState<string>(color);

	const handleColorChange = (newColor: Color) => {
		setSelectedColor(newColor);
		onChangeFunction(newColor);
	};

	return (
		<div className={styles.gsColorPicker}>
			{COLORS.map((color, index: number) => (
				<button
					key={index}
					style={{ backgroundColor: `var(--color-${color})` }}
					onClick={() => handleColorChange(color)}
					disabled={isActive ? false : true}
					className={selectedColor === color ? styles.selected : ''}
				></button>
			))}
		</div>
	);
};

export default ColorPicker;
