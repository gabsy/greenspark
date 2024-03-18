export const updateWidget = async (
	id: number,
	property: string,
	value: string | number | boolean,
) => {
	try {
		const updatedRecord = await updateWidgetById(id, property, value);
		console.log('Record updated successfully:', updatedRecord);
	} catch (error) {
		console.error('Failed to update record:', error);
	}
};

const updateWidgetById = async (
	id: number,
	property: string,
	value: string | number | boolean,
) => {
	const url = import.meta.env.VITE_GS_API_URL + `/${id}`;

	try {
		const response = await fetch(url, {
			method: 'PATCH',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				[property]: value,
			}),
		});

		if (!response.ok) {
			throw new Error('Server error. Please try again later.');
		}

		return await response.json();
	} catch (error) {
		console.error('Error updating record:', error);
		throw error;
	}
};
