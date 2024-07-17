import React from 'react';
import { Box } from '@mui/material';

const ScrollDownIndicator = () => {
    return (
        <Box
            sx={{
                position: 'fixed',
                bottom: '15vh',
                right: '10vh',
                zIndex: 1500,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                animation: 'bounce 2s infinite',
                cursor: 'pointer',
            }}
        >
            <Box
                sx={{
                    width: 0,
                    height: 0,
                    borderLeft: '1rem solid transparent',
                    borderRight: '1rem solid transparent',
                    borderTop: '1.5rem solid #1976d2',
                }}
            />
        </Box>
    );
};

export default ScrollDownIndicator;