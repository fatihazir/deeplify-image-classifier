import React from 'react';
import { Button } from '@mui/material';

const CustomButton = ({ text, onClick, buttonColor, textColor }) => {
    return (
        <Button
            variant="contained"
            onClick={onClick}
            style={{
                backgroundColor: buttonColor,
                color: textColor,
                borderRadius: '3rem',
                padding: '0.75rem 1.5rem',
                fontSize: '1rem',
                fontWeight: 'bold',
            }}
        >
            {text}
        </Button>
    );
};

export default CustomButton;