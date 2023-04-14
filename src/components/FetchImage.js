import React from 'react';
import { useSelector } from 'react-redux';
import Box from '@mui/material/Box';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import styled from 'styled-components';

const StyledDiv = styled.div`
display:flex;
justify-content: center;
align-items: center;
`
export default function FetchImg() {
    const parkImg = useSelector((state) => state.park.details.images);

    return (
        <StyledDiv>
            <Box sx={{ width: 800, height: 720, overflowY: 'scroll' }}>
                <ImageList variant="masonry" cols={2} gap={8}>
                    {parkImg.map((item, index) => (
                        <ImageListItem key={index}>
                            <img
                                src={`${item.url}?w=398&fit=crop&auto=format`}
                                srcSet={`${item.url}?w=398&fit=crop&auto=format&dpr=2 2x`}
                                alt={item.altText}
                                loading="lazy" />
                        </ImageListItem>
                    ))}
                </ImageList>
            </Box>
        </StyledDiv>
    );
}