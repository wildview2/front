import React from "react"
import { Route } from "react-router"
import { BrowserRouter, Routes } from "react-router-dom"
import { Home } from "./ui/pages/Home"
import { Registr } from "./ui/pages/registration"

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Registr />} />
        <Route exact path="/registration" element={<Home />} />
        <Route exact path="/asdasd" element={<Registr />} />
      </Routes>
    </BrowserRouter>
  )
}
