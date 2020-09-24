import React from "react"
import { Link } from "react-router-dom"
import group1 from "../../dist/assets/delight-group-1.svg"
import group2 from "../../dist/assets/delight-group-2.svg"
import { FaAsterisk } from "react-icons/fa"
import Rotate from "react-reveal"

function Blend() {
  return (
    <section id="blend" className="blend">
      <div className="blend__container">
        <div className="blend__headline">
          <h1>The perfect</h1>
          <h2>Blend</h2>
        </div>{" "}
        <div className="blend__list">
          <Rotate bottom left>
            <div className="blend__list__text">
              <h1>Culinary</h1>
              <h2>Delight</h2>
              <div className="blend__list__text-logo">
                <FaAsterisk />
              </div>
              <span>
                We promise an intimate and relaxed dining experience that offers
                something different to local and foreign patrons and ensures you
                enjoy a memorable food experience every time.
              </span>
              <div className="blend__list__text-link">
                <Link to="">Make a Reservation</Link>
              </div>
            </div>
          </Rotate>

          <Rotate bottom right>
            <div className="blend__list__images">
              <img
                src={group1}
                alt="group1"
                className="blend__list__images-img"
                loading="lazy"
              />
              <img
                src={group2}
                alt="group2"
                className="blend__list__images-img"
                loading="lazy"
              />
            </div>
          </Rotate>
        </div>
      </div>
    </section>
  )
}

export default Blend
