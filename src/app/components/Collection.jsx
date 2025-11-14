import React, { useState } from "react";

function Collection() {
  const [showAll, setShowAll] = useState(false);

  const cards = [
    "/images/collection14.webp",
    "/images/collection2.webp",
    "/images/collection6.webp",
    "/images/collection1.webp",
    "/images/collection13.webp",
    "/images/collection4.webp",
    "/images/collection3.webp",
    "/images/collection8.webp",
    "/images/collection9.webp",
    "/images/collection10.webp",
    "/images/collection11.webp",
    "/images/collection5.webp",
    "/images/collection7.webp",
    "/images/collection14.webp",
    "/images/collection2.webp",
    "/images/collection6.webp",
    "/images/collection1.webp",
    "/images/collection13.webp",
    "/images/collection12.webp",
    "/images/collection4.webp",
    "/images/collection12.webp",
    "/images/collection3.webp",
    "/images/collection8.webp",
    "/images/collection9.webp",
    "/images/collection10.webp",
    "/images/collection11.webp",
    "/images/collection5.webp",
    "/images/collection7.webp",
  ];

  const visibleCards = showAll ? cards : cards.slice(0, 12);

  return (
    <div className={`collection ${showAll ? 'showall' : ''}`}>
      <div className="custom_container">
        <img src="/images/brush.svg" alt="" className="brush_img"/>
        <h1 className="heading">FanArt Collection</h1>
        <p className="para">Lorem ipsum dolor sit amet consectetur.</p>

        <div className="img_cards">
          <div className="gradient"></div>

          <button onClick={() => setShowAll(!showAll)}>
            <span>{showAll ? "Show less" : "Show all"}</span>
            <img src={`/images/Caret${showAll ? 'Up' : 'Down'}.svg`} alt="" />
          </button>

          {visibleCards.map((src, index) => (
            <div key={index} className="img_card">
              <img src={src} alt={`collection ${index + 1}`} />
              {src == '/images/collection8.webp' ? (
                <div className="overlay">
                  <img src="/images/EyeSlash.svg" alt="" />
                  <div className="txt">NSFW Content</div>
                </div>
              ) : (
                <p>lorem ipsum</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Collection;
