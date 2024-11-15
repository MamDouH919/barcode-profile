import React from 'react'
import { Avatar, Box, Paper, Stack, Typography } from '@mui/material'
import { FaWhatsapp, FaPhoneAlt } from 'react-icons/fa'
import { IoLocationSharp } from 'react-icons/io5'

const Icons = {
    phone: <FaPhoneAlt color='green' size={25} />,
    location: <IoLocationSharp color='#EA4335' size={30} />,
    whatsApp: <FaWhatsapp color='#25D366' size={30} />,
}

const BranchInfo = ({ branches, secondColor }) => {
    return (
        <Stack spacing={1} alignItems={"center"}>
            <Stack mb={1} >
                <Typography variant='h4' fontWeight={"bolder"}>Our Branches</Typography>
                <Box height={"3px"} width={"50%"} mt={1} bgcolor={secondColor ?? "#000"} mx={"auto"} />
            </Stack>
            {branches.map((branch, i) =>
                <Stack spacing={1} alignItems={"center"}>
                    <Typography fontSize={22} textAlign={"center"} fontWeight={"bolder"}>{branch.branchName}</Typography>
                    <Stack
                        p={1}
                        component={Paper}
                        sx={{ borderRadius: "40px" }}
                        elevation={5}
                        direction={"row"}
                        spacing={2}
                        bgcolor={"inherit"}
                    >
                        {branch.contact.map((e) =>
                            <Avatar sx={{ bgcolor: "white" }}>
                                {Icons[e.type]}
                            </Avatar>
                        )}
                    </Stack>
                </Stack>
            )}


        </Stack>
    )
}

export default BranchInfo
