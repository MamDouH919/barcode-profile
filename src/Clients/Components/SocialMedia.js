import { Avatar, Box, Paper, Stack, Typography } from '@mui/material'
import React from 'react'
import { FaFacebookF, FaInstagram, FaTiktok } from 'react-icons/fa'
import CustomLink from './CustomLink'

const Icons = {
    facebook: <FaFacebookF color='#1877F2' size={25} />,
    instagram: <FaInstagram color='#DD2A7B' size={25} />,
    tikTok: <FaTiktok color='white' size={25} />,
}

const SocialMedia = ({
    social,
    secondColor
}) => {
    return (
        <Stack alignItems={"center"}>
            <Stack mb={1}>
                <Typography variant='h4' fontWeight={"bolder"}>Social Media</Typography>
                <Box height={"3px"} width={"50%"} mt={0.5} bgcolor={secondColor} mx={"auto"} />
            </Stack>
            <Stack
                p={1}
                component={Paper}
                sx={{ borderRadius: "40px" }}
                elevation={5}
                direction={"row"}
                spacing={2}
                bgcolor={"inherit"}
            >
                {social.map((e) => <CustomLink link={e.link}>
                    <Avatar sx={{ bgcolor: "white" }}>
                        {Icons[e.type]}
                    </Avatar>
                </CustomLink>)}
            </Stack>
        </Stack>
    )
}

export default SocialMedia