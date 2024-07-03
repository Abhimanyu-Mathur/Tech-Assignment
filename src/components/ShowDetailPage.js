import { Grid } from '@mui/material';
import React from 'react';
import DetailPage from './DetailPage';

const ShowDetailPage = ({ selectedAlbum = [] }) => {
    // Check if selectedAlbum is defined and not empty
    if (!selectedAlbum || !selectedAlbum.title || !selectedAlbum.description || !selectedAlbum.songs) {
        return <div className='discription-body'>Album details not found.</div>;
    }

    return (
        <div className='discription-body'>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <div className='discription'>
                        <p className='album-title'>{selectedAlbum?.title || ""}</p>
                        <p>{selectedAlbum?.artistName  ? `Artist: ${selectedAlbum?.artistName}` :""}</p>
                        <p>{selectedAlbum?.description || ""}</p>
                    </div>
                </Grid>
                <Grid item xs={12}>
                    <div>
                        <DetailPage selectedAlbum={selectedAlbum} />
                    </div>
                </Grid>
            </Grid>
        </div>
    );
};

export default ShowDetailPage;
