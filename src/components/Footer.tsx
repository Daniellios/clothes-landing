import React from 'react'

export const Footer = () => {
  const scrollUP = () => {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  }
  return (
    <footer>
      <div className="footer-grid">
        <div className="mobile-none">
          <h4>Subscribe to Newsletter</h4>
          <img className="newsletter" src="assets/images/newsletter-face.svg" alt="" />
        </div>
        <div>
          <ul>
            <li>Info</li>
            <li>FAQ</li>
            <li>Returns</li>
            <li>Contact</li>
          </ul>
        </div>
        <div>
          <ul>
            <li>Policy</li>
            <li>Terms</li>
            <li>Privacy</li>
            <li>Cookie</li>
          </ul>
        </div>
        <div className="mobile-none newsletter-input-div">
          <h5>Subscribe to our Newsletter</h5>
          <form id="form">
            <input type="email" placeholder="email address" required />
            <button id="submit">Submit</button>
          </form>
        </div>
      </div>
      <div className="arrow-up" onClick={scrollUP}>
        <img id="arrow-up" src="assets/images/arrow-up.svg" alt="" />
      </div>
      <div className="footer-bottom">
        <div className="flex-end">Credits</div>
        <div className="footer-bottom-flex"><div> &copy; 2024 Deplace </div> Maison.</div>
        <div className="flex-end">

        </div>
      </div>
    </footer>
  )
}
