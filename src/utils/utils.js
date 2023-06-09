import jwt_decode from 'jwt-decode';

export const animationCreate = () => {
	if (typeof window !== 'undefined') {
		window.WOW = require('wowjs');
	}
	new WOW.WOW({ live: false }).init();
};
export const getAccessToken = async () => {
	let access_token = localStorage.getItem('access_token');
	const expired = localStorage.getItem('access_token_expiry')
		? Number(localStorage.getItem('access_token_expiry')) <
		  Math.floor(Date.now() / 1000)
		: false;
	if (!access_token || expired) {
		const url =
			'https://realm.mongodb.com/api/client/v2.0/app/data-otnel/auth/providers/api-key/login';
		await fetch(url, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				key: process.env.NEXT_PUBLIC_MONGODB_API_KEY,
			}),
		})
			.then((response) => response.json())
			.then((data) => {
				console.log(data);
				const decodedToken = jwt_decode(data.access_token);
				localStorage.setItem('access_token', data.access_token);
				localStorage.setItem('access_token_expiry', decodedToken.exp);
				access_token = data.access_token;
			})
			.catch((error) => console.error('Error access data:', error));
	}
	return access_token;
};
