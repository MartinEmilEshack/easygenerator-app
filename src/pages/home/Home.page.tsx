import React from 'react';
import { Link } from 'react-router';
import './Home.css';

const HomePage: React.FC = () => {
	return (
		<div className="home">
			<div className="welcome">
				<img
					className="cookie-monster"
					alt="cookie monster"
					src={
						'https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExeGZjc2FzZjBzYXNmYnJ0YmYwd2l6dTlqMDgwY3ZlMzVmOTExNTFzeSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/e6BTJ8bAak7V5Kv2FB/giphy.gif'
					}
				/>

				<h1>Welcome Easygenerators !</h1>
				<h3>I was expecting you !</h3>
				<p>
					Our service does absolutely nothing, you just register and then
					sign in, and then you see other humans that also registered for
					some reason.. NOT THE ACTUAL HUMANS OFFCOURSE ! just thier
					emails.. We're way far from applying that feature trust me.. To
					be honest I didn't add a CAPTCHA and with AI taking over our
					lives I'm not even sure if they're humans.. I would invite you to
					chat about that more but our service doesn't have that
					functionality.. sorry.. We're not really planning to add it in
					the future either to be honest.. you just register and sign in..
					talking about unconditional registration ❤️ .. I'm saying we as
					in team but actually I'm a one person, You won't find my email
					because I'm not registered but that shouldn't influence you, I'm
					on a services free diet.. but you ! no you look great 😉 you should
					definitely register !
				</p>

				<div className="home-page-options">
					<Link to={{ pathname: '/register' }}>
						<button className="primary-button">Register</button>
					</Link>
					<Link to={{ pathname: '/sign-in' }}>
						<button className="secondary-button">Sign in</button>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default HomePage;
