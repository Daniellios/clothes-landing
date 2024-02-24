import React, { useState } from 'react'

import logo from '../assets/images/de-logotype.svg'
import logoWhite from '../assets/images/de-logotype-white.svg'
import logoVert from '../assets/images/de-logotype-vert.svg'

export const Header = () => {
  const [isNavOpen, setIsNavOpen] = useState<boolean>(false)

  const hanldeMobileNavToggle = () => {
    if (isNavOpen) {
      setIsNavOpen(false)
      const body: any = document.querySelector('body');
      body.classList.toggle('stop-scrolling');
    } else {
      setIsNavOpen(true)
      const body: any = document.querySelector('body');
      body.classList.toggle('stop-scrolling');
    }
  }


  const tpggleInkMode = () => {
    const body = document.body
    let verticalLogo: any = document.querySelector('.vertical-logo');
    let newsletterLogo: any = document.querySelector('.newsletter');
    let facebookLogo: any = document.getElementById('facebook');
    let instagramLogo: any = document.getElementById('instagram');

    body.classList.toggle('ink');

    if (body.classList.contains('ink')) {
      verticalLogo.src = '../assets/images/ink-logo-vert.svg';
      newsletterLogo.src = '../assets/images/newsletter-side.svg';
      facebookLogo.src = '../assets/images/facebook2.svg';
      instagramLogo.src = '../assets/images/instagram2.svg';
    } else {
      verticalLogo.src = '../assets/images/de-logotype-vert.svg';
      newsletterLogo.src = '../assets/images/newsletter-face.svg';
      facebookLogo.src = '../assets/images/facebook1.svg';
      instagramLogo.src = '../assets/images/instagram1.svg';
    }
  }

  return (
    <header >
      <nav className="mobile-nav">
        <img className="logo" src={logo} alt="" />
        <div className="line" onClick={hanldeMobileNavToggle}></div>
        <div>CART</div>
      </nav>
      <div className={isNavOpen ? "mobile-nav-open block" : 'mobile-nav-open'}>
        <div className="mobile-nav-open-flex">
          {!isNavOpen && <img className="logo" src={logoWhite} alt="" />}
          <i id="close" onClick={hanldeMobileNavToggle} className="fas fa-times fa-3x"></i>
          <div style={{ marginLeft: 'auto' }}>CART</div>
        </div>
        <div className="tabs" />
        <div className="grid2x2">
          <div>FAQ</div>
          <div>RETURNS</div>
          <div>TERMS</div>
          <div>PRIVACY</div>
        </div>
        <div className="mobile-icons-row">
          <div className="mobile-column">
            <div>
              <svg className="mobile-nav-open-up-arrow" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                viewBox="0 0 70 70" spacing="preserve">
                <path style={{ fill: '#fff' }} d="M36,4c-0.6,1-1.1,1.6-1.8,2.5s-1.4,1.9-2.1,2.8c-1.4,1.9-2.7,3.8-4.1,5.6c-1.5,1.8-3.2,3.6-5.1,5
                        c-1.7,1.3-4,3.6-5.6,5c-1.9,1.8-2.6,1.5-1.2,4.6c0.2,0.4,0.4,0.8,0.8,0.9c0.4,0.1,0.8,0,1.1-0.2c6.5-3.1,11.3-8.7,16-14.2
                        c-0.6,14.8-1.1,29.6-1.7,44.4c-0.1,1.4-0.1,3,0.7,4.2c0.7,1.1,2.4,1.6,3.5,0.7c0.2-0.2,0.3-0.3,0.3-0.5c0-0.3,0.1-0.7,0.1-1
                        c0-2.8,0-5.7,0-8.5c0.1-2.8,0.1-5.6,0.2-8.4c0.1-2.8,0.2-5.6,0.3-8.4c0.1-2.8,0.3-5.6,0.4-8.4c0.2-2.8-0.3-6.1-0.1-8.9
                        c0.1-2.1,0.1-4.7,0.3-6.8c4.6,5.4,9,13.9,13.7,20c0.4,0.6,1.1,1.2,1.7,0.9c0.2-0.1,0.4-0.3,0.5-0.5c1.3-2.2,0.7-3.6-0.3-5.6
                        s-2.4-4.2-3.8-5.9c-4.1-5.2-7.3-11.5-10.4-17.4c-0.3-0.6-0.7-1.1-1.1-1.5c-0.3-0.3-0.5-0.9-1-0.9C36.9,3.5,36.1,3.8,36,4z"/>
              </svg>
            </div>
            <div >Ink Mode</div>
          </div>
        </div>
        <div className="inquiries">
          <div>Inquiries &#129042; info@deplacemaison.com</div>
        </div>
      </div>
      <nav className="desktop-nav">
        <div><img className="vertical-logo" src={logoVert} alt="" /></div>
        <div id="ink-mode" onClick={tpggleInkMode}>INK MODE</div>
        <div>CART</div>
      </nav>
    </header>
  )
}
