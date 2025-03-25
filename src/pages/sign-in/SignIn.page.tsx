import { useEffect } from 'react';
import { useNavigate } from 'react-router';
import LoginForm from '../../components/LoginForm/LoginForm';
import './SignIn.page.css';

export const SignInPage: React.FC = () => {
	const jumpToPage = useNavigate();

	useEffect(() => {
		const refreshToken = localStorage.getItem('easygen-app-refresh-token');
		if (refreshToken?.length) jumpToPage('/profile');
	}, [jumpToPage]);

	return (
		<div className="sign-in">
			<LoginForm />
		</div>
	);
};
