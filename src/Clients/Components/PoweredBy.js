import { Box, Typography } from '@mui/material'
import React from 'react'
import { styled } from '@mui/material/styles';

const Link = styled("a")(({ theme }) => ({
    color: "#000",
    // textDecoration: "none",
    fontWeight:"bolder",
    // "&:hover": {
    //     textDecoration: "underline",
    // }
}));

const PoweredBy = () => {
    return (
        <Box height={"30px"} textAlign={"center"} bgcolor={"white"}>
            <Typography variant='h5' color={"black"}>Powered By <Link target='_blank' rel="noreferrer" href={`./`}>Mountain</Link></Typography>
        </Box>
    )
}

export default PoweredBy