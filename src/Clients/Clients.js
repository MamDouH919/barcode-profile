import { Box, Stack, Typography } from '@mui/material'
import Grid from '@mui/material/Unstable_Grid2'
import React, { useState } from 'react'
import { styled } from '@mui/material/styles';

import ZeroWidthStack from '../Item';
import clients from '../clients.json';
import ProfileImage from './Components/ProfileImage';
import BranchInfo from './Components/BranchInfo';
import PoweredBy from './Components/PoweredBy';
import { useParams } from 'react-router-dom';
import NotFound from '../NotFound';
import BaitWardDialog from './Components/BaitWardDialog';
import ItemNoLink from './Components/Item';

const PREFIX = 'ArabClinic';

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
    // backgroundImage: 'url(./imgs/profile.jpg)',
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
        padding: theme.spacing(3, 0)
    },
    [`& .${classes.image}`]: {
        height: "250px",
        width: "250px",
        borderRadius: "50%"
    },
}));

function Clients() {
    const { id } = useParams()
    const client = clients[id]

    const [open, setOpen] = useState(false);

    if (!client) return <NotFound />

    return (
        <Root>
            {open && id === "bait-ward" && <BaitWardDialog open={open} setOpen={setOpen} />}
            <Grid container className={classes.qrCodeData}>
                <Grid xs={12} md={6} position={"relative"}>
                    <Box className={classes.leftWrapper} sx={{ backgroundImage: `url(${require(`../imgs/${client.image}`)})`, }}>
                        <div className={classes.content}>
                            <ProfileImage clientColor={client.color} img={require(`../imgs/${client.image}`)} />
                            <Typography variant='h3' my={2} textAlign={"center"} textTransform={"capitalize"}>{client.name}</Typography>
                        </div>
                    </Box>
                </Grid>
                <Grid xs={12} md={6} bgcolor={client.color}>
                    <div className={classes.content}>
                        <Stack mb={2}>
                            <Typography variant='h3'>Social Media</Typography>
                            <Box height={"2px"} width={"100%"} bgcolor={"#000"} />
                        </Stack>
                        {client.facebook && <ZeroWidthStack
                            link={client.facebook.link}
                            icon={"facebook"}
                            name={client.facebook.name}
                        />}
                        {client.instagram && <ZeroWidthStack
                            link={client.instagram.link}
                            icon={"instagram"}
                            name={client.instagram.name}
                        />}
                        {client.snapChat && <ZeroWidthStack
                            link={client.snapChat.link}
                            icon={"snapChat"}
                            name={client.snapChat.name}
                        />}
                        {client.twitter && <ZeroWidthStack
                            link={client.twitter.link}
                            icon={"twitter"}
                            name={client.twitter.name}
                        />}
                        {id === "bait-ward" && <ItemNoLink
                            click={() => setOpen(true)}
                            icon={"menu"}
                            name={"مينو بيت ورد"}
                        />}
                        {client.branches.map((branch, i) =>
                            <BranchInfo branch={branch} key={i} />
                        )}
                    </div>
                </Grid>

            </Grid>
            <PoweredBy />
        </Root>
    )
}

export default Clients