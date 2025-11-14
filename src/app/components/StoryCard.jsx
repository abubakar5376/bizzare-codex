import React from 'react'

function StoryCard({ tags = [], likes, dislikes, name, para, img, rating, chapters, words, lastUPD, author }) {
    return (
        <div className='story_card'>
            <div className="top">
                <div className="tags">
                    {tags.map((tag, index) => (
                        <div key={index} className="tag">{tag}</div>
                    ))}
                </div>
                <div className="right">
                    <div className="like">
                        <p style={{color: '#26591C'}}>{likes}</p>
                        <img src="/images/ThumbsUpGreen.svg" alt="Likes" />
                    </div>
                    <div className="like">
                        <p>{dislikes}</p>
                        <img src="/images/ThumbsDownDark.svg" alt="Dislikes" />
                    </div>
                </div>
            </div>
            <div className="center">
                <div className="txt">
                    <h3>{name}</h3>
                    <p>{para}</p>
                </div>
                <div className="img">
                    <img src={`/images/${img}.webp`} alt={name} />
                </div>
            </div>
            <div className="bottom">
                <div className="rating">
                    <p>RATING</p>
                    <h5>{rating}</h5>
                </div>
                <div className="rating">
                    <p>CHAPTERS</p>
                    <h5>{chapters}</h5>
                </div>
                <div className="rating">
                    <p>WORDS</p>
                    <h5>{words}</h5>
                </div>
                <div className="rating">
                    <p>LAST UPD</p>
                    <h5>{lastUPD}</h5>
                </div>
                <div className="rating">
                    <p>Author</p>
                    <h5>{author}</h5>
                </div>
            </div>
        </div>
    )
}

export default StoryCard
