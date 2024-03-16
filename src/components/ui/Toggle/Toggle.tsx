import { FC } from 'react';
import styles from './toggle.module.css';

interface ToggleProps {
	role?: string;
	onChangeFunction: () => void;
	isActive: boolean;
}

const Toggle: FC<ToggleProps> = ({ role, isActive, onChangeFunction }) => {
	return (
		<label className={styles.gsToggleSwitch}>
			<input
				type="checkbox"
				checked={isActive}
				onChange={onChangeFunction}
				aria-checked={isActive}
				role={role}
			/>
			<span className={`${styles.slider} ${styles.round}`}></span>
		</label>
	);
};

export default Toggle;
