import React from 'react'
import Dashboard from './../components/Dashboard'
import PokemonList from './../components/PokemonList'
import { StyledDexLayout } from './../styles/layouts/StyledDex'

export default function Dex() {
  return (
    <StyledDexLayout>
      <Dashboard />
      <PokemonList />
    </StyledDexLayout>
  )
}
