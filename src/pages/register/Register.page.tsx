import React from 'react';
import RegisterForm from '../../components/RegisterForm/RegisterForm';
import './Register.page.css';

export const RegisterPage: React.FC = () => {
	return (
		<div className="register-page">
			<RegisterForm />
		</div>
	);
};
