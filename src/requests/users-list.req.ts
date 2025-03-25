import apiRequest from './req';

const usersListReq = async () =>
	apiRequest<{
		users: Array<{
			id: string;
			email: string;
		}>;
	}>({ method: 'GET', path: '/users', authorized: true });

export default usersListReq;
