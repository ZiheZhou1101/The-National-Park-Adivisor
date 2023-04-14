import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {
    setDetails, setPages
} from '../redux/parkSlice';
import { LIMIT } from '../constants';
import styled from 'styled-components';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

const Styledli = styled.li`
  list-style: none;
  margin: 10px;
  padding: 5px;
  width: 250px;
  height: 200px;
  overflow: hidden;
`;
const StyledUl = styled.ul`
  display: flex;
  flex-wrap: wrap;
`;
const StyledImg = styled.img`
  width: 100%;
  height: 100%;
`;
const StyledListLink = styled(Link)`
  text-decoration: none;
  color: black;
  &:hover {
    cursor: pointer;
    font-weight: 600;
  }
`;
const Pages = styled.div`
display: flex;
justify-content: center;
align-items: center;
`

export default function FetchParks() {
    const { numbers, allParks, pages } = useSelector((state) => state.park);
    const pageNumbers = Math.ceil(numbers / LIMIT);
    const dispatch = useDispatch();

    const handleChange = (event, value) => {
        dispatch(setPages(value - 1));
    }

    return (
        <div>
            <div>
                <StyledUl>
                    {allParks.slice(pages * LIMIT, pages * LIMIT + 25).map((item, index) => (
                        <Styledli>
                            <StyledListLink
                                key={`lists-${index}`}
                                to={`${item.id}`}
                                onClick={() => {
                                    dispatch(setDetails(allParks.find((park) => (park.id === item.id))))
                                }}
                            >
                                {item.fullName}
                                <StyledImg src={item.images[0].url} alt={item.fullName} />
                            </StyledListLink>
                        </Styledli>
                    ))}
                </StyledUl>
            </div>
            <Pages>
                <Stack spacing={2}>
                    <Pagination count={pageNumbers} page={pages + 1} onChange={handleChange} />
                </Stack>
            </Pages>
        </div>
    );
}