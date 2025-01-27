import React from 'react';
import { useSelector } from 'react-redux';
import { useRoutes } from 'react-router-dom';

import clientRoutes from '../Client/router';
import ClientLayout from '../Client/layout';

const DashboardLayout = () => {
	const selectedAccountType = useSelector(
		state => state.signup.selectedAccountType
	);
	console.log('Layout rendered');
	let routes;
	console.log(selectedAccountType);
	if (selectedAccountType === 'client') {
		return <ClientLayout />;
	} else if (selectedAccountType === 'doctor') {
		return <DoctorLayout />;
	} else if (selectedAccountType === 'pharmacist') {
		return <PharmacistLayout />;
	} else {
		return <div>No valid account type found</div>;
	}
	console.log(selectedAccountType);

	return useRoutes([routes]);
};

export default DashboardLayout;
