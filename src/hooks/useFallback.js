import React, { useState } from 'react';
import Fallback from 'shared/Fallback';

const useFallback = () => {
	const [loading, setLoading] = useState(false);

	return [
		loading ? <Fallback /> : null,
		() => setLoading(true),
		() => setLoading(false),
	];
};

export default useFallback;