import { FC, ReactNode, useState } from 'react';
import styles from './tooltip.module.css';

interface TooltipProps {
	text: string;
	linkText?: string;
	linkUrl?: string;
	delay: number;
	children: ReactNode;
}

const Tooltip: FC<TooltipProps> = ({
	text,
	linkText,
	linkUrl,
	delay,
	children,
}) => {
	const [isVisible, setIsVisible] = useState(false);
	let timeout: NodeJS.Timeout | null = null;

	const showTooltip = () => {
		clearTimeout(timeout!);
		setIsVisible(true);
	};

	const hideTooltip = () => {
		timeout = setTimeout(() => {
			setIsVisible(false);
		}, delay);
	};

	return (
		<div
			className={styles.gsTooltip}
			onMouseEnter={showTooltip}
			onMouseLeave={hideTooltip}
			aria-haspopup="true"
			aria-expanded={isVisible}
		>
			{children}
			<div
				className={`${styles.gsTooltipInner} ${isVisible && styles.isVisible}`}
				role="tooltip"
			>
				{text}
				{linkText && linkUrl && (
					<a
						className={styles.gsTooltipLink}
						href={linkUrl}
						target="_blank"
						rel="noreferrer"
					>
						{linkText}
					</a>
				)}
			</div>
		</div>
	);
};

export default Tooltip;
