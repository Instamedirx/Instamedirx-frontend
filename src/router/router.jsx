import {
	createBrowserRouter,
	Navigate,
} from 'react-router-dom';
import App from '../App';
import {
	AccountType,
	Qualifications,
	RegistrationDetails,
	Signup,
} from '../features/Auth/pages';
import EmailVerification from '../features/Auth/pages/client/pages/EmailVerification';
import ProtectedRoutes from '../features/Dashboards/ProtectedRoutes';
import DashboardLayout from '../features/Dashboards/layouts/DashboardRoutes';
import clientRoutes from 'features/Dashboards/Client/router';
import AllDoctors from 'features/Dashboards/Client/components/AllDoctors';
const router = createBrowserRouter([
	{
		path: '/',
		element: <App />,
	},
	{
		path: '/signup',
		element: <AccountType />,
	},
	{
		path: '/signup/:accountType',
		element: <Signup />,
	},
	{
		path: '/signup/:accountType/registration',
		element: <RegistrationDetails />,
	},
	{
		path: '/signup/:accountType/verification',
		element: <EmailVerification />,
	},
	{
		path: '/signup/:accountType/qualification',
		element: <Qualifications />,
	},
	{
		path: '/dashboard/All doctors',
		element: (
			<ProtectedRoutes>
				<AllDoctors/>
			</ProtectedRoutes>
		),
	},
	{
		path: '/dashboard',
		element: (
			<ProtectedRoutes>
				<DashboardLayout />
				
			</ProtectedRoutes>
		),
		children: clientRoutes
	},
]);

export default router;
