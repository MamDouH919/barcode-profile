import React, { useState } from 'react'
import { Avatar, Box, Button, Container, Dialog, DialogContent, DialogTitle, Paper, Snackbar, Stack, Typography } from '@mui/material'
import { styled } from '@mui/material/styles';
import ProfileImage from '../Components/ProfileImage';
import { FaFacebookF, FaInstagram, FaTiktok } from 'react-icons/fa';

import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Slider from '../Components/Slider';
import InfoItem from '../Components/InfoItem';
import RestaurantMenuIcon from '@mui/icons-material/RestaurantMenu';
import RestaurantIcon from '@mui/icons-material/Restaurant';
import { Link } from 'react-router-dom';
import {
    FacebookIcon,
    FacebookMessengerIcon,
    FacebookMessengerShareButton,
    FacebookShareButton,
    TelegramIcon,
    TelegramShareButton,

    TwitterShareButton,
    WhatsappIcon,
    WhatsappShareButton,
    XIcon
} from 'react-share';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import { CopyToClipboard } from 'react-copy-to-clipboard';

const PREFIX = 'MenuQr';

const classes = {
    leftWrapper: `${PREFIX}-leftWrapper`,
    content: `${PREFIX}-content`,
    image: `${PREFIX}-image`,
    item: `${PREFIX}-item`,
    contentImg: `${PREFIX}-contentImg`,
    qrCodeData: `${PREFIX}-qrCodeData`,
    infoCard: `${PREFIX}-infoCard`,
};

const Root = styled("div")((
    {
        theme
    }
) => ({
    display: "grid",
    background: "#fff",
    [`& .${classes.qrCodeData}`]: {
        gridRow: " 1 / 100"
    },

    [`& .${classes.content}`]: {
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
    [`& .${classes.infoCard}`]: {
        position: "relative",
        my: 2,
        padding: theme.spacing(2),
        borderRadius: "20px",
    },
}));

const StyledTabs = styled(({ color, subTab, ...props }) => (
    <Tabs
        {...props}
        sx={{
            background: "transparent"
        }}
        TabIndicatorProps={{ children: <span className="MuiTabs-indicatorSpan" /> }}
    />
))(({ theme, color, subTab }) => ({
    '& .MuiTabs-indicator': {
        display: 'flex',
        justifyContent: 'center',
        backgroundColor: 'transparent',
    },
    '& .MuiTabs-indicatorSpan': {
        maxWidth: 40,
        width: '100%',
        backgroundColor: subTab ? color : "none",
    },
    '& .MuiTabs-flexContainer': {
        padding: theme.spacing(0,1)
    },
}));

const StyledTab = styled(({ color, subTab, ...props }) => (
    <Tab disableRipple {...props} />
))(({ theme, color, subTab }) => ({
    textTransform: 'none',
    fontWeight: "bolder",
    fontSize: theme.typography.pxToRem(20),
    marginRight: theme.spacing(1),
    color: subTab ? "#c0bbbb" : "#767676d7",
    border: subTab ? "none" : `2px solid #767676d7`,
    borderRadius: "25px",
    '&.Mui-selected': {
        color: subTab ? color : "#fff",
        border: subTab ? "none" : `2px solid ${color}`,
        background: subTab ? "none" : color
    },
    '&.Mui-focusVisible': {
        backgroundColor: theme.palette.primary.light,
    },
}));


function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`full-width-tabpanel-${index}`}
            aria-labelledby={`full-width-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ py: 3 }}>
                    {children}
                </Box>
            )}
        </div>
    );
}
const Icons = {
    facebook: <FaFacebookF color='white' fontSize={"larger"} />,
    instagram: <FaInstagram color='white' fontSize={"larger"} />,
    tikTok: <FaTiktok color='white' fontSize={"larger"} />,
}

const MenuQr = ({ client, id }) => {
    const [value, setValue] = React.useState(0);
    const [infoValue, setInfoValue] = React.useState(0);
    const [menuValue, setMenuValue] = React.useState(0);


    // console.log(client);
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };


    const handleChangeInfoValue = (event, newValue) => {
        setInfoValue(newValue);
    };

    const handleChangeMenuValue = (event, newValue) => {
        setMenuValue(newValue);
    };

    const [open, setOpen] = useState(false);
    const [snackbarOpen, setSnackbarOpen] = useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleCloseSnackbar = () => {
        setSnackbarOpen(false);
    };

    console.log(client);
    

    return (
        <Root className={classes.leftWrapper}>
            <Snackbar
                open={snackbarOpen}
                autoHideDuration={3000}
                onClose={handleCloseSnackbar}
                message="Url was copied!"
            />

            <Stack alignItems={"center"} spacing={2} width={"100%"}>
                <Box position={"relative"}>
                    <Stack spacing={2} className={classes.content}>
                        <ProfileImage size={"200px"} clientColor={client.color} img={require(`../../imgs/${client.image}`)} />
                        <Typography my={1} variant='h4' color={"black"} fontWeight={"bolder"} textAlign={"center"} textTransform={"capitalize"}>{client.name}</Typography>
                        <Stack direction={"row"} mt={2} spacing={2} useFlexGap>
                            {client.social.map((e, i) =>
                                <Link to={e.link} key={i} target='_blank'>
                                    <Avatar sx={{ width: 35, height: 35, background: client.SecondColor }}>
                                        {Icons[e.type]}
                                    </Avatar>
                                </Link>
                            )}
                        </Stack>
                        <Dialog
                            open={open}
                            onClose={handleClose}
                            aria-labelledby="alert-dialog-title"
                            aria-describedby="alert-dialog-description"

                        >
                            <DialogTitle id="alert-dialog-title">
                                {"Share it with your friends"}
                            </DialogTitle>
                            <DialogContent sx={{ background: "white", pt: "16px !important" }}>
                                <Stack direction={"row"} spacing={2} flexWrap={"wrap"}>
                                    <FacebookShareButton
                                        url={`qr.mountain-egy.site/${client.key}`}
                                        quote={'Dummy text!'}
                                        hashtag={client.hashtag}
                                    >
                                        <FacebookIcon size={32} round />
                                    </FacebookShareButton>
                                    <FacebookMessengerShareButton
                                        url={`qr.mountain-egy.site/${client.key}`}
                                        quote={'Dummy text!'}
                                        hashtag={client.hashtag}
                                    >
                                        <FacebookMessengerIcon size={32} round />
                                    </FacebookMessengerShareButton>
                                    <WhatsappShareButton
                                        url={`qr.mountain-egy.site/${client.key}`}
                                        quote={'Dummy text!'}
                                        hashtag={client.hashtag}
                                    >
                                        <WhatsappIcon size={32} round />
                                    </WhatsappShareButton>
                                    <TwitterShareButton
                                        url={`qr.mountain-egy.site/${client.key}`}
                                        quote={'Dummy text!'}
                                        hashtag={client.hashtag}
                                    >
                                        <XIcon size={32} round />
                                    </TwitterShareButton>
                                    <TelegramShareButton
                                        url={`qr.mountain-egy.site/${client.key}`}
                                        quote={'Dummy text!'}
                                        hashtag={client.hashtag}
                                    >
                                        <TelegramIcon size={32} round />
                                    </TelegramShareButton>
                                    <CopyToClipboard text={`qr.mountain-egy.site/${client.key}`}>
                                        <Button
                                            onClick={() => {
                                                setSnackbarOpen(true)
                                            }}
                                            sx={{
                                                borderRadius: "50%",
                                                minWidth: "32px",
                                                width: "32px",
                                                height: "32px",
                                                p: 0,
                                                '& span': {
                                                    m: 0
                                                }
                                            }}
                                            variant="outlined"
                                            startIcon={<ContentCopyIcon />}
                                        >

                                        </Button>
                                    </CopyToClipboard>
                                </Stack>
                            </DialogContent>
                        </Dialog>
                        <div onClick={handleClickOpen}>
                            <InfoItem color={client.color} SecondColor={client.SecondColor} action item={{
                                type: "share",
                                value: "share it with your friends"
                            }} />
                        </div>
                    </Stack>
                </Box>
                <Stack alignItems={"center"} sx={{ position: "relative" }}>
                    <Box sx={{
                        display: "grid",
                        position: "relative"
                    }} >
                        <StyledTabs
                            value={value}
                            onChange={handleChange}
                            variant="scrollable"
                            scrollButtons
                            aria-label="visible arrows tabs example"
                            color={client.color}
                        >
                            {["Menu", "Information", "offers"].map((tab, index) =>
                                <StyledTab label={tab} key={index} color={client.color} />
                            )}
                        </StyledTabs>
                    </Box>
                    <div>
                        <TabPanel value={value} index={0}>
                            <Container maxWidth={'lg'} sx={{ p: 0 }}>
                                <Stack alignItems={"center"}>
                                    <Box sx={{
                                        display: "grid",
                                        position: "relative"
                                    }} >
                                        <StyledTabs
                                            subTab
                                            value={menuValue}
                                            onChange={handleChangeMenuValue}
                                            variant="scrollable"
                                            scrollButtons
                                            aria-label="visible arrows tabs example"
                                            color={client.color}
                                        >
                                            {client.menu.map((tab, index) =>
                                                <StyledTab subTab label={
                                                    <Stack direction={"row"} spacing={1}>
                                                        <RestaurantMenuIcon fontSize='large' />
                                                        <Typography fontSize={"20px"} fontWeight={"bolder"}>{tab.title}</Typography>
                                                    </Stack>
                                                } key={index} color={client.color} />
                                            )}
                                        </StyledTabs>
                                    </Box>
                                    <div>
                                        {client.menu.map((menu, index) =>
                                            <TabPanel value={menuValue} key={index} index={index}>
                                                <Container maxWidth={'lg'}>
                                                    <Slider images={menu.images} color={client.color} />
                                                </Container>
                                            </TabPanel>
                                        )}
                                    </div>
                                </Stack>
                            </Container>
                        </TabPanel>
                        <TabPanel value={value} index={1}>
                            <Container maxWidth={'lg'}>
                                <Stack alignItems={"center"}>
                                    <Box sx={{
                                        display: "grid",
                                        position: "relative"
                                    }} >
                                        <StyledTabs
                                            subTab
                                            value={infoValue}
                                            onChange={handleChangeInfoValue}
                                            variant="scrollable"
                                            scrollButtons
                                            aria-label="visible arrows tabs example"
                                            color={client.color}
                                        >
                                            {client.branches.map((tab, index) =>
                                                <StyledTab label={
                                                    <Stack direction={"row"} spacing={1}>
                                                        <RestaurantIcon fontSize='large' />
                                                        <Typography fontSize={"20px"} fontWeight={"bolder"}>{tab.branchName}</Typography>
                                                    </Stack>
                                                } key={index} color={client.color} subTab />
                                            )}
                                        </StyledTabs>
                                    </Box>
                                    <div>
                                        {client.branches.map((branch, index) =>
                                            <TabPanel value={infoValue} key={index} index={index}>
                                                <Container maxWidth={'lg'}>
                                                    <Paper className={classes.infoCard} sx={{ background: "white" }} elevation={10} >
                                                        <Stack justifyContent={"center"} alignItems={"center"} >
                                                            <Stack spacing={2} >
                                                                {branch.branchInfo.map((item, i) => <InfoItem key={i} color={client.color} SecondColor={client.SecondColor} item={item} />)}
                                                            </Stack>
                                                        </Stack>
                                                    </Paper>
                                                    <div style={{ height: "100px" }}></div>

                                                </Container>
                                            </TabPanel>
                                        )}
                                    </div>
                                </Stack>
                            </Container>
                        </TabPanel>
                        <TabPanel value={value} index={2}>
                            <Container maxWidth={'lg'} sx={{ p: 0 }}>
                                <Stack alignItems={"center"}>
                                    <Slider images={client.offers} color={client.color} />
                                </Stack>
                            </Container>
                        </TabPanel>
                    </div>
                </Stack>
            </Stack>
        </Root>
    )
}

export default MenuQr
