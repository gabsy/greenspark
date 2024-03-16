import ContentLoader from 'react-content-loader';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const ProductWidgetLoader = (props: any) => (
	<ContentLoader
		speed={1}
		width={220}
		height={168}
		viewBox="0 0 220 154"
		backgroundColor="#e6e6e6"
		foregroundColor="#ecebeb"
		{...props}
	>
		<rect x="0" y="81" rx="4" ry="4" width="150" height="12" />
		<rect x="202" y="81" rx="4" ry="4" width="18" height="12" />
		<rect x="162" y="112" rx="4" ry="4" width="58" height="12" />
		<rect x="184" y="142" rx="4" ry="4" width="36" height="12" />
		<rect x="0" y="112" rx="4" ry="4" width="95" height="12" />
		<rect x="0" y="142" rx="4" ry="4" width="113" height="12" />
		<rect x="0" y="0" rx="4" ry="4" width="220" height="66" />
	</ContentLoader>
);

export default ProductWidgetLoader;
