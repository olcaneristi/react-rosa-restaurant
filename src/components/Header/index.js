import React, { useState } from "react"
import { Link } from "react-router-dom"
import Brand from "../../dist/assets/logo-rosa.svg"
import { IoMdMenu, IoMdClose } from "react-icons/io"

function Header() {
  const [sidebar, setSidebar] = useState(false)
  const showSidebar = () => setSidebar(!sidebar)

  return (
    <section id="navbar" className="navbar">
      <div className="navbar__container container">
        <div className="navbar__brand">
          <Link to="/#">
            <img className="navbar__brand-image" src={Brand} alt="logo-rosa" />
          </Link>
        </div>
        <button
          type="button"
          className="navbar__sidebar-cta"
          onClick={showSidebar}
        >
          {sidebar ? <IoMdClose /> : <IoMdMenu />}
        </button>
        <nav className={sidebar ? "navbar__menu active" : "navbar__menu"}>
          <ul className="navbar__menu__list" onClick={showSidebar}>
            <li className="navbar__menu__list-items active">
              <Link to="/">Welcome</Link>
            </li>
            <li className="navbar__menu__list-items">
              <Link to="/Menu">Menu</Link>
            </li>
            <li className="navbar__menu__list-items">
              <Link to="/Reservations">Reservations</Link>
            </li>
            <li className="navbar__menu__list-items">
              <Link to="/News">News</Link>
            </li>
            <li className="navbar__menu__list-items">
              <Link to="/Contacts">Contact</Link>
            </li>
          </ul>
        </nav>
      </div>
    </section>
  )
}

export default Header
