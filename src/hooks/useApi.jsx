import { useEffect, useState } from 'react';
import axios from 'axios';

export function useApi(url) {
	const [isData, setIsData] = useState([]);

	useEffect(() => {
		axios.get(url).then(response => {
			setIsData(response.data);
		});
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return { isData };
}
