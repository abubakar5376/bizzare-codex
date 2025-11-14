import React from 'react';

function GenresCard({ bgColor, images, title }) {
  return (
    <div className='genres_card' style={{ backgroundColor: bgColor }}>
      <h4>{title}</h4> 
      <div className="images">
        {images.map((img, index) => (
          <img key={index} src={`/images/${img}.webp`} alt={title} />
        ))}
      </div>
    </div>
  );
}

export default GenresCard;
