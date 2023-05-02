export const authEndpoint = 'https://accounts.spotify.com/authorize';
export const clientId = process.env.REACT_APP_CLIENT_ID;
export const liveURL = process.env.REACT_APP_LIVE_URL;
export const devURL = 'https://localhost:5173/';


export const scopes = [
    'playlist-read-collaborative',
    'playlist-modify-public',
    'playlist-read-private',
    'playlist-modify-private',
    'app-remote-control',
    'streaming',
    'user-read-email',
    'user-read-private',
    'user-library-modify',
    'user-library-read',
    'user-top-read',
    'user-read-playback-position',
    'ugc-image-upload',
    'user-modify-playback-state',
    'user-read-playback-state',
    'user-read-currently-playing',
    'user-follow-modify',
    'user-follow-read',
    'user-read-recently-played'
    ];    