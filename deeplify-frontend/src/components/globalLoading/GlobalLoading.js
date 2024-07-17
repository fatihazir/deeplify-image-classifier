import React, { memo, useContext } from 'react';
import { GlobalLoadingContext } from '../../store/context/GlobalLoadingContext';
import { CircularProgress, Box } from '@mui/material';

const GlobalLoading = memo(() => {
    const { showGlobalLoading } = useContext(GlobalLoadingContext);

    return (
        <>
            {showGlobalLoading && (
                <Box
                    sx={{
                        position: 'fixed',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        zIndex: 1300,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        backgroundColor: 'rgba(255, 255, 255, 0.8)',
                    }}
                >
                    <CircularProgress size="3.75rem" style={{ color: '#323232' }} />
                </Box>
            )}
        </>
    );
});

export default GlobalLoading;