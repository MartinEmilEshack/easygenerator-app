import apiRequest from './req';

const forgotPasswordReq = async (body: { email: string }) =>
	apiRequest<{
		message: string;
	}>({ method: 'POST', path: '/auth/forgot-password', body });

export default forgotPasswordReq;
