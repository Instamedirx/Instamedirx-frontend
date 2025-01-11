import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import {
	AccountType,
	Qualifications,
	RegistrationDetails,
	Signup,
} from '../features/Auth/pages';
import EmailVerification from '../features/Auth/pages/client/pages/EmailVerification';

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
]);

export default router;
