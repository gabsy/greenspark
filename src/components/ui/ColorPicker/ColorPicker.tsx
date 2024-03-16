import { FC, useState } from 'react';
import styles from './colorPicker.module.css';

interface ColorPickerProps {
	color: string;
	onChangeFunction: (
		color: 'white' | 'black' | 'blue' | 'green' | 'beige',
	) => void;
}

const ColorPicker: FC<ColorPickerProps> = ({ color, onChangeFunction }) => {
	const [selectedColor, setSelectedColor] = useState<string>(color);

	const colors = ['blue', 'green', 'beige', 'white', 'black'];

	const handleColorChange = (
		newColor: 'white' | 'black' | 'blue' | 'green' | 'beige',
	) => {
		setSelectedColor(newColor);
		onChangeFunction(newColor);
	};

	return (
		<div className={styles.gsColorPicker}>
			{colors.map((color, index: number) => (
				<button
					key={index}
					style={{ backgroundColor: `var(--color-${color})` }}
					onClick={() =>
						handleColorChange(
							color as
								| 'white'
								| 'black'
								| 'blue'
								| 'green'
								| 'beige',
						)
					}
					className={selectedColor === color ? styles.selected : ''}
				></button>
			))}
		</div>
	);
};

export default ColorPicker;
