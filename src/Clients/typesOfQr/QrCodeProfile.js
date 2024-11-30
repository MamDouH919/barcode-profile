import React from 'react'
import { styled } from '@mui/material/styles';
import { Box, Paper, Stack, Typography } from '@mui/material';
import SocialCard from '../Components/SocialCard';
import BranchData from '../Components/BranchData';
import { Helmet } from 'react-helmet';
import SlideShowLink from '../Components/SlideShowLink';
import PoweredBy from '../Components/PoweredBy';

const PREFIX = 'InfoQr';

const classes = {
  cover: `${PREFIX}-cover`,
  page: `${PREFIX}-page`,
  profileImg: `${PREFIX}-profileImg`,
  contentPaper: `${PREFIX}-contentPaper`,
  fixRelative: `${PREFIX}-fixRelative`,
};

const Root = styled(Stack)(({ theme }) => ({
  [`& .${classes.page}`]: {
    width: "100%"
  },
  [`& .${classes.cover}`]: {
    backgroundPosition: "center",
    backgroundSize: "cover",
    height: "300px",
    width: "100%",
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
  [`& .${classes.profileImg}`]: {
    position: "relative",
    top: "-125px",
    height: "250px",
    width: "250px",
    borderRadius: "50%",
    overflow: "hidden"
  },
  [`& .${classes.fixRelative}`]: {
    position: "relative",
    top: "-80px",
    margin: theme.spacing(3, 0),
  },
  [`& .${classes.contentPaper}`]: {
    margin: theme.spacing(3, 2),
    borderRadius: "10px",
    width: "calc(100% - 32px)"
  },
}));

const QrCodeProfile = ({
  client,
  id
}) => {
  return (
    <Root>
      <Helmet>
        <title>Mountain | {client.name}</title>
      </Helmet>
      <Stack className={classes.page} alignItems={"center"}>
        <Box className={classes.cover} sx={{ backgroundImage: `url(${require(`../../imgs/${client.image}`)})`, }} />
        <Stack className={classes.profileImg} component={Paper} elevation={6}>
          <img
            src={require(`../../imgs/${client.image}`)}
            alt='test'
            width={"100%"}
            height={"100%"}
            style={{ objectFit: "contain" }}
          />
        </Stack>
        <Stack className={classes.fixRelative} width={"100%"}>
          <Typography variant='h1' textAlign={"center"} fontSize={35} textTransform={"capitalize"}>
            {client.name}
          </Typography>
          <Stack className={classes.contentPaper} spacing={2} component={Paper} p={2}>
            {id && client.menu && <SlideShowLink type={"menu"} color={client.color} id={id} title={"menu"} folderType={"menu"} />}
            {client.facebook &&
              <SocialCard to={client.facebook.link} type={"facebook"} color={client.color} />
            }
            {client.instagram &&
              <SocialCard to={client.instagram.link} type={"instagram"} color={client.color} />
            }
            {client.snapChat &&
              <SocialCard to={client.snapChat.link} type={"snapChat"} color={client.color} />
            }
            {client.twitter &&
              <SocialCard to={client.twitter.link} type={"twitter"} color={client.color} />
            }
            {client.youtube &&
              <SocialCard to={client.youtube.link} type={"youtube"} color={client.color} />
            }
            {client.fbGroup && client.fbGroup.map((item, index) =>
              <SocialCard to={item.link} type={"group"} title={item.name} color={client.color} key={index} />
            )}
            {client.branches.map((branch, i) =>
              <BranchData key={i} branch={branch} color={client.color} />
            )}
          </Stack>
        </Stack>
      </Stack>
      <PoweredBy />
    </Root>
  )
}

export default QrCodeProfile