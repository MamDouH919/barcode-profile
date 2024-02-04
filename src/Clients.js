import { Avatar, Box, Stack, Typography } from '@mui/material'
import Grid from '@mui/material/Unstable_Grid2'
import React from 'react'
import { styled } from '@mui/material/styles';
import ZeroWidthStack from './Item';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import { FaWhatsapp } from 'react-icons/fa';
import { useParams } from 'react-router-dom';
import clients from './clients.json'
import NotFound from './NotFound';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { Email } from '@mui/icons-material';
import { useTheme } from "@mui/system";

const PREFIX = 'Home';

const classes = {
    leftWrapper: `${PREFIX}-leftWrapper`,
    content: `${PREFIX}-content`,
    image: `${PREFIX}-image`,
    item: `${PREFIX}-item`,
    contentImg: `${PREFIX}-contentImg`,
    socialContent: `${PREFIX}-socialContent`,
    name: `${PREFIX}-name`,
};

const Root = styled('div')((
    {
        theme
    }
) => ({
    height: "100%",
    // backgroundImage: 'url(./imgs/profile.jpg)',
    [`& .${classes.leftWrapper}`]: {
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        height: "100%",
        position: "relative",
        [`&::before`]: {
            content: "''",
            height: "100%",
            width: "100%",
            background: "rgba(0,0,0,0.8)",
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
        padding: theme.spacing(3, 0),
        overflow: "auto"
    },
    [`& .${classes.socialContent}`]: {
        height: "700px",
        overflow: "auto",
        MsOverflowStyle: "none",  /* Internet Explorer 10+ */
        scrollbarWidth: "none",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        "::-webkit-scrollbar": {
            display: "none"
        }
    },
    [`& .${classes.name}`]: {
        textTransform: "capitalize",
    },
    [`& .${classes.image}`]: {
        height: "250px",
        width: "250px",
        borderRadius: "50%"
    },

    [`& .${classes.item}`]: {
        position: "relative",
        margin: theme.spacing(2, 4),
        width: "250px",
        height: "250px",
        borderRadius: "50%",
        // background: "#fafafa",
        overflow: "hidden",
        [theme.breakpoints.down('md')]: {
            margin: theme.spacing(1, 1),
        },
        "&:before": {
            content: "''",
            position: "absolute",
            inset: "-10px 70px",
            transition: "0.5s",
            animation: "animate 4s linear infinite",
        },
        "&:after": {
            content: "''",
            position: "absolute",
            inset: "4px",
            // background: "white",
            borderRadius: "50%",
            zIndex: 1
        },
        "&:hover": {
            "&::before": {
                inset: "-10px 70px",
            },
            [`& .${classes.content}`]: {
                "& img": {
                    opacity: 0.1
                }
            },
            [`& .${classes.name}`]: {
                opacity: 1
            },
            [`& .${classes.button}`]: {
                opacity: 1
            },
        },
    },
    [`& .${classes.contentImg}`]: {
        position: "absolute",
        inset: "8px",
        border: `1px solid ${theme.palette.primary.main}`,
        zIndex: 3,
        borderRadius: "50%",
        overflow: "hidden",
        display: "flex",
        flexDirection: 'column',
        justifyContent: "center",
        alignItems: "center",
        "& img": {
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            transition: "0.5s",
            pointerEvents: "none",
        }
    },
}));

function Clients() {
    const params = useParams()
    const theme = useTheme()
    console.log(params.client);
    console.log(clients[params.client]);
    if (!clients[params.client]) {
        return <NotFound />
    }
    const client = clients[params.client]
    return (
        client && <Root>
            <Grid container width={"100%"} height={"100%"}>
                <Grid xs={12} md={6} position={"relative"}>
                    <Box className={classes.leftWrapper} sx={{ backgroundImage: `url(${require(`./imgs/${client.image}`)})`, }}>
                        <div className={classes.content}>
                            <Box className={classes.item}
                                sx={{
                                    ":before": {
                                        background: `linear-gradient(315deg,${theme.palette.primary.main},${client.color})`,
                                    },
                                }}
                            >
                                <Box className={classes.contentImg}>
                                    <img src={require(`./imgs/${client.image}`)} alt='profile' />
                                </Box>
                            </Box>
                            <Typography variant='h4' my={2} textAlign={"center"} className={classes.name}>{client.name}</Typography>

                            {/* {client.email &&
                                <Stack spacing={1} alignItems="center" mb={1}>
                                    <Stack spacing={2} direction="row" alignItems="center" flexWrap={"wrap"} justifyContent={"center"}>

                                        <Stack spacing={2} direction="row" alignItems="center">
                                            <Stack>
                                                <Avatar sx={{ width: 30, height: 30 }}>
                                                    <Email />
                                                </Avatar>
                                            </Stack>
                                            <Stack sx={{ minWidth: 0 }}>
                                                <Typography noWrap>mohammed@gmail.com</Typography>
                                            </Stack>
                                        </Stack>
                                    </Stack>
                                </Stack>
                            } */}
                        </div>
                    </Box>
                </Grid>
                <Grid xs={12} md={6} py={2}>
                    <div className={classes.content}>
                        <Typography variant='h3' mb={2}>Social Media</Typography>
                        <ZeroWidthStack
                            link={client.facebook.link}
                            icon={"facebook"}
                            name={client.facebook.name}
                        />
                        <ZeroWidthStack
                            link={client.instagram.link}
                            icon={"instagram"}
                            name={client.instagram.name}
                        />
                        {client.branches.map((e, i) =>
                            <Stack spacing={1} mt={2} alignItems={"center"} key={i}>
                                <Typography variant='h6'>فرع {e.branchName}</Typography>
                                <Stack direction={"row"} spacing={2}>
                                    <Stack alignItems={"center"}>
                                        <a target='_blank' href={`https://wa.me/${e.whatsApp}`} rel="noreferrer">
                                            <Avatar sx={{ width: 30, height: 30 }}>
                                                <FaWhatsapp />
                                            </Avatar>
                                        </a>
                                        <Typography>
                                            WhatsApp
                                        </Typography>
                                    </Stack>
                                    <Stack alignItems={"center"}>
                                        <a target='_blank' href={`tel:${e.phone}`} rel="noreferrer">
                                            <Avatar sx={{ width: 30, height: 30 }}>
                                                <LocalPhoneIcon />
                                            </Avatar>
                                        </a>
                                        <Typography>
                                            Mobile
                                        </Typography>
                                    </Stack>
                                    <Stack alignItems={"center"}>
                                        <a target='_blank' href={e.location} rel="noreferrer">
                                            <Avatar sx={{ width: 30, height: 30 }}>
                                                <LocationOnIcon />
                                            </Avatar>
                                        </a>
                                        <Typography>
                                            Location
                                        </Typography>
                                    </Stack>
                                </Stack>
                            </Stack>
                        )}
                    </div>
                </Grid>

            </Grid>
        </Root>
    )
}

export default Clients