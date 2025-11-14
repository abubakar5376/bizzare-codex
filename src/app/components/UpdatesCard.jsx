import React from 'react'

function UpdatesCard({img, name, chapters, updated}) {
  return (
    <div className='updates_card'>
        <div className="img">
            <img src={`/images/${img}.webp`} alt="" />
        </div>
        <div className="info">
            <div className="name">{name}</div>
            <div className="chapters_updated">
                <div className="chapters">
                    <p>CHAPTERS</p>
                    <h5>{chapters}</h5>
                </div>
                <div className="chapters">
                    <p>UPDATED</p>
                    <h5>{updated}</h5>
                </div>
            </div>
        </div>
    </div>
  )
}

export default UpdatesCard
