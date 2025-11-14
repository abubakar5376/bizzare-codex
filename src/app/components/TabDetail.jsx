"use client";
import React from "react";

export default function TabDetail({
  rating,
  vols,
  chapters,
  likes,
  dislikes,
  views,
  awards,
  name,
  tags,
  para,
  autorName,
  releaseDate,
  lastDate,
  img,
}) {
  if (!name) return null;

  return (
    <div className="tab_detail">
      <div className="main_top">
        <div className="img_card">
          <div className="image">
            <img src={`/images/${img}big.webp`} alt="" />
          </div>
          <div className="batns">
            <button className="batn one">Read Work</button>
            <button className="batn two">Add to Favorite</button>
          </div>
        </div>

        <div className="info">
          <div className="top">
            <div className="left rating">
              <div className="ph4">
                <p>RATING</p>
                <h4 style={{ color: "#D71F1F" }}>{rating}</h4>
              </div>
              <div className="ph4">
                <p>VOLS.</p>
                <h4>{vols}</h4>
              </div>
              <div className="ph4">
                <p>CHAPTERS</p>
                <h4>{chapters}</h4>
              </div>
            </div>

            <div className="right rating">
              <div className="ph4">
                <p>LIKE</p>
                <h4 style={{ color: "#26591C" }}>
                  {likes}
                  <img src="/images/ThumbsUpGreen.svg" alt="" />
                </h4>
              </div>
              <div className="ph4">
                <p>DISLIKE</p>
                <h4>
                  {dislikes}
                  <img src="/images/ThumbsDownDark.svg" alt="" />
                </h4>
              </div>
              <div className="ph4">
                <p>VIEWS</p>
                <h4>
                  {views}
                  <img src="/images/EyesDark.svg" alt="" />
                </h4>
              </div>
              <div className="ph4">
                <p>AWARDS</p>
                <h4>
                  {awards}
                  <img src="/images/Trophy.svg" alt="" />
                </h4>
              </div>
            </div>
          </div>

          <div className="bottom">
            <h1>{name}</h1>
            <div className="tags">
              {tags?.map((item, index) => (
                <span
                  key={index}
                  style={{
                    color: item.color,
                    backgroundColor: item.bgColor,
                  }}
                >
                  {item.tag}
                </span>
              ))}
            </div>
            <p>{para}</p>
          </div>
        </div>
      </div>

      <div className="main_bottom">
        <div className="left">
          <div className="image">
            <div className="img">
              <img src="/images/author.webp" alt="" />
            </div>
            <img src="/images/border_img.svg" alt="" className="border_img" />
          </div>
          <div className="info">
            <p>Author</p>
            <h5>{autorName}</h5>
          </div>
        </div>

        <div className="right">
          <div className="date">
            <p>Release date</p>
            <h4>{releaseDate}</h4>
          </div>
          <div className="date">
            <p>Last Update</p>
            <h4>{lastDate}</h4>
          </div>
        </div>
      </div>
    </div>
  );
}
