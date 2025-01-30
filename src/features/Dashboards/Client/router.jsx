import Home from './pages/Home';
import Services from './pages/Services';
import Bookings from './pages/Bookings';
import Pharmacy from './pages/Pharmacy';
import Messages from './pages/Messages';
import Settings from './pages/Settings';
import Account from './pages/Account';

const clientRoutes = [
	{ path: '', element: <Home /> },
	{ path: 'bookings', element: <Bookings /> },
	{ path: 'pharmacy', element: <Pharmacy /> },
	{ path: 'services', element: <Services /> },
	{ path: 'messages', element: <Messages /> },
	{ path: 'settings', element: <Settings /> },
	{ path: 'accounts', element: <Account /> },
];

export default clientRoutes;
