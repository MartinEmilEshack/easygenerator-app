import React from 'react';
import './ValidationError.css';

const ValidationError: React.FC<{
	show: boolean;
	errorText: string;
}> = ({ show, errorText }) => {
	if (show) return <div className="validation-error">* {errorText}</div>;
	else return <></>;
};

export default ValidationError;
