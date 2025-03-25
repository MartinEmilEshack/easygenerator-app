import React, { useEffect } from 'react';
import { useNavigate } from 'react-router';
import RegisterForm from '../../components/RegisterForm/RegisterForm';
import './Register.page.css';

export const RegisterPage: React.FC = () => {
	const jumpToPage = useNavigate();

	useEffect(() => {
		const refreshToken = localStorage.getItem('easygen-app-refresh-token');
		if (refreshToken?.length) jumpToPage('/profile');
	}, [jumpToPage]);

	return (
		<div className="register-page">
			<RegisterForm />
		</div>
	);
};
