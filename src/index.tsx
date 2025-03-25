import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router';
import './index.css';
import ForgotPasswordPage from './pages/forgot-password/ForgotPassword.page';
import HomePage from './pages/home/Home.page';
import NotFoundPage from './pages/not-found/NotFound.page';
import ProfilePage from './pages/profile/Profile.page';
import { RegisterPage } from './pages/register/Register.page';
import { ResetPasswordPage } from './pages/reset-password/ResetPassword.page';
import { SignInPage } from './pages/sign-in/SignIn.page';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(
	document.getElementById('root') as HTMLElement
);
root.render(
	<React.StrictMode>
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Navigate to="/home" />} />
				<Route path="/home" element={<HomePage />} />
				<Route path="/profile" element={<ProfilePage />} />
				<Route path="/register" element={<RegisterPage />} />
				<Route path="/sign-in" element={<SignInPage />} />
				<Route path="/forgot-password" element={<ForgotPasswordPage />} />
				<Route path="/reset-password" element={<ResetPasswordPage />} />
				<Route path="*" element={<NotFoundPage />} />
			</Routes>
		</BrowserRouter>
	</React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
