import { Box, Button } from '@mui/material';

const Home = () => {
	return (
		<Box
			sx={{
				flex: 1,
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'center',
				flexDirection: 'column',
				gap: 5
			}}
		>
			<img src="/hero.jpg" style={{ maxHeight: '50%', maxWidth: '50%' }} alt="William Lundgren" />
			<Button
				size="large"
				variant="contained"
				onClick={() => (window.location.href = 'mailto:william.lundgren94@gmail.com')}
			>
				Kontakta mig
			</Button>
		</Box>
	);
};

export default Home;