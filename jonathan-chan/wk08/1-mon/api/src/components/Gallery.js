import React from 'react';

const Gallery = (props) => {
    return (
        <div>
            <img src={props.images} alt="waifu" width="300"/>
        </div>
    )
}

export default Gallery;