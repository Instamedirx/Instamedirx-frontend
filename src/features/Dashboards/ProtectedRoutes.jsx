import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

const ProtectedRoutes = ({ children }) => {
	const selectedAccountType = useSelector(
		state => state.signup.selectedAccountType
	);

	if (!selectedAccountType) {
		return (
			<Navigate
				to='/signup'
				replace
			/>
		);
	}
	return children;
};

export default ProtectedRoutes;
