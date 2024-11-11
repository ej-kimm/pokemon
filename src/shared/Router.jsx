import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './../pages/Home'
import Dex from './../pages/Dex'
import PokemonDetail from './../pages/PokemonDetail'
import { Provider } from 'react-redux'
import store from '../redux/config/configStore'

export default function Router() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dex" element={<Dex />} />
          <Route path="/pokemon/:id" element={<PokemonDetail />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  )
}
