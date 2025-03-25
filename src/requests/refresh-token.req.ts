import apiRequest from './req';

const refreshTokenReq = async () => {
	const refreshToken = localStorage.getItem('easygen-app-refresh-token');

	if (refreshToken) {
		const response = await apiRequest<{
			accessToken: string;
			refreshToken: string;
			expiresIn: number;
			user: {
				userId: string;
				email: string;
			};
		}>({ method: 'POST', path: '/auth/refresh', body: { refreshToken } });

		localStorage.setItem(
			'easygen-app-access-token',
			response.data?.accessToken ?? ''
		);

		localStorage.setItem(
			'easygen-app-refresh-token',
			response.data?.refreshToken ?? ''
		);

		setTimeout(refreshTokenReq, response.data?.expiresIn);
	}
};

export default refreshTokenReq;
