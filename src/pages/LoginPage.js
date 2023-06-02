import { useState, useContext } from 'react';
import { Box, TextField, Button, Typography } from '@mui/material';
import { AppContext } from '../contextProvider';
import { Navigate, useNavigate } from 'react-router-dom';

var users = {
    'godzi': '123456',
    'mithilesh': '654321'
}

const LoginPage = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const { isLoggedIn, setIsLoggedIn } = useContext(AppContext);

    const handleUsernameChange = (event) => {
        setUsername(event.target.value);
    };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };

    const handleLogin = () => {
        if (users[username] == password) {
            console.log('in')
            setIsLoggedIn(true);
            navigate('/home')
        }
        else {
            alert('Invalid Credentials');
        }
    };
    console.log('is',isLoggedIn)
    return (
        <div>
            {isLoggedIn ? <Navigate to="/home" /> : <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    minHeight: '100vh',
                }}
            >
                <Typography variant="h4" component="h1" gutterBottom>
                    Login
                </Typography>
                <Box
                    component="form"
                    sx={{
                        '& .MuiTextField-root': { mb: 2 },
                    }}
                >
                    <TextField
                        label="Username"
                        variant="outlined"
                        value={username}
                        onChange={handleUsernameChange}
                        fullWidth
                    />
                    <TextField
                        label="Password"
                        variant="outlined"
                        type="password"
                        value={password}
                        onChange={handlePasswordChange}
                        fullWidth
                    />
                    <Button variant="contained" onClick={handleLogin} fullWidth>
                        Login
                    </Button>
                </Box>
            </Box>}
        </div>
    );

};

export default LoginPage;
