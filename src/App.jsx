import { useEffect, useState } from 'react';
import { AppRoutes } from './routes/app.routes';
import { Loader } from './components/Loader';
import { Navigation } from './components/Navigation';

export default function App() {
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		setIsLoading(false);
	}, []);

	return (
		<section>
			{isLoading ? (
				<section>
					<Navigation />
					<Loader />
				</section>
			) : (
				<section>
					<Navigation />
					<AppRoutes />
				</section>
			)}
		</section>
	);
}
