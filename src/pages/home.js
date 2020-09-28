import React from "react"
import { Welcome, Recipes, About, Footer, Blend, Info } from "../components"

function Home() {
  return (
    <section className="Welcome">
      <Welcome />
      <About />
      <Recipes />
      <Blend />
      <Info />
      <Footer />
    </section>
  )
}

export default Home
