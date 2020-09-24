import React, { useEffect, useState } from "react"
import "./dist/styles/index.scss"
import { BrowserRouter as Router } from "react-router-dom"
import LoadingScreen from "./components/Loading"

import {
  About,
  Info,
  Footer,
  Header,
  Recipes,
  Blend,
  Welcome
} from "./components"

function App() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => setLoading(false), 1800)
  }, [])

  return (
    <>
      {loading === false ? (
        <div className="App">
          <Router>
            <Header />
            <Welcome />
            <About />
            <Recipes />
            <Blend />
            <Info />
            <Footer />
          </Router>
        </div>
      ) : (
        <LoadingScreen />
      )}
    </>
  )
}

export default App
