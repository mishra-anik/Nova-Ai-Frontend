import { useState, useEffect, createContext } from "react";
import axios from "axios";

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
	const apiUrl = import.meta.env.VITE_API_URL;

	const [isAuthenticated, setIsAuthenticated] = useState(null);
	const [user, setUser] = useState(null);

	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const checkAuth = async () => {
			try {
				const res = await axios.get(`${apiUrl}/me`, {
					withCredentials: true,
				});
				setIsAuthenticated(true);
				setUser(res.data.user);
			} catch {
				setIsAuthenticated(false);
				setUser(null);
			} finally {
				setLoading(false);
			}
		};
		checkAuth();
	}, []);

	return (
		<AuthContext.Provider
			value={{ isAuthenticated, setIsAuthenticated, user, setUser , loading }}
		>
			{children}
		</AuthContext.Provider>
	);
};

export default AuthProvider;
