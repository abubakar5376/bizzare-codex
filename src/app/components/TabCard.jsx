import React from "react";

function TabCard({ active = false, plus, name, likes, dislikes, views, img}) {
  return (
    <div className={`tab_card ${active ? "active" : ""}`}>
      {active && (
        <>
          <img src="/images/paint2.svg" className="paint2" alt="" />
          <img src="/images/paint1.svg" className="paint1" alt="" />
        </>
      )}
      <div className="image">
        <img src={`/images/${img}.webp`} alt="" />
        {plus && (
          <>
            <div className="plus">18+</div>
          </>
        )}
      </div>
      <div className="content">
        <div className="name">{name}</div>
        <div className="likes">
          <div className="like green">
            {likes}
            <img
              src={
                !active ? "/images/ThumbsUp.svg" : "/images/ThumbsUpGreen.svg"
              }
              alt="Thumbs Up"
            />
          </div>
          <div className="like">
            {dislikes}
            <img
              src={
                !active
                  ? "/images/ThumbsDown.svg"
                  : "/images/ThumbsDownDark.svg"
              }
              alt="Thumbs Up"
            />
          </div>
          <div className="like">
            {views}
            <img
              src={!active ? "/images/Eyes.svg" : "/images/EyesDark.svg"}
              alt="Thumbs Up"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default TabCard;
