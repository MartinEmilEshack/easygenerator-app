import React, { useState } from 'react';
import { Link, useNavigate, useSearchParams } from 'react-router';
import { PasswordField } from '../PasswordField';

import resetPasswordReq from '../../requests/reset-password.req';
import './ResetPasswordForm.css';

const ResetPasswordForm: React.FC = () => {
	const jumpToPage = useNavigate();
	const [searchParams, setSearchParams] = useSearchParams();

	const [password, setPassword] = useState<string>('');
	const [confirmPassword, setConfirmPassword] = useState<string>('');

	const [clickedOnce, setClickedOnce] = useState(false);
	const [vaildationErrors, setVaildationErrors] = useState({
		password: !password.length,
		confirmPassword: !confirmPassword.length,
	});

	const validatePassword = (password: string, valid: boolean) => {
		setVaildationErrors({ ...vaildationErrors, password: !valid });
		setPassword(password);
	};

	const validateConfirmPassword = (
		confirmPassword: string,
		valid: boolean
	) => {
		setVaildationErrors({
			...vaildationErrors,
			confirmPassword: !valid || password !== confirmPassword,
		});
		setConfirmPassword(confirmPassword);
	};

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		setClickedOnce(true);
		if (!vaildationErrors.password && !vaildationErrors.confirmPassword) {
			const response = await resetPasswordReq({
				resetToken: searchParams.get('token') ?? '',
				password,
			});
			if (response.success) jumpToPage('/sign-in');
		}
	};

	return (
		<div className="reset-password-form">
			<form className="forms" onSubmit={handleSubmit}>
				<h2>Reset Password</h2>
				<PasswordField
					onChange={validatePassword}
					showError={(valid) => !valid && clickedOnce}
					errorText="A sophisticated person as yourself should have a password 8 charecter long, with at least 1 special charecter, 1 digit, 1 upper case and 1 lowercase letter"
				/>
				<PasswordField
					onChange={validateConfirmPassword}
					showError={(valid) =>
						(!valid && clickedOnce) ||
						(vaildationErrors.confirmPassword && clickedOnce)
					}
					placeHolder="Confirm your password"
					errorText="This must be the same as the password, I hope you didn't already forgot it !"
				/>
				<div className="reset-password-options">
					<button
						type="submit"
						className="primary-button"
						onClick={handleSubmit}
					>
						Done
					</button>
					<Link to={'/home'}>
						<button className="secondary-button">🚶‍♂️ Home</button>
					</Link>
				</div>
			</form>
		</div>
	);
};

export default ResetPasswordForm;
