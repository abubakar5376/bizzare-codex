import React from 'react'

function Welcome() {
  return (
    <div className='welcome'>
        <div className="custom_container">
            <img src="/images/welcome_img1.svg" alt="" className="image1" />
            <img src="/images/welcome_img2.svg" alt="" className="image2" />
            <img src="/images/mountains.svg" alt="" className='image'/>
            <div className="content">
                <img src="/images/eyes_svg.svg" alt="" className="img" />
                <h1>You're always welcome at our communitee!</h1>
                <p>Lorem ipsum dolor sit amet consectetur.</p>
                <div className='author_button'>
                    <p>Become an author</p>
                    <img src="/images/button_bg.svg" alt="" />
                </div>
            </div>
            <img src="/images/letters.svg" alt="" className='image' />
        </div>
    </div>
  )
}

export default Welcome
