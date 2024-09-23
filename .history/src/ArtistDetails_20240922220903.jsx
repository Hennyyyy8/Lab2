import React from 'react';

function ArtistDetaila({ artist }) {
    return (
        <div className="artist-details">
            <img src={artist.photo_url} alt={artist.name} />
            <h2>{artist.name}</h2>
        </div>
    )
}