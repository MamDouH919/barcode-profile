import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';

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

export default function ZeroWidthStack(props) {
    const { element } = props
    return (
        <Box sx={{ overflow: 'hidden' }}>
            <Item
                href={element.link}
                target="_blank"
            >
                <Stack spacing={2} direction="row" alignItems="center">
                    <Stack>
                        {/* <Avatar> */}
                        <img src={element.img} alt={element.id} height={50} width={50} />
                        {/* </Avatar> */}
                    </Stack>
                    <Stack sx={{ minWidth: 0 }}>
                        <Typography noWrap>{element.name}</Typography>
                    </Stack>
                </Stack>
            </Item>
        </Box>
    );
}