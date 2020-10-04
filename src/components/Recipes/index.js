import React from "react"
import { Link } from "react-router-dom"
import { FaAsterisk } from "react-icons/fa"
import menu1 from "../../dist/assets/menu1.svg"
import menu2 from "../../dist/assets/menu2.svg"
import menu3 from "../../dist/assets/menu3.svg"
import menu4 from "../../dist/assets/menu4.svg"
import { Slide } from "react-reveal"

function Menu() {
  return (
    <section id="menu" className="menu">
      <div className="menu__container">
        <div className="menu__headline">
          <h1>Tasteful</h1>
          <h2>Recipes</h2>
        </div>

        <div className="menu__list">
          <Slide left>
            <div className="menu__list__images">
              {" "}
              <img
                src={menu1}
                alt="menu1"
                className="menu__list__images-img"
                loading="lazy"
              />
              <img
                src={menu2}
                alt="menu2"
                className="menu__list__images-img"
                loading="lazy"
              />
              <img
                src={menu3}
                alt="menu3"
                className="menu__list__images-img"
                loading="lazy"
              />
              <img
                src={menu4}
                alt="menu4"
                className="menu__list__images-img"
                loading="lazy"
              />{" "}
            </div>
          </Slide>

          <Slide right>
            <div className="menu__list__text">
              <h1>Discover</h1>
              <h2>Menu</h2>
              <div className="menu__list__text-logo">
                <FaAsterisk />
              </div>
              <p>
                For those with pure food indulgence in mind, come next door and
                sate your desires with our ever changing internationally and
                seasonally inspired small plates. We love food, lots of
                different food, just like you.
              </p>
              <div className="menu__list__text-link">
                <Link to="/menu">View The Full Menu</Link>
              </div>
            </div>
          </Slide>
        </div>
      </div>
    </section>
  )
}

export default Menu
