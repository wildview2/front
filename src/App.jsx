import React from "react"
import { Route } from "react-router"
import { BrowserRouter, Routes } from "react-router-dom"
import { Home } from "./ui/pages/Home"

import { Registr } from "./ui/pages/Registration"
import { Zagruzka } from "./ui/pages/Zagruzka"
import { Rookery } from "./ui/pages/Rookery"
import { R34 } from "./ui/pages/R34"


export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Registr />} />

        <Route exact path="/Home" element={<Home />} />
        <Route exact path="/Zagruzka" element={<Zagruzka />} />
        <Route exact path="/registration" element={<Registr />} />
        <Route exact path="/rookery/:id" element={<Rookery />}/>
        <Route exact path="/R34" element={<R34 />}/>
      </Routes>
    </BrowserRouter>
  )
}