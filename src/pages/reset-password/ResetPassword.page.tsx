import React from 'react';
import ResetPasswordForm from '../../components/ResetPasswordForm/ResetPasswordForm';
import './ResetPassword.page.css';

export const ResetPasswordPage: React.FC = () => {
	return (
		<div className="reset-password">
			<ResetPasswordForm />
		</div>
	);
};
