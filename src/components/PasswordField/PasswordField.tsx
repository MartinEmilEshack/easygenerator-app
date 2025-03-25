import { Eye, EyeOff } from 'lucide-react';
import React, { useState } from 'react';
import ValidationError from '../ValidationError/ValidationError';
import './PasswordField.css';

export const PasswordField: React.FC<{
	onChange: (password: string, valid: boolean) => void;
	showError: boolean;
	errorText: string;
	placeHolder?: string;
}> = ({
	onChange,
	showError,
	errorText,
	placeHolder = 'Enter your password',
}) => {
	const [showPassword, setShowPassword] = useState(false);
	const [valid, setValid] = useState(false);

	const validatePassword = (password: string) => {
		const passwordPattern =
			/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-_]).{8,}$/;

		const isStrong = passwordPattern.test(password);

		setValid(isStrong);
		onChange(password, isStrong);
	};

	return (
		<div className="password-field-container">
			<div className="password-input-container">
				<input
					type={showPassword ? 'text' : 'password'}
					placeholder={placeHolder}
					className="password-input"
					onChange={(e) => validatePassword(e.target.value)}
				></input>
				<button
					type="button"
					className="toggle-button"
					onClick={() => setShowPassword(!showPassword)}
				>
					{showPassword ? (
						<EyeOff className="icon" />
					) : (
						<Eye className="icon" />
					)}
				</button>
			</div>
			<ValidationError show={!valid && showError} errorText={errorText} />
		</div>
	);
};
