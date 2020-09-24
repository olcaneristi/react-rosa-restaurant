import React from "react"
import { Link } from "react-router-dom"
import Story from "../../dist/assets/our-story-1.svg"
import { FaAsterisk } from "react-icons/fa"
import Zoom from "react-reveal"

function About() {
  return (
    <section id="about" className="about">
      <Zoom bottom cascade>
        <div className="about__wrapper">
          <div className="about__wrapper__text">
            <h1>Discover</h1>
            <h2>OUR STORY</h2>
            <div className="about__wrapper__text-logo">
              <FaAsterisk />
            </div>
            <span>
              Rosa is a restaurant, bar and coffee roastery located on a busy
              corner site in Farringdon's Exmouth Market. With glazed frontage
              on two sides of the building, overlooking the market and bustling
              London intersection.
            </span>
            <div className="about__wrapper__text-link">
              <Link to="">About Us</Link>
            </div>
          </div>
          <div className="about__wrapper__image">
            <img src={Story} alt="food" className="about__wrapper__image-img" />
          </div>
        </div>
      </Zoom>
    </section>
  )
}

export default About
