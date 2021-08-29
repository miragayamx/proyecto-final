import React, { useEffect, useState } from 'react';
import AuthContext from '../context/AuthContext';
import baseUrl from '../url';

const AuthProvider = ({ children }) => {
	const [ currentUser, setCurrentUser ] = useState(null);

	useEffect(() => {
		fetch(`${baseUrl}/usuario/`)
			.then((data) => data.json())
			.then((userInfo) => setCurrentUser(userInfo.usuario));
	}, []);

	const changeUser = (user) => {
		const usuario = { usuario: user };
		fetch(`${baseUrl}/usuario/`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(usuario)
		})
			.then((data) => data.json())
			.then((userInfo) => setCurrentUser(userInfo.usuario))
			.catch((err) => err.message);
	};

	return <AuthContext.Provider value={{ currentUser, changeUser }}>{children}</AuthContext.Provider>;
};

export default AuthProvider;