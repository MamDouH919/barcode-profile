import React from 'react'
import { Avatar, Box, Container, Stack, Typography } from '@mui/material'
import { styled } from '@mui/material/styles';
import ProfileImage from '../Components/ProfileImage';
import { FaFacebookF } from 'react-icons/fa';

import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Slider from '../Components/Slider';
import InfoItem from '../Components/InfoItem';

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
        borderRadius: "20px"
    },
}));

const StyledTabs = styled(({ color, ...props }) => (
    <Tabs
        {...props}
        sx={{
            background: "transparent"
        }}
        TabIndicatorProps={{ children: <span className="MuiTabs-indicatorSpan" /> }}
    />
))(({ theme, color }) => ({
    '& .MuiTabs-indicator': {
        display: 'flex',
        justifyContent: 'center',
        backgroundColor: 'transparent',
    },
    '& .MuiTabs-indicatorSpan': {
        maxWidth: 40,
        width: '100%',
        backgroundColor: "none",
    },
    '& .MuiTabs-flexContainer': {
        display: "block"
    },
}));

const StyledTab = styled(({ color, ...props }) => (
    <Tab disableRipple {...props} />
))(({ theme, color }) => ({
    textTransform: 'none',
    fontWeight: "bolder",
    fontSize: theme.typography.pxToRem(20),
    marginRight: theme.spacing(1),
    color: "black",
    border: `2px solid black`,
    borderRadius: "20px",
    '&.Mui-selected': {
        color: color,
        border: `2px solid ${color}`,
        borderRadius: "20px"
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

    return (
        <Root className={classes.leftWrapper}>
            <Stack alignItems={"center"} spacing={2} width={"100%"}>
                <Box position={"relative"}>
                    <Stack spacing={2} className={classes.content}>
                        <ProfileImage size={"200px"} clientColor={client.color} img={require(`../../imgs/${client.image}`)} />
                        <Typography my={1} variant='h4' color={"black"} fontWeight={"bolder"} textAlign={"center"} textTransform={"capitalize"}>{client.name}</Typography>
                        <Stack direction={"row"} mt={2} spacing={2} useFlexGap>
                            <Avatar sx={{ width: 30, height: 30, background: client.color }}>
                                <FaFacebookF color='white' />
                            </Avatar>
                        </Stack>
                        <InfoItem color={client.color} action item={{
                            type: "share",
                            value: "share it with your friends"
                        }} />
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
                            {["Menu", "Information"].map((tab, index) =>
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
                                            value={menuValue}
                                            onChange={handleChangeMenuValue}
                                            variant="scrollable"
                                            scrollButtons
                                            aria-label="visible arrows tabs example"
                                            color={client.color}
                                        >
                                            {client.menu.map((tab, index) =>
                                                <StyledTab label={tab.title} key={index} color={client.color} />
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
                                            value={infoValue}
                                            onChange={handleChangeInfoValue}
                                            variant="scrollable"
                                            scrollButtons
                                            aria-label="visible arrows tabs example"
                                            color={client.color}
                                        >
                                            {client.branches.map((tab, index) =>
                                                <StyledTab label={tab.branchName} key={index} color={client.color} />
                                            )}
                                        </StyledTabs>
                                    </Box>
                                    <div>
                                        {client.branches.map((branch, index) =>
                                            <TabPanel value={infoValue} key={index} index={index}>
                                                <Container maxWidth={'lg'}>
                                                    <Stack justifyContent={"center"} alignItems={"center"} >
                                                        <Stack spacing={2} sx={{ border: `3px solid ${client.color}` }} className={classes.infoCard}>
                                                            {branch.branchInfo.map((item, i) => <InfoItem key={i} color={client.color} item={item} />)}
                                                        </Stack>
                                                    </Stack>
                                                </Container>
                                            </TabPanel>
                                        )}
                                    </div>
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
