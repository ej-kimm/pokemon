import React, { useState } from 'react'
import Dashboard from './../components/Dashboard'
import PokemonList from './../components/PokemonList'
import { StyledDexLayout } from './../styles/layouts/StyledDex'
import { PokemonProvider } from '../context/PokemonContext'

export default function Dex() {
  return (
    <StyledDexLayout>
      <PokemonProvider>
        <Dashboard />
        <PokemonList />
      </PokemonProvider>
    </StyledDexLayout>
  )
}
