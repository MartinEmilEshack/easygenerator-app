import apiRequest from './req';

const logOutReq = async () => {
	const refreshToken = localStorage.getItem('easygen-app-refresh-token');

	if (refreshToken) {
		const response = await apiRequest<{ message: string }>({
			method: 'POST',
			path: '/auth/logout',
			authorized: true,
		});

		localStorage.removeItem('easygen-app-access-token');
		localStorage.removeItem('easygen-app-refresh-token');

		return response;
	}
};

export default logOutReq;
