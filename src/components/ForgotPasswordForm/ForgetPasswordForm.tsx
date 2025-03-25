import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router';
import forgotPasswordReq from '../../requests/forgot-password.req';
import { EmailField } from '../EmailField';

import './ForgotPasswordForm.css';

const ForgetPasswordForm: React.FC = () => {
	const jumpToPage = useNavigate();

	const [email, setEmail] = useState<string>('');
	const [resetPasswordLink, setResetPasswordLink] = useState('');

	const [clickedOnce, setClickedOnce] = useState(false);
	const [vaildationErrors, setVaildationErrors] = useState({
		email: !email.length,
	});

	const validateEmail = (email: string, valid: boolean) => {
		setVaildationErrors({ ...vaildationErrors, email: valid });
		setEmail(email);
	};

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		setClickedOnce(true);
		if (vaildationErrors.email) {
			const response = await forgotPasswordReq({ email });
			const link = response.data?.message.split('link ')[1] ?? '';

			setResetPasswordLink(link);
		}
	};

	return (
		<div className="forgot-password-form">
			<form className="forms" onSubmit={handleSubmit}>
				<h2>Oh no you didn't !</h2>
				<EmailField
					showError={(valid) => !valid && clickedOnce}
					errorText="Are you sure this is an email ? I don't think so !"
					onChange={validateEmail}
				/>
				<div className="forgot-password-options">
					<button
						type="submit"
						className="primary-button"
						onClick={handleSubmit}
					>
						I did
					</button>
					<Link to={'/home'}>
						<button className="secondary-button">🚶‍♂️ Home</button>
					</Link>
				</div>
			</form>
			{resetPasswordLink.length ? (
				<p style={{ fontSize: 'small', textAlign: 'center' }}>
					Ok look.. We all make mistakes and that's fine, and I would send
					you your reset password link by email but as I told you before
					our service is only for authentication, you can only register and
					sign in. Now this isn't the right thing to do but you look like a
					nice person. I think I can trust you..
					<Link to={resetPasswordLink}>Reset Password</Link> promise
					your're you're not evil !?
				</p>
			) : (
				<></>
			)}
		</div>
	);
};

export default ForgetPasswordForm;
