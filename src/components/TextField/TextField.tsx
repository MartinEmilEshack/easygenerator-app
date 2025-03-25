import React, { useState } from 'react';
import ValidationError from '../ValidationError/ValidationError';
import './TextField.css';

export const TextField: React.FC<{
	onChange: (text: string, valid: boolean) => void;
	showError: (valid: boolean) => boolean;
	noValidation?: boolean;
	placeHolder: string;
	errorText?: string;
	minLength?: number;
}> = ({
	onChange,
	placeHolder,
	showError,
	errorText = '',
	minLength = 0,
	noValidation = false,
}) => {
	const [valid, setValid] = useState(false);

	const validateText = (text: string) => {
		const isValid = text.length >= minLength;

		setValid(isValid);
		onChange(text, isValid);
	};

	return (
		<div className="text-field-container">
			<div className="text-input-container">
				<input
					type="text"
					placeholder={placeHolder}
					className="text-input"
					onChange={(e) => validateText(e.target.value)}
				></input>
			</div>
			<ValidationError
				show={showError(valid) || noValidation}
				errorText={errorText}
			/>
		</div>
	);
};
