import React from "react"
import { IoMdAirplane } from "react-icons/io"
import Scrollchor from "react-scrollchor"

function Footer() {
  return (
    <section id="footer" className="footer">
      <button className="footer__cta">
        <Scrollchor to="#" animate={{ offset: 20, duration: 2000 }}>
          <IoMdAirplane />
        </Scrollchor>
      </button>

      <div className="footer__container">
        <div className="footer__copyright">
          <p>
            Copyright 2014 © Handcrafted by with love by{" "}
            <a href="/">PixelGrade</a> Team
          </p>
        </div>
        <div className="footer__interaction">
          <a href="/">Permissions and Copyright</a>
          <span>•</span>
          <a href="/">Contact The Team</a>
        </div>
      </div>
    </section>
  )
}

export default Footer
