import apiRequest from './req';

const registerReq = async (body: {
	username: string;
	email: string;
	password: string;
}) =>
	apiRequest<{ id: number; email: string }>({
		method: 'POST',
		path: '/users',
		body,
	});

export default registerReq;
