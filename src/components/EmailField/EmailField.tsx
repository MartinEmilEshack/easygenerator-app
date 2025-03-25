import React, { useState } from 'react';
import ValidationError from '../ValidationError/ValidationError';
import './EmailField.css';

export const EmailField: React.FC<{
	onChange: (email: string, valid: boolean) => void;
	showError: (valid: boolean) => boolean;
	errorText: string;
	noValidation?: boolean;
}> = ({ onChange, showError, errorText, noValidation = false }) => {
	const [valid, setValid] = useState(false);

	const validateEmail = (email: string) => {
		const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

		const isEmail = emailPattern.test(email);

		setValid(isEmail);
		onChange(email, isEmail);
	};

	return (
		<div className="email-field-container">
			<div className="email-input-container">
				<input
					type="email"
					placeholder="Enter your email"
					className="email-input"
					onChange={(e) => validateEmail(e.target.value)}
				></input>
			</div>
			<ValidationError
				show={showError(valid) || noValidation}
				errorText={errorText}
			/>
		</div>
	);
};
