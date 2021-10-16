import React, { useState } from 'react';
import Fallback from 'shared/Fallback';

const useFallback = () => {
	
	const [loading, setLoading] = useState(false);

	return [
		loading ? <Fallback /> : null,
		() => setLoading(true),
		() => setTimeout(() => {
			setLoading(false);
		}, 1000)
	];
};

export default useFallback;