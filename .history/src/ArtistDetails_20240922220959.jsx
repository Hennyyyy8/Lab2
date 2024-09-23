import React from 'react';

function ArtistDetaila({ artist }) {
    return (
        <div className="artist-details">
            <img src={artist.photo_url} alt={artist.name} />
                <h2>{artist.name}</h2>
                    <p>Country: {artist.country}</p>
                    <p>Years Active: {artist.years_active}</p>
        </div>
    )
}