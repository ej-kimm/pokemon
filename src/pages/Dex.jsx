import React, { useState } from 'react'
import Dashboard from './../components/Dashboard'
import PokemonList from './../components/PokemonList'
import { StyledDexLayout } from './../styles/layouts/StyledDex'
import { PokemonProvider } from '../context/PokemonContext'

export default function Dex() {
  const [error, setError] = useState({ message: '', show: false })

  return (
    <StyledDexLayout>
      {error.show && <ErrorAlert message={error.message} setError={setError} />}
      <PokemonProvider>
        <Dashboard />
        <PokemonList />
      </PokemonProvider>
    </StyledDexLayout>
  )
}
