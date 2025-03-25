import React from 'react';
import ForgetPasswordForm from '../../components/ForgotPasswordForm/ForgetPasswordForm';
import './ForgotPassword.page.css';

const ForgotPasswordPage: React.FC = (props) => {
	return (
		<div className="forgot-password">
			<ForgetPasswordForm />
		</div>
	);
};

export default ForgotPasswordPage;
