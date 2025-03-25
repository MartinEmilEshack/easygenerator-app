import React from 'react';
import { useLocation } from 'react-router';
import './NotFound.page.css';

const NotFoundPage: React.FC = (props) => {
	const location = useLocation();

	return (
		<div className="not-found-page">
			<img
				alt="not found gif"
				src="https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExcG1mYzdhamxienFsM2FiMnVpMzdhY204ZHNsa3NhZ3FidWNpZDQzciZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/3o7aTskHEUdgCQAXde/giphy.gif"
			/>
			<h2>I see you have discoverd my secret {location.pathname} page</h2>
			<h3>
				Wait what ! no.. ! I don't know what that page is ! what are you
				lookin for ???
			</h3>
		</div>
	);
};

export default NotFoundPage;
