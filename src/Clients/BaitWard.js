import { Avatar, Box, Stack, Typography } from '@mui/material'
import Grid from '@mui/material/Unstable_Grid2'
import React from 'react'
import { styled } from '@mui/material/styles';

import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import ZeroWidthStack from '../Item';
import { FaWhatsapp } from 'react-icons/fa';
import { LocationOn } from '@mui/icons-material';
import clients from '../clients.json';
import image from '../imgs/bait-ward.jpg'
import { useTheme } from "@mui/system";
import BaitWardDialog from './Components/BaitWardDialog';
import ItemNoLink from './Components/Item';

const PREFIX = 'Home';

const classes = {
    leftWrapper: `${PREFIX}-leftWrapper`,
    content: `${PREFIX}-content`,
    image: `${PREFIX}-image`,
    item: `${PREFIX}-item`,
    contentImg: `${PREFIX}-contentImg`,
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
        backgroundImage: `url(${image})`,
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
        padding: theme.spacing(3, 0)
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

function BaitWard() {
    const theme = useTheme()
    const client = clients['bait-ward']
    const [open, setOpen] = React.useState(false);

    return (
        <Root>
            {open && <BaitWardDialog open={open} setOpen={setOpen} />}
            <Grid container width={"100%"} height={"100%"}>
                <Grid xs={12} md={6} position={"relative"}>
                    <Box className={classes.leftWrapper} sx={{}}>
                        <div className={classes.content}>
                            <Box className={classes.item}
                                sx={{
                                    ":before": {
                                        background: `linear-gradient(315deg,${theme.palette.primary.main},${client.color})`,
                                    },
                                }}
                            >
                                <Box className={classes.contentImg}>
                                    <img src={image} alt='profile' />
                                </Box>
                            </Box>
                            <Typography variant='h3' my={2} textAlign={"center"} textTransform={"capitalize"}>{client.name}</Typography>
                        </div>
                    </Box>
                </Grid>
                <Grid xs={12} md={6} bgcolor={`${client.color}`}>
                    <div className={classes.content}>
                        <Stack mb={2}>
                            <Typography variant='h3'>Social Media</Typography>
                            <Box height={"2px"} width={"100%"} bgcolor={"#000"} />
                        </Stack>
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
                        <ItemNoLink
                            click={() => setOpen(true)}
                            icon={"menu"}
                            name={"مينو بيت ورد"}
                        />
                        {client.branches.map((e, i) =>
                            <Stack spacing={1} mt={2} alignItems={"center"} key={i}>
                                <Typography variant='h6'>فرع {e.branchName}</Typography>
                                <Stack direction={"row"} spacing={2}>
                                    {e.whatsApp && <Stack alignItems={"center"}>
                                        <a target='_blank' href={`https://wa.me/${e.whatsApp}`} rel="noreferrer">
                                            <Avatar sx={{ width: 30, height: 30, background: "white" }}>
                                                <FaWhatsapp />
                                            </Avatar>
                                        </a>
                                        <Typography color={"text.primary"}>
                                            WhatsApp
                                        </Typography>
                                    </Stack>}
                                    {e.phone.map((phone, index) =>
                                        <Stack alignItems={"center"} key={index}>
                                            <a target='_blank' href={`tel:${phone}`} rel="noreferrer">
                                                <Avatar sx={{ width: 30, height: 30, background: "white" }}>
                                                    <LocalPhoneIcon />
                                                </Avatar>
                                            </a>
                                            <Typography color={"text.primary"}>
                                                Mobile
                                            </Typography>
                                        </Stack>
                                    )}
                                    {e.location && <Stack alignItems={"center"}>
                                        <a target='_blank' href={e.location} rel="noreferrer">
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
                        )}
                    </div>
                </Grid>

            </Grid>
        </Root >
    )
}

export default BaitWard