import { FC, useState } from 'react';
import styles from './colorPicker.module.css';

interface ColorPickerProps {
	color: string;
	onChange: (color: string) => void;
}

const ColorPicker: FC<ColorPickerProps> = ({ color, onChange }) => {
	const [selectedColor, setSelectedColor] = useState<string>(color);

	const colors = ['blue', 'green', 'beige', 'white', 'black'];

	const handleColorChange = (newColor: string) => {
		setSelectedColor(newColor);
		onChange(newColor);
	};

	return (
		<div className={styles.gsColorPicker}>
			{colors.map((color, index: number) => (
				<button
					key={index}
					style={{ backgroundColor: `var(--color-${color})` }}
					onClick={() => handleColorChange(color)}
					className={selectedColor === color ? styles.selected : ''}
				></button>
			))}
		</div>
	);
};

export default ColorPicker;
