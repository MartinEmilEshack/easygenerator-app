import refreshTokenReq from './refresh-token.req';
import apiRequest from './req';

const logInReq = async (body: { email: string; password: string }) => {
	const response = await apiRequest<{
		accessToken: string;
		refreshToken: string;
		expiresIn: number;
		user: {
			userId: string;
			email: string;
		};
	}>({ method: 'POST', path: '/auth/login', body });

	localStorage.setItem(
		'easygen-app-access-token',
		response.data?.accessToken ?? ''
	);

	localStorage.setItem(
		'easygen-app-refresh-token',
		response.data?.refreshToken ?? ''
	);

	if (response.data?.expiresIn)
		setTimeout(refreshTokenReq, response.data.expiresIn * 1000);

	return response;
};

export default logInReq;
