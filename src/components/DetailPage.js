import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: "#6c7ae0",
        color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
    },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
        border: 0,
    },
}));



export default function DetailPage({ selectedAlbum=[] }) {
    console.log(selectedAlbum)
    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 700 }} aria-label="customized table">
                <TableHead>
                    <TableRow>
                        <StyledTableCell>#</StyledTableCell>
                        <StyledTableCell>TRACK</StyledTableCell>
                        <StyledTableCell>ALBUM</StyledTableCell>
                        <StyledTableCell>ARTIST</StyledTableCell>
                        <StyledTableCell>DURATION</StyledTableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {selectedAlbum && selectedAlbum.songs && selectedAlbum.songs.map((song, index) => (
                        <StyledTableRow key={index}>
                            <StyledTableCell>{index + 1}</StyledTableCell>
                            <StyledTableCell>{song?.title || "-"}</StyledTableCell>
                            <StyledTableCell>{selectedAlbum?.title || "-"}</StyledTableCell>
                            <StyledTableCell>{selectedAlbum?.artistName || "-"}</StyledTableCell>
                            <StyledTableCell>{song?.length || "-"}</StyledTableCell>
                        </StyledTableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}
