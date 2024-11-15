import React, { useState } from 'react'
import { Avatar, Box, Paper, Stack, Typography } from '@mui/material'
import Grid from '@mui/material/Unstable_Grid2'
import { styled } from '@mui/material/styles';

import ZeroWidthStack from '../../Item';
import ProfileImage from '../Components/ProfileImage';
import BranchInfo from '../Components/BranchInfo';
import PoweredBy from '../Components/PoweredBy';
import BaitWardDialog from '../Components/BaitWardDialog';
import ItemNoLink from '../Components/Item';
import { Helmet } from 'react-helmet';
import { FaFacebookF, FaInstagram } from 'react-icons/fa';
import SocialMedia from '../Components/SocialMedia';

const PREFIX = 'InfoQr';

const classes = {
    leftWrapper: `${PREFIX}-leftWrapper`,
    content: `${PREFIX}-content`,
    image: `${PREFIX}-image`,
    item: `${PREFIX}-item`,
    contentImg: `${PREFIX}-contentImg`,
    qrCodeData: `${PREFIX}-qrCodeData`,
};

const Root = styled("div")((
    {
        theme
    }
) => ({
    display: "grid",
    height: "100%",
    [`& .${classes.qrCodeData}`]: {
        gridRow: " 1 / 100"
    },
    [`& .${classes.leftWrapper}`]: {
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        height: "100%",
        position: "relative",
        [`&::before`]: {
            content: "''",
            height: "100%",
            width: "100%",
            backdropFilter: "blur(10px)",
            background: "rgba(0,0,0,0.7)",
            position: "absolute",
            top: 0,
            left: 0,
        },
    },
    [`& .${classes.content}`]: {
        height: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        position: "relative",
        padding: theme.spacing(3, 2)
    },
    [`& .${classes.image}`]: {
        height: "250px",
        width: "250px",
        borderRadius: "50%"
    },
}));


const InfoQr = ({ client, id }) => {
    const [open, setOpen] = useState(false);

    return (
        <Root>
            <Helmet>
                <title>Mountain | {client.name}</title>
            </Helmet>
            {open && id === "bait-ward" && <BaitWardDialog open={open} setOpen={setOpen} />}
            <Grid container className={classes.qrCodeData}>
                <Grid xs={12} md={6} position={"relative"}>
                    <Box
                        className={classes.leftWrapper}
                        sx={{ backgroundImage: `url(${require(`../../imgs/${client.image}`)})`, }}
                    >
                        <div className={classes.content}>
                            <ProfileImage
                                clientColor={client.color}
                                img={require(`../../imgs/${client.image}`)}
                                name={client.name}
                                secondColor={client.secondColor}
                            />
                            <Typography
                                variant='h1'
                                fontSize={40}
                                my={2}
                                textAlign={"center"}
                                textTransform={"capitalize"}
                                fontWeight={"bolder"}
                            >
                                {client.name}
                            </Typography>
                        </div>
                    </Box>
                </Grid>
                <Grid xs={12} md={6} bgcolor={client.color}>
                    <Stack spacing={1} className={classes.content}>
                        {client.social.length > 0 &&
                            <SocialMedia social={client.social} secondColor={client.secondColor} />}

                        {(client.phone || client.whatsApp) && <Stack mb={1} mt={1}>
                            <Typography variant='h4'>Contact Us</Typography>
                            <Box height={"3px"} width={"50%"} mt={1} bgcolor={"#000"} mx={"auto"} />
                        </Stack>}

                        <Stack direction={"row"} spacing={2} flexWrap={"wrap"} justifyContent={"center"} useFlexGap>
                            {client.whatsApp && <ZeroWidthStack
                                link={`https://wa.me/${client.whatsApp.link}`}
                                icon={"whatsApp"}
                                name={client.whatsApp.name}
                            />}
                            {client.phone && <ZeroWidthStack
                                link={`tel:${client.phone.link}`}
                                icon={"phone"}
                                name={client.phone.name}
                            />}
                        </Stack>
                        <BranchInfo branches={client.branches} secondColor={client.secondColor} />
                    </Stack>
                </Grid>

            </Grid>
            <PoweredBy />
        </Root>
    )
}

export default InfoQr
