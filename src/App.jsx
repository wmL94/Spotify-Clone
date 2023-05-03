import './App.css';
import { Box } from '@mui/material';
import Login from './pages/Login';
import Home from './pages/Home';
import Dashboard from './components/Dashboard/Dashboard';

function App({spotifyApi}) {
	return (
		<Box className="App">
			<Home/>
		</Box>
	);
}

export default App;
