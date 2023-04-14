import React, { useState } from 'react';
import FetchParks from '../components/FetchParks';
import SearchForm from '../components/SearchForm';
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import FilterByState from '../components/FilterByState';
import Button from '@mui/material/Button';

export default function ListPage() {
    const [filter, setFilter] = useState(false);

    return (
        <div>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <SearchForm />
                <Button size='small' color='success' style={{ position: 'absolute', right: '0px' }}
                    onClick={() => {
                        setFilter(!filter);
                    }}><FilterAltIcon /> Filter by state</Button>
            </div>
            <div>
                {filter && <FilterByState />}
            </div>
            <div>
                {!filter && <FetchParks />}
            </div>
        </div>
    );
}