import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router';
import logInReq from '../../requests/login-in.req';
import { EmailField } from '../EmailField';
import { PasswordField } from '../PasswordField';
import './LoginForm.css';

const LoginForm: React.FC = () => {
	const jumpToPage = useNavigate();

	const [email, setEmail] = useState<string>('');
	const [password, setPassword] = useState<string>('');

	const [clickedOnce, setClickedOnce] = useState(false);
	const [vaildationErrors, setVaildationErrors] = useState({
		email: !email.length,
		password: !password,
	});

	const validateEmail = (email: string, valid: boolean) => {
		setVaildationErrors({ ...vaildationErrors, email: valid });
		setEmail(email);
	};

	const validatePassword = (password: string, valid: boolean) => {
		setVaildationErrors({ ...vaildationErrors, password: valid });
		setPassword(password);
	};

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		setClickedOnce(true);
		if (vaildationErrors.email && vaildationErrors.password) {
			const response = await logInReq({ email, password });
			if (response.success) jumpToPage('/profile');
		}
	};

	return (
		<div className="login-form">
			<form className="forms" onSubmit={handleSubmit}>
				<h2>Login</h2>
				<EmailField
					showError={(valid) => !valid && clickedOnce}
					errorText="Are you sure this is an email ? I don't think so !"
					onChange={validateEmail}
				/>
				<PasswordField
					onChange={validatePassword}
					showError={clickedOnce}
					errorText="A sophisticated person as yourself should have a password 8 charecter long, with at least 1 special charecter, 1 digit, 1 upper case and 1 lowercase letter"
				/>
				<Link to={{ pathname: '/forgot-password' }}>Forgot password</Link>
				<div className="login-options">
					<button
						type="submit"
						className="primary-button"
						onClick={handleSubmit}
					>
						Login
					</button>
					<Link to={'/home'}>
						<button className="secondary-button">🚶‍♂️ Home</button>
					</Link>
				</div>
			</form>
		</div>
	);
};

export default LoginForm;
