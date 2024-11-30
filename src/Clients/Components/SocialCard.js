import React from 'react'
import { styled } from '@mui/material/styles';
import { Avatar, Paper, Stack, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaInstagram, FaPhoneAlt, FaSnapchatGhost, FaTiktok, FaWhatsapp, FaYoutube } from 'react-icons/fa';
import { ArrowForward } from '@mui/icons-material';
import { IoLocationSharp } from 'react-icons/io5';
import { FaXTwitter } from 'react-icons/fa6';
import { HiUserGroup } from 'react-icons/hi';

const PREFIX = 'InfoQr';

const classes = {
    paper: `${PREFIX}-paper`,
};

const Root = styled(Link)(({ theme }) => ({
    textDecoration: "none",
    [`& .${classes.paper}`]: {
        borderRadius: "40px",
    },
}));

const Icons = {
    facebook: <FaFacebookF color='#1877F2' size={25} />,
    instagram: <FaInstagram color='#DD2A7B' size={25} />,
    tikTok: <FaTiktok color='white' size={25} />,
    twitter: <FaXTwitter color='#000' size={25} />,
    snapChat: <FaSnapchatGhost color='#FFFC00' size={25} />,
    phone: <FaPhoneAlt color='green' size={25} />,
    location: <IoLocationSharp color='#EA4335' size={30} />,
    whatsApp: <FaWhatsapp color='#25D366' size={30} />,
    youtube: <FaYoutube color='#FF0000' size={30} />,
    group: <HiUserGroup color='#1877F2' size={30}/>,
}

const SocialCard = ({
    type,
    to,
    title,
    color
}) => {
    return (
        <Root to={to} target='_blank'>
            <Stack
                component={Paper}
                p={2}
                direction={"row"}
                alignItems={"center"}
                justifyContent={"space-between"}
                className={classes.paper}
                elevation={5}
            >
                <Stack
                    direction={"row"}
                    alignItems={"center"}
                    spacing={2}
                >
                    <Avatar sx={{ bgcolor: type === "snapChat" ? "#000" : "#fff" }}>
                        {Icons[type]}
                    </Avatar>
                    <Typography fontSize={18}>
                        {title ?? type}
                    </Typography>
                </Stack>
                <Avatar sx={{ bgcolor: color }}>
                    <ArrowForward sx={{ color: (theme) => theme.palette.getContrastText(color) }} />
                </Avatar>
            </Stack>
        </Root>
    )
}

export default SocialCard