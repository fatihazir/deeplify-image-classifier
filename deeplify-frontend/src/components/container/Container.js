import React from 'react';
import { Box } from '@mui/material';
import MainScreen from '../../screens/MainScreen';

const Container = () => {
    return (
        <Box sx={{ paddingTop: '15vh', paddingBottom: '10vh', height: '100vh', overflowY: 'auto' }}>
            <MainScreen />
        </Box>
    );
};

export default Container;