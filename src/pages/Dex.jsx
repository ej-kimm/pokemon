import React, { useEffect, useState } from 'react'
import Dashboard from './../components/Dashboard'
import PokemonList from './../components/PokemonList'
import { StyledDexLayout } from './../styles/layouts/StyledDex'

export default function Dex() {
  const [pokemons, setPokemons] = useState([])
  const [selectedPokemonList, setSelectedPokemonList] = useState([])

  const handleSelectPokemon = (pokemon) => {
    setSelectedPokemonList((prev) => {
      if (prev.length >= 6) return prev
      if (prev.find((p) => p.id === pokemon.id)) return prev
      return [...prev, pokemon]
    })
  }

  const handleRemovePokemon = (id) => {
    setSelectedPokemonList(
      selectedPokemonList.filter((pokemon) => pokemon.id !== id)
    )
  }

  useEffect(() => {
    fetch('data/pokemons.json')
      .then((res) => res.json())
      .then((data) => setPokemons(data))
  }, [])

  return (
    <StyledDexLayout>
      <Dashboard
        selectedPokemonList={selectedPokemonList}
        onRemovePokemon={handleRemovePokemon}
      />
      <PokemonList pokemons={pokemons} onSelectPokemon={handleSelectPokemon} />
    </StyledDexLayout>
  )
}
