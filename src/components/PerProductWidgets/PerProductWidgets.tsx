import { FC, useState, useEffect, Dispatch, SetStateAction } from 'react';
import ProductWidgetSetup from '@components/ProductWidgetSetup/ProductWidgetSetup';
import ProductWidgetLoader from '@components/ProductWidgetLoader/ProductWidgetLoader';
import { dataError } from '@components/ui/Svgs/Svgs';
import '@fontsource/cabin/400.css';
import styles from './perProductWidgets.module.css';

export interface Widget {
	id: number;
	type: string;
	amount: number;
	action: 'collects' | 'plants' | 'offsets';
	active: boolean;
	linked: boolean;
	selectedColor: 'white' | 'black' | 'blue' | 'green' | 'beige';
	onActiveChange: (id: number) => void;
}

interface PerProductWidgetsProps {
	title: string;
	fetchData: (
		setData: Dispatch<SetStateAction<Widget[]>>,
		setActiveWidgetId: Dispatch<SetStateAction<number | null>>,
		setError: Dispatch<SetStateAction<string | null>>,
		setIsLoading: Dispatch<SetStateAction<boolean>>,
		apiKey: string,
	) => void;
	apiKey: string;
}

const PerProductWidgets: FC<PerProductWidgetsProps> = ({
	title,
	fetchData,
	apiKey,
}) => {
	const [activeWidgetId, setActiveWidgetId] = useState<number | null>(null);
	const [error, setError] = useState<string | null>(null);
	const [isLoading, setIsLoading] = useState<boolean>(true);
	const [data, setData] = useState<Array<Widget>>([]);

	useEffect(() => {
		fetchData(setData, setActiveWidgetId, setError, setIsLoading, apiKey);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	// Create an array of specific length, to map through and render widget loading placeholders.
	const widgetLoadingPlaceholder = [];
	for (let i = 0; i < 3; i++) {
		widgetLoadingPlaceholder.push(i);
	}

	// Handle the active widget change
	const handleActiveChange = (id: number) => {
		activeWidgetId === id ? setActiveWidgetId(null) : setActiveWidgetId(id);
	};

	return (
		<div className={styles.perProductWidgets}>
			<h3 className={styles.title}>{title}</h3>
			<div className={styles.widgetsWrapper}>
				{/* If the data is loading, render the ProductWidgetLoader components. */}
				{isLoading &&
					widgetLoadingPlaceholder.map((index) => {
						return <ProductWidgetLoader key={index} />;
					})}

				{/* If there is an error, render the error message. */}
				{error && (
					<div className={styles.error}>
						{dataError()}
						{error}
					</div>
				)}

				{/* If the data array is not empty, render the ProductWidget components. */}
				{data.length > 0 && (
					<>
						{/* Map through the data array and render the ProductWidget component for each item. */}
						{data.map((widget: Widget, index: number) => (
							<ProductWidgetSetup
								key={index}
								id={widget.id}
								type={widget.type}
								amount={widget.amount}
								action={widget.action}
								active={
									activeWidgetId === widget.id ? true : false
								}
								linked={widget.linked}
								selectedColor={widget.selectedColor}
								onActiveChange={handleActiveChange}
							/>
						))}
					</>
				)}
			</div>
		</div>
	);
};

export default PerProductWidgets;
