import React from 'react';
import { Box, Typography } from '@mui/material';
import { colors } from '../../utilities/colors/colors';

const Footer = () => {
    return (
        <Box
            sx={{
                backgroundColor: colors.footerBackgroundColor,
                color: colors.footerTextColor,
                padding: '2vh',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                position: 'fixed',
                bottom: 0,
                width: '100%',
            }}
        >
            <Typography variant="body1">
                Developed By Fatih HAZIR
            </Typography>
        </Box>
    );
};

export default Footer;