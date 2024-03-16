import { Dispatch, SetStateAction } from 'react';
import { Widget } from '@components/PerProductWidgets/PerProductWidgets';

export const fetchData = async (
	setData: Dispatch<SetStateAction<Widget[]>>,
	setActiveWidgetId: Dispatch<SetStateAction<number | null>>,
	setError: Dispatch<SetStateAction<string | null>>,
	setIsLoading: Dispatch<SetStateAction<boolean>>,
) => {
	try {
		// Fetch data from the API
		const response = await fetch(import.meta.env.VITE_GS_API_URL);

		// If the response is not ok, throw error.
		if (!response.ok)
			throw new Error('Server error. Please try again later.');

		// Parse the response
		const data = await response.json();

		// If the data object contains a message, throw error.
		if ('message' in data)
			throw new Error('An API fetching error has occurred.');

		// If data object is empty, throw error.
		if (data.length === 0) {
			throw new Error('No data available.');
		}

		// Set the data state and reset the error state
		setData(data);
		setError(null);

		// Find active widget id in data, and set the active widget id state
		const activeWidgetId = data.find((widget: Widget) => widget.active)?.id;
		setActiveWidgetId(activeWidgetId ? activeWidgetId : null);
	} catch (error) {
		// Set the error state and reset the data state
		setError((error as Error).message);
		setData([]);
	} finally {
		setIsLoading(false);
	}
};
