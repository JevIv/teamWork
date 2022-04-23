import React from 'react';
import CircularProgress from '@mui/material/CircularProgress';

export const ProgressBar = () => {
    return (
        <div style={{position:'absolute', left: '50%', top: '50%'}}>
            <CircularProgress/>
        </div>
    );
};
