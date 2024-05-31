import * as React from 'react';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import { FaFacebookF, FaInstagram, FaWhatsapp, FaTiktok, FaSnapchat, FaYoutube, FaPhone } from "react-icons/fa";
import { Avatar } from '@mui/material';
import { FaXTwitter } from 'react-icons/fa6';
import { HiUserGroup } from 'react-icons/hi';

const Item = styled("a")(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    maxWidth: 400,
    textDecoration: "none",
    display: "block",
    margin: "8px 0",
    borderRadius: "8px",
}));

const Icons = {
    facebook: <FaFacebookF />,
    instagram: <FaInstagram />,
    whatsApp: <FaWhatsapp />,
    tikTok: <FaTiktok />,
    snapChat: <FaSnapchat />,
    twitter: <FaXTwitter />,
    youtube: <FaYoutube />,
    phone: <FaPhone />,
    group: <HiUserGroup />,
}

export default function ZeroWidthStack(props) {
    const { link, icon, name } = props
    return (
        <Box>
            <Item
                href={link}
                target="_blank"
            >
                <Stack spacing={2} direction="row" alignItems="center">
                    <Stack>
                        <Avatar sx={{ width: 30, height: 30, background: "white" }}>
                            {Icons[icon]}
                        </Avatar>
                    </Stack>
                    <Stack sx={{ minWidth: 0 }}>
                        <Typography color={"text.primary"} noWrap>{name}</Typography>
                    </Stack>
                </Stack>
            </Item>
        </Box>
    );
}