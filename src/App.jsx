import { MantineProvider } from '@mantine/core';
import Login from './features/Auth/pages/Login';

const App = () => {
	return (
		<MantineProvider>
			<main>
				<Login />
			</main>
		</MantineProvider>
	);
};

export default App;
