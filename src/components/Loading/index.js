import React from "react"
import Rings from "../../dist/assets/rings.svg"

function LoadingScreen() {
  return (
    <div className="loading__screen">
      <img
        src={Rings}
        className="loading__screen-img"
        width="60"
        height="60"
        alt="loading"
      />
    </div>
  )
}

export default LoadingScreen
