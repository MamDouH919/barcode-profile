import { Box, Paper, Typography } from '@mui/material'
import React from 'react'
import { styled } from '@mui/material/styles';

const Link = styled("a")(({ theme }) => ({
    color: "#000",
    // textDecoration: "none",
    fontWeight: "bolder",
    // "&:hover": {
    //     textDecoration: "underline",
    // }
}));

const PoweredBy = () => {
    return (
        <Box component={Paper} textAlign={"center"} py={3}>
            <Typography variant='h5' color={"white"}>
                Powered By
                <Link target='_blank' rel="noreferrer" href={`./`} style={{ color: "white", padding: "0 8px" }}>
                    Mountain
                </Link>
            </Typography>
        </Box>
    )
}

export default PoweredBy