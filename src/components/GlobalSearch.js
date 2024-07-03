import React, { useState, useEffect } from 'react';

import TextField from '@mui/material/TextField';
import LibraryMusicIcon from '@mui/icons-material/LibraryMusic';
import "./music.css";
import ShowDetailPage from './ShowDetailPage';
import SearchIcon from '@mui/icons-material/Search';
import CloseIcon from '@mui/icons-material/Close';
import NoSearchData from './NoSearchData';
import { StyledAutocomplete, inputStyles } from './Styles';


const GlobalSearch = () => {
  const [data, setData] = useState([]);           // Data that we are taking from json and saving
  const [search, setSearch] = useState('');
  const [selectedAlbum, setSelectedAlbum] = useState(null);
  const [options, setOptions] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('/data.json')
      .then(response => {
        if (!response.ok) {
          // Throw error when response is not ok.
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => setData(data))
      .catch(error => {
        // Error while fetching data.
        console.error('Error fetching data:', error);
      });
  }, []);


  // Hook to track the change in search data 
  useEffect(() => {
    if (search) {
      const lowerCaseSearch = search.toLowerCase();
      const filteredOptions = [];       // This is the list that comes as suggestion when we type a value in autocomplete search box

      data.forEach(artist => {
        artist.albums.forEach(album => {
          const artistMatches = artist.name.toLowerCase().includes(lowerCaseSearch);
          const albumMatches = album.title.toLowerCase().includes(lowerCaseSearch);

          //searching by song name and adding it to options if found
          album.songs.forEach(song => {
            const songsMatches = song.title.toLowerCase().includes(lowerCaseSearch);
            if (songsMatches) {    
              filteredOptions.push({
                label: `Song: ${song.title}`,
                album,
                artistName: artist.name
              });
            }
          });


          // Adding Album founded in search
          if (artistMatches || albumMatches) {
            filteredOptions.push({
              label: `Album: ${album.title} by ${artist.name}`,
              album,
              artistName: artist.name
            });
          }
        });
      });

      setOptions(filteredOptions);
    } else {
      //Reseting to default if there is no value to search
      setOptions([]);
    }
  }, [search, data]);   

  const handleSelect = (event, value) => {
    if (value) {
      setSelectedAlbum({ ...value.album, artistName: value.artistName });
    }
  };

  return (
    <>
      <div className='nav-container'>
        <div>
          <div className='title-container'><LibraryMusicIcon /> Music Library </div>
        </div>
        <div className='search-container'>
          <StyledAutocomplete
            options={options}
            popupIcon={<SearchIcon />}
            clearIcon={<CloseIcon />}
            getOptionLabel={(option) => option.label}
            renderInput={(params) => (
              <TextField
                {...params}
                placeholder="Search by artist, album, or song"
                sx={inputStyles}
                variant="outlined"
                onChange={(e, value) => {setSearch(e.target.value);
                  console.log(value)}
                }
              />
            )}
            onChange={handleSelect}       // This will work when we select a value from the suggestions
          />
        </div>
        {error && <div className="error-message">Error: {error}</div>}
      </div>

      {selectedAlbum && (selectedAlbum.title || selectedAlbum.description || selectedAlbum.songs) ?
        <ShowDetailPage selectedAlbum={selectedAlbum} /> :
        <NoSearchData  />
      }

    </>
  );
};

export default GlobalSearch;
