import React from 'react';

function ArtistDetails({ artist }) {
    return (
        <div className="artist-details">
            <img className="artist-img" src={artist.photo_url} alt={artist.name} />
                <h2>{artist.name}</h2>
                    <p>Country: {artist.country}</p>
                    <p>Years Active: {artist.years_active}</p>
        </div>
    );
}

export default ArtistDetails;