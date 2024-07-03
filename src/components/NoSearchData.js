import React, { useEffect, useState } from 'react'

const NoSearchData = ({ artistData = [], setSearch }) => {
    const [searchData, setSearchData] = useState('');
    useEffect(() => {
        if (searchData) {
            setSearch(searchData)
        }
    }, [])
    return (
        <div className="artist-list">
            Please search to get data
        </div>
    );

}

export default NoSearchData