

import React from "react";
import Box from "@mui/material/Box";
import CircularProgress from "@mui/material/CircularProgress";
import Typography from "@mui/material/Typography";
import Snackbar from "@mui/material/Snackbar";
import { Alert } from "@mui/material";


type StatusLoadingType = {
    loading: boolean;
    done: boolean;
    error: string;
    firstVisit: boolean;
}

export const Status: React.FC<StatusLoadingType> = React.memo(({
    loading, done, error, firstVisit
}) => { 
    // if (firstVisit) return <div>sasoaoiuwiuduw</div>
    
    return (
        <>
            {
                loading ?
                    <Box sx = {{height: 130}}>
                        <CircularProgress/>
                    </Box> 
                    : done ?
                        <Typography>Done</Typography>
                        : error ?
                        <Snackbar>
                            <Alert>
                                Something went wrong
                            </Alert>
                        </Snackbar> : <></> 
            }
        </>
    )
})