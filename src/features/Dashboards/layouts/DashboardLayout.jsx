import React from 'react';
import { useSelector } from 'react-redux';
import ClientLayout from '../Client/layout';

const DashboardLayout = () => {
	const selectedAccountType = useSelector(
		state => state.signup.selectedAccountType
	);

	if (selectedAccountType === 'client') {
		return <ClientLayout />;
	} else if (selectedAccountType === 'doctor') {
		return <DoctorLayout />;
	} else if (selectedAccountType === 'pharmacist') {
		return <PharmacistLayout />;
	}

	return <div>No valid account type found</div>;
};

export default DashboardLayout;
