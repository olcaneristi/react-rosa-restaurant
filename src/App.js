import React, { useEffect, useState } from "react"
import "./dist/styles/index.scss"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import LoadingScreen from "./components/Loading"

import { Header } from "./components"
import { Home, Menu, Reservations, Contacts, News } from "./pages"

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
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/menu" component={Menu} />
              <Route path="/reservations" component={Reservations} />
              <Route path="/news" component={News} />
              <Route path="/contacts" component={Contacts} />
            </Switch>
          </Router>
        </div>
      ) : (
        <LoadingScreen />
      )}
    </>
  )
}

export default App
