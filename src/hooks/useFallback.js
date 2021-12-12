import React, { useEffect, useState } from 'react';
import Fallback from 'shared/Fallback';

const useFallback = () => {
	
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		return () => {
			setLoading(false);
		};
	}, []);
	
	return [
		loading ? <Fallback /> : null,
		() => setLoading(true),
		() => setTimeout(() => {
			setLoading(false);
		}, 1000),
		loading
	];
};

export default useFallback;