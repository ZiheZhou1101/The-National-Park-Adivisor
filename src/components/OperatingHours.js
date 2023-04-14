import React from 'react';
import { useSelector } from 'react-redux';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';


export default function OperatingHours() {
    const operatingHours = useSelector((state) => state.park.details.operatingHours)
    return (
        <div >
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Name</TableCell>
                            <TableCell align="center">Description</TableCell>
                            <TableCell align="right">Monday</TableCell>
                            <TableCell align="right">Tuesday</TableCell>
                            <TableCell align="right">Wednesday</TableCell>
                            <TableCell align="right">Thursday</TableCell>
                            <TableCell align="right">Friday</TableCell>
                            <TableCell align="right">Saturday</TableCell>
                            <TableCell align="right">Sunday</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {operatingHours.map((item) => (
                            <TableRow
                                key={item.name}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">
                                    {item.name}
                                </TableCell>
                                <TableCell align="center">{item.description}</TableCell>
                                <TableCell align="right">{item.standardHours.monday}</TableCell>
                                <TableCell align="right">{item.standardHours.tuesday}</TableCell>
                                <TableCell align="right">{item.standardHours.wednesday}</TableCell>
                                <TableCell align="right">{item.standardHours.thursday}</TableCell>
                                <TableCell align="right">{item.standardHours.friday}</TableCell>
                                <TableCell align="right">{item.standardHours.saturday}</TableCell>
                                <TableCell align="right">{item.standardHours.sunday}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    )
}