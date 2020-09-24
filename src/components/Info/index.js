import React from "react"

function Info() {
  return (
    <section id="info" className="info">
      <div className="info__container">
        <div className="info__location">
          <h1>LOCATIONS</h1>
          <div className="info__location__address">
            <div className="info__location__address-text">
              {" "}
              <p>376 Van Brunt St</p>
              <span>Brooklyn, NY - 11231</span>
            </div>
            <div className="info__location__address-text">
              <p>25 Union Square West</p>
              <span>NewYork, NY - 10003</span>
            </div>
          </div>
        </div>
        <div className="info__workhours">
          <h1>HOURS</h1>
          <div className="info__workhours__open">
            <div className="info__workhours__open-days">
              {" "}
              <p>Monday - Thursday</p>
              <span>5:30pm - 10:00pm</span>
            </div>
            <div className="info__workhours__open-days">
              {" "}
              <p>Friday - Saturday</p>
              <span>5:30pm - 11:00pm</span>
            </div>
            <div className="info__workhours__open-days">
              <p>Available for private</p>
              <span>events on Sunday</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Info
