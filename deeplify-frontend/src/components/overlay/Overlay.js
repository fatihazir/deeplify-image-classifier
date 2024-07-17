import React, { memo, useContext } from 'react';
import { OverlayContext } from '../../store/context/OverlayContext';
import { Box } from '@mui/material';

const Overlay = memo(() => {
    const { showOverlay } = useContext(OverlayContext);

    return (
        <>
            {showOverlay && (
                <Box
                    sx={{
                        position: 'fixed',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        zIndex: 1200,
                        backgroundColor: 'black',
                        opacity: 0.5,
                    }}
                ></Box>
            )}
        </>
    );
});

export default Overlay;