import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router';
import logInReq from '../../requests/login-in.req';
import registerReq from '../../requests/register.req';
import { EmailField } from '../EmailField';
import { PasswordField } from '../PasswordField';
import { TextField } from '../TextField';
import './RegsterForm.css';

const EMAIL_ERROR_MESSAGES = [
	"Are you sure this is an email ? I don't think so !",
	'This email is already in use, or are you trying to register twice cheeky',
];

const RegisterForm: React.FC = () => {
	const jumpToPage = useNavigate();

	const [username, setUsername] = useState<string>('');
	const [email, setEmail] = useState<string>('');
	const [password, setPassword] = useState<string>('');

	const [clickedOnce, setClickedOnce] = useState(false);
	const [vaildationErrors, setVaildationErrors] = useState({
		username: !username.length,
		email: !email.length,
		password: !password,
		newUser: true,
	});

	const [emailErrorText, setEmailErrorText] = useState(0);

	const validateName = (username: string, valid: boolean) => {
		setVaildationErrors({ ...vaildationErrors, username: valid });
		setUsername(username);
	};

	const validateEmail = (email: string, valid: boolean) => {
		setVaildationErrors({ ...vaildationErrors, email: valid, newUser: true });
		setEmail(email);
		setEmailErrorText(0);
	};

	const validatePassword = (password: string, valid: boolean) => {
		setVaildationErrors({ ...vaildationErrors, password: valid });
		setPassword(password);
	};

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		setClickedOnce(true);
		if (
			vaildationErrors.email &&
			vaildationErrors.username &&
			vaildationErrors.password
		) {
			const response = await registerReq({ username, email, password });
			if (response.statusCode === 409) {
				setVaildationErrors({ ...vaildationErrors, newUser: false });
				setEmailErrorText(1);
			} else if (response.success) {
				await logInReq({ email, password });
				jumpToPage('/profile');
			}
		}
	};

	return (
		<div className="register-form">
			<form className="forms" onSubmit={handleSubmit}>
				<h2>Register</h2>
				<EmailField
					onChange={validateEmail}
					showError={(valid) =>
						(!valid && clickedOnce) ||
						(!vaildationErrors.newUser && clickedOnce)
					}
					errorText={EMAIL_ERROR_MESSAGES[emailErrorText]}
				/>
				<TextField
					onChange={validateName}
					placeHolder="Username"
					showError={(valid) => !valid && clickedOnce}
					minLength={3}
					errorText="Sorry Dr. Oz your name can't be shorter than three charecters"
				/>
				<PasswordField
					onChange={validatePassword}
					showError={(valid) => !valid && clickedOnce}
					errorText="A sophisticated person as yourself should have a password 8 charecter long, with at least 1 special charecter, 1 digit, 1 upper case and 1 lowercase letter"
				/>
				<div className="register-options">
					<button
						type="submit"
						className="primary-button"
						onClick={handleSubmit}
					>
						Register
					</button>
					<Link to={'/home'}>
						<button className="secondary-button">🚶‍♂️ Home</button>
					</Link>
				</div>
			</form>
		</div>
	);
};

export default RegisterForm;
