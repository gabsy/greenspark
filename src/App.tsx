import PerProductWidgets from '@components/PerProductWidgets/PerProductWidgets';
import { fetchData } from '@components/PerProductWidgets/api/api';

function App() {
	return (
		<div className="wrapper">
			<PerProductWidgets
				title="Per Product Widgets"
				apiKey={import.meta.env.VITE_GS_API_URL}
				fetchData={fetchData}
			/>
		</div>
	);
}

export default App;
