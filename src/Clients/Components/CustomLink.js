import * as React from 'react';
import { styled } from '@mui/material/styles';

const Item = styled("a")(({ theme }) => ({
    ...theme.typography.body2,
    textAlign: 'center',
    
    textDecoration: "none",
   
}));


export default function CustomLink({ link, children }) {
    return (
        <Item
            href={link}
            target="_blank"
        >
            {children}
        </Item>
    );
}