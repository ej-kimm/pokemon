import { createContext, useContext, useState } from 'react'

export const PokemonContext = createContext()

export function PokemonProvider({ children }) {
  const [selectedPokemonList, setSelectedPokemonList] = useState([])

  const addPokemon = (pokemon) => {
    setSelectedPokemonList((prev) => {
      if (prev.length >= 6) return prev
      if (prev.find((p) => p.id === pokemon.id)) return prev
      return [...prev, pokemon]
    })
  }

  const removePokemon = (id) => {
    setSelectedPokemonList((prev) =>
      prev.filter((pokemon) => pokemon.id !== id)
    )
  }

  return (
    <PokemonContext.Provider
      value={{ selectedPokemonList, addPokemon, removePokemon }}
    >
      {children}
    </PokemonContext.Provider>
  )
}

export const usePokemon = () => useContext(PokemonContext)
