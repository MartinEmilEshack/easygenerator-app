import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import { User } from '../../@types/user-data';
import logOutReq from '../../requests/logout.req';
import usersListReq from '../../requests/users-list.req';

import './Profile.page.css';

const ProfilePage: React.FC = () => {
	const jumpToPage = useNavigate();

	const [users, setUsers] = useState<Array<User>>([]);

	useEffect(() => {
		usersListReq().then((resp) => {
			if (resp.statusCode === 403) jumpToPage('/sign-in');
			else setUsers(resp.data?.users ?? []);
		});
	}, []);

	const logOut = () => {
		logOutReq();
		jumpToPage('/sign-in');
	};

	return (
		<div className="profile-page">
			<div className="header">
				<h1>Profile Page</h1>
				<button type="submit" className="primary-button" onClick={logOut}>
					Logout
				</button>
			</div>
			<h4>Look at all the people who registered..</h4>
			<div className="users-list">
				{users.map((user) => (
					<div key={user.id} className="user-view">
						{user.email}
					</div>
				))}
			</div>
		</div>
	);
};

export default ProfilePage;
