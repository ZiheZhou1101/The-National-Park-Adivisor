import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

const StyledBG = styled.div`
display: flex;
justify-content: space-around;
width:100%;
`
const StyledLink = styled(Link)`
flex:1;
text-align: center;
padding:5px;
color: black;
font-size:20px;
text-decoration: none;
border-bottom: 2px solid black;
&:hover {
  background-color: darkkhaki;
}
`
export default function NavBar() {
    const { details } = useSelector((state) => state.park)
    return (
        <div style={{ backgroundColor: 'beige' }}>
            <div style={{ fontSize: '40px', fontWeight: '400', padding: '20px' }}>The National Park Advisor</div>
            <StyledBG>
                <StyledLink to={''}>Home</StyledLink>
                <StyledLink to={'ListPage'}>List</StyledLink>
                {details !== null ? (<StyledLink to={`ListPage/${details.id}`}>Recently Viewed</StyledLink>) : (
                    <div></div>
                )}
            </StyledBG>
            <div>
                <Outlet />
            </div>
        </div>
    );
}