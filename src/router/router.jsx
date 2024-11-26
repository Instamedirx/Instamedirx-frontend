import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import {
	AccountType,
	RegistrationDetails,
	Signup,
} from '../features/auth/pages';
import EmailVerification from '../features/auth/pages/client/pages/EmailVerification';

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
]);

export default router;
