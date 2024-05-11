import React from 'react'
import PropTypes from 'prop-types'
import { Avatar, Stack, Typography } from '@mui/material'
import { FaWhatsapp } from 'react-icons/fa'
import { LocalPhone, LocationOn } from '@mui/icons-material'

const BranchInfo = props => {
    const { branch } = props
    return (
        <Stack spacing={1} mt={2} alignItems={"center"}>
            <Typography variant='h6' textAlign={"center"}>فرع {branch.branchName}</Typography>
            <Stack direction={"row"} spacing={2} flexWrap={"wrap"} useFlexGap justifyContent={"center"}>
                {branch.whatsApp && branch.whatsApp.map((element, index) =>
                    <Stack alignItems={"center"} key={index}>
                        <a target='_blank' href={`https://wa.me/${element}`} rel="noreferrer">
                            <Avatar sx={{ width: 30, height: 30, background: "white" }}>
                                <FaWhatsapp />
                            </Avatar>
                        </a>
                        <Typography color={"text.primary"}>
                            WhatsApp {branch.whatsApp.length > 1 ? `- ${index + 1}` : ""}
                        </Typography>
                    </Stack>
                )}
                {branch.phone && branch.phone.map((phone, index) =>
                    <Stack alignItems={"center"} key={index}>
                        <a target='_blank' href={`tel:${phone}`} rel="noreferrer">
                            <Avatar sx={{ width: 30, height: 30, background: "white" }}>
                                <LocalPhone />
                            </Avatar>
                        </a>
                        <Typography color={"text.primary"}>
                            Mobile {branch.phone.length > 1 ? `- ${index + 1}` : ""}
                        </Typography>
                    </Stack>
                )}
                {branch.location && <Stack alignItems={"center"}>
                    <a target='_blank' href={branch.location} rel="noreferrer">
                        <Avatar sx={{ width: 30, height: 30, background: "white" }}>
                            <LocationOn />
                        </Avatar>
                    </a>
                    <Typography color={"text.primary"}>
                        Location
                    </Typography>
                </Stack>}
            </Stack>
        </Stack>
    )
}

BranchInfo.propTypes = {
    branch: PropTypes.object.isRequired
}

export default BranchInfo
