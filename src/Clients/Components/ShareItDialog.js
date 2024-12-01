import { Avatar, Dialog, DialogContent, DialogTitle, Paper, Snackbar, Stack } from '@mui/material'
import React, { useState } from 'react'
import {
    FacebookMessengerShareButton,
    FacebookShareButton,
    TelegramShareButton,

    TwitterShareButton,
    WhatsappShareButton,
} from 'react-share';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { FaFacebookF, FaXTwitter } from 'react-icons/fa6';
import { FaFacebookMessenger, FaTelegramPlane, FaWhatsapp } from 'react-icons/fa';
import { MdContentCopy } from 'react-icons/md';

const Icons = {
    facebook: <FaFacebookF color='#1877F2' size={23} />,
    messenger: <FaFacebookMessenger color='#168AFF' size={23} />,
    twitter: <FaXTwitter color='#000' size={23} />,
    whatsApp: <FaWhatsapp color='#25D366' size={23} />,
    telegram: <FaTelegramPlane color='#0088cc' size={23} />,
    copy: <MdContentCopy color='grey' size={23} />,
}

const AvatarComp = ({ color, children, ...props }) => {
    return (
        <Paper sx={{ bgcolor: "transparent", borderRadius: "50%", border: `1px solid ${color}` }} elevation={4} {...props}>
            <Avatar sx={{ bgcolor: "transparent", border: `1px solid ${color}` }}>
                {children}
            </Avatar>
        </Paper>
    )
}

const ShareItDialog = ({
    open,
    handleClose,
    keyValue,
    hashtag,
    color
}) => {
    const [snackbarOpen, setSnackbarOpen] = useState(false);
    const handleCloseSnackbar = () => {
        setSnackbarOpen(false);
    };


    return (
        <>
            <Snackbar
                open={snackbarOpen}
                autoHideDuration={3000}
                onClose={handleCloseSnackbar}
                message="Url was copied!"
            />
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"

            >
                <DialogTitle id="alert-dialog-title">
                    Share Link
                </DialogTitle>
                <DialogContent sx={{ background: "white", padding: "16px !important" }}>
                    <Stack direction={"row"} spacing={2} flexWrap={"wrap"} py={5} useFlexGap justifyContent={"center"}>
                        <FacebookShareButton
                            url={`qr.mountain-egy.site/${keyValue}`}
                            quote={'Dummy text!'}
                            hashtag={hashtag}
                        >
                            {/* <FacebookIcon size={32} round /> */}
                            <AvatarComp color={color}>
                                {Icons.facebook}
                            </AvatarComp>
                        </FacebookShareButton>
                        <FacebookMessengerShareButton
                            url={`qr.mountain-egy.site/${keyValue}`}
                            quote={'Dummy text!'}
                            hashtag={hashtag}
                        >
                            <AvatarComp color={color}>
                                {Icons.messenger}
                            </AvatarComp>
                        </FacebookMessengerShareButton>
                        <WhatsappShareButton
                            url={`qr.mountain-egy.site/${keyValue}`}
                            quote={'Dummy text!'}
                            hashtag={hashtag}
                        >
                            <AvatarComp color={color}>
                                {Icons.whatsApp}
                            </AvatarComp>
                        </WhatsappShareButton>
                        <TwitterShareButton
                            url={`qr.mountain-egy.site/${keyValue}`}
                            quote={'Dummy text!'}
                            hashtag={hashtag}
                        >
                            <AvatarComp color={color}>
                                {Icons.twitter}
                            </AvatarComp>
                        </TwitterShareButton>
                        <TelegramShareButton
                            url={`qr.mountain-egy.site/${keyValue}`}
                            quote={'Dummy text!'}
                            hashtag={hashtag}
                        >
                            <AvatarComp color={color}>
                                {Icons.telegram}
                            </AvatarComp>
                        </TelegramShareButton>
                        <CopyToClipboard text={`qr.mountain-egy.site/${keyValue}`}>
                            <AvatarComp
                                onClick={() => {
                                    setSnackbarOpen(true)
                                }}
                                color={color}
                            >
                                {Icons.copy}
                            </AvatarComp>
                        </CopyToClipboard>
                    </Stack>
                </DialogContent>
            </Dialog>
        </>
    )
}

export default ShareItDialog