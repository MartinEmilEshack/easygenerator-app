import apiRequest from './req';

const resetPasswordReq = async (body: {
	resetToken: string;
	password: string;
}) =>
	apiRequest<{
		message: string;
	}>({ method: 'POST', path: '/auth/reset-password', body });

export default resetPasswordReq;
