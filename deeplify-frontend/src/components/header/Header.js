import React from 'react';
import { AppBar, Toolbar, Box, Typography } from '@mui/material';
import { ReactComponent as Logo } from '../../assets/svgs/deeplify-logo.svg';
import { colors } from '../../utilities/colors/colors';

const Header = () => {
    return (
        <AppBar position="fixed" sx={{ backgroundColor: colors.headerBackgroundColor, boxShadow: colors.headerBoxShadow, padding: '3vh' }}>
            <Toolbar sx={{ justifyContent: 'space-between' }}>
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <Logo style={{ width: '12.5rem', height: 'auto' }} /> {/* 200px -> 12.5rem */}
                </Box>
                <Typography variant="h6" sx={{ color: colors.headerTextColor }}>
                    Image Classification Simulation
                </Typography>
                <Box sx={{ width: '12.5rem' }} /> {/* 200px -> 12.5rem */}
            </Toolbar>
        </AppBar>
    );
};

export default Header;