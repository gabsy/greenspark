import { FC, useState } from 'react';
import styles from './checkbox.module.css';

interface CheckboxProps {
	label?: string;
	onChange: (isChecked: boolean) => void;
	checked: boolean;
}

const Checkbox: FC<CheckboxProps> = ({ label, onChange, checked }) => {
	const [isChecked, setIsChecked] = useState<boolean>(checked);

	const handleCheckboxChange = () => {
		setIsChecked(!isChecked);
		onChange(!isChecked);
	};

	return (
		<label className={styles.gsCheckbox}>
			<input
				type="checkbox"
				defaultChecked={isChecked}
				onChange={handleCheckboxChange}
				aria-checked={isChecked}
				role="checkbox"
			/>
			<span className={styles.checkmark}></span>
			{label && <span>{label}</span>}
		</label>
	);
};

export default Checkbox;
