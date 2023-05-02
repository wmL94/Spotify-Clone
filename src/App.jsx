import './App.css';
import { Box } from '@mui/material';
import Login from './pages/Login';

function App({spotifyApi}) {
	return (
		<Box className="App">
			<h1>Spotify Clone by William Lundgren</h1>
			<Login />
		</Box>
	);
}

export default App;
