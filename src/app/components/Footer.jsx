import React from 'react'

function Footer() {
  return (
    <footer>
            <img src="/images/footer_bg.svg" alt="" className='footer_bg'/>
        <div className="custom_container">
            <div className="icons">
                <a href='/' className="img">
                    <img src="/images/twitter.svg" alt="" />
                </a>
                <a href='/' className="img">
                    <img src="/images/instagram.svg" alt="" />
                </a>
                <a href='/' className="img">
                    <img src="/images/youtube.svg" alt="" />
                </a>
                <a href='/' className="img">
                    <img src="/images/facebook.svg" alt="" />
                </a>
            </div>
            <div className="bottom">
                <div className="left">© 2025 All Right Reserved</div>
                <div className="right">Terms of Service | Privacy Policy</div>
            </div>
        </div>
    </footer>
  )
}

export default Footer
