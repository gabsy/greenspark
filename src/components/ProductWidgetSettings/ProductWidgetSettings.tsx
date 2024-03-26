import { FC } from 'react';
import Checkbox from '@components/ui/Checkbox/Checkbox';
import Toggle from '@components/ui/Toggle/Toggle';
import Tooltip from '@components/ui/Tooltip/Tooltip';
import ColorPicker from '@components/ui/ColorPicker/ColorPicker';
import { iconInfo } from '@components/ui/Svgs/Svgs';
import { Color } from '@components/ui/ColorPicker/ColorPicker';
import styles from './productWidgetSettings.module.css';

interface ProductWidgetSettingsProps {
	isLinked: boolean;
	color: Color;
	active: boolean;
	id: number;
	handleLinkedChange: (isChecked: boolean) => void;
	handleColorChange: (color: Color) => void;
	onActiveChange: (id: number) => void;
}

const ProductWidgetSettings: FC<ProductWidgetSettingsProps> = ({
	isLinked,
	color,
	active,
	id,
	handleLinkedChange,
	handleColorChange,
	onActiveChange,
}) => {
	return (
		<div className={styles.productWidgetSettings}>
			{/* Render the linked profile setting */}
			<div className={styles.productWidgetLinked}>
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
				<Checkbox
					checked={isLinked}
					onChangeFunction={handleLinkedChange}
				/>
			</div>

			{/* Render the color setting */}
			<div className={styles.productWidgetColor}>
				Badge Color
				<ColorPicker
					color={color}
					onChangeFunction={handleColorChange}
					isActive={active}
				/>
			</div>

			{/* Render the active setting */}
			<div className={styles.productWidgetActive}>
				Activate Badge{' '}
				<Toggle
					isActive={active}
					onChangeFunction={() => onActiveChange(id)}
				/>
			</div>
		</div>
	);
};

export default ProductWidgetSettings;
