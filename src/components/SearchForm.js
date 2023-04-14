import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setDetails } from '../redux/parkSlice';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';

const SearchLi = styled.li`
list-style-type: none;
`
const SearchLink = styled(Link)`
text-decoration: none;
color:black;
display: block;
&:hover {
    font-weight: 800;
}
`
const Search = styled.div`
display:flex;
justify-content: center;
align-items: center;
margin-top: 30px;
`
export default function SearchForm() {
    const dispatch = useDispatch();
    const [searchTerm, setSearchTerm] = useState('')
    const [searchResults, setSearchResults] = useState([]);
    const { allParks } = useSelector((state) => state.park);

    const onSearch = (e) => {
        e.preventDefault();
        if (searchTerm === '') return;
        else {
            const results = allParks.filter((item) =>
                item.fullName.toLowerCase().includes(searchTerm.toLowerCase()));
            setSearchResults(results);
        }
    };

    return (
        <div>
            <Search>
                <input type='text' value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)} />
                <Button onClick={onSearch} style={{ color: 'black' }}>Search</Button>
            </Search>
            <ul>
                {searchResults.map((results) =>
                (<SearchLi>
                    <SearchLink to={`${results.id}`}
                        onClick={() => {
                            dispatch(setDetails(allParks.find((park) => (park.id === results.id))))
                        }}
                    >{results.name}</SearchLink></SearchLi>))}
            </ul>
        </div>
    )
}