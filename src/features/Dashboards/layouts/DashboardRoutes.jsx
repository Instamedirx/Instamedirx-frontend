import React from 'react';
import { useSelector } from 'react-redux';
import { useRoutes } from 'react-router-dom';
import '@mantine/carousel/styles.css';

import clientRoutes from '../Client/router';
import ClientLayout from '../Client/layout';
import {
	createTheme,
	MantineProvider,
} from '@mantine/core';

const theme = createTheme({
	breakpoints: {
		xs: '450px',
		xxs: '520px',
		sm: '640px',
		md: '768px',
		lg: '940px',
		xl: '1024px',
	},
});

const DashboardLayout = () => {
	const selectedAccountType = useSelector(
		state => state.signup.selectedAccountType
	);
	let routes;
	if (selectedAccountType === 'client') {
		return (
			<MantineProvider theme={theme}>
				<ClientLayout />
			</MantineProvider>
		);
	} else if (selectedAccountType === 'doctor') {
		return (
			<MantineProvider theme={theme}>
				<DoctorLayout />
			</MantineProvider>
		);
	} else if (selectedAccountType === 'pharmacist') {
		return (
			<MantineProvider theme={theme}>
				<PharmacistLayout />
			</MantineProvider>
		);
	} else {
		return <div>No valid account type found</div>;
	}
};

export default DashboardLayout;
