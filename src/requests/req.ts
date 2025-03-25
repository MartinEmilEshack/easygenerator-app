import { ApiResponse } from '../@types/response';

const baseUrl = 'http://localhost:3001';

const apiRequest = async <T>(reqData: {
	method: 'GET' | 'POST' | 'PATCH' | 'DELETE';
	path: string;
	query?: any;
	body?: any;
	authorized?: boolean;
}): Promise<ApiResponse<T>> => {
	let headers: Record<string, string> = { 'Content-Type': 'application/json' };
	let querySting = '';

	if (reqData.query) {
		const queryParams = new URLSearchParams();
		Object.keys(reqData.query).forEach((key) =>
			queryParams.append(key, reqData.query[key])
		);
		querySting = `?${queryParams.toString()}`;
	}

	if (reqData.authorized) {
		const accessToken = localStorage.getItem('easygen-app-access-token');
		if (accessToken)
			headers = { ...headers, Authorization: `Bearer ${accessToken}` };
	}

	try {
		const response = await fetch(`${baseUrl}${reqData.path}${querySting}`, {
			headers,
			method: reqData.method,
			body: JSON.stringify(reqData.body),
		});

		const responseBody = await response.json();

		if (!response.ok) {
			const apiErrorResponse: ApiResponse<T> = {
				success: false,
				message: responseBody.message,
				statusCode: responseBody.statusCode,
			};

			return apiErrorResponse;
		}

		const apiResponse: ApiResponse<T> = {
			success: true,
			message: 'Success',
			statusCode: response.status,
			data: responseBody,
		};

		return apiResponse;
	} catch (error) {
		console.error('Registration failed:', error);

		return {
			success: false,
			message: 'Error while requesting',
			statusCode: -1,
		};
	}
};

export default apiRequest;
